import * as ts from "typescript";
import * as fs from "fs";

function generateDocumentation(fileNames: string[], options: ts.CompilerOptions): void
{
  
  interface IScopedResult
  {
    concat: (IScopedResult) => void;
    pushDecl: (ts.Statement) => void;
    pushInit: (ts.Statement) => void;
  }
  
  function ScopedResult()
  {
    this.decl = [];
    this.init = [];
  }
  
  ScopedResult.prototype.pushDecl =
      function (statement)
      {
        this.decl.push(statement);
      }
  
  ScopedResult.prototype.pushInit =
      function (statement)
      {
        this.init.push(statement);
      }
  
  ScopedResult.prototype.concat =
      function (scopedResult)
      {
        this.decl = this.decl.concat(scopedResult.decl);
        this.init = this.init.concat(scopedResult.init);
      }
  
  function createPropertyAssignment(objectName, propertyName, right)
  {
    const left = ts.createPropertyAccess(ts.createIdentifier(objectName), ts.createIdentifier(propertyName));
    const expression = ts.createAssignment(left, right);
    const statement = ts.createStatement(expression);
    return statement;
  }
  
  function createConstantAssignment(name, right)
  {
    const left = ts.createIdentifier(name);
    const expression = ts.createAssignment(left, right);
    const statement = ts.createStatement(expression);
    return statement;
  }
  
  
  function compileProgram(node: ts.Program): ts.Node
  {
    let result = new ScopedResult();
    for (const sourceFile of program.getSourceFiles())
    {
      if (fileNames.includes(sourceFile.fileName))
      {
        result.concat(compileSourceFile(sourceFile));
      }
    }
    return ts.createBlock(result.decl.concat(result.init));
  }
  
  
  function compileSourceFile(node: ts.SourceFile): IScopedResult
  {
    console.log("compiling " + node.fileName);
    let result = new ScopedResult();
    for (const st of node.statements)
    {
      result.concat(compileStatement(st));
    }
    return result;
  }
  
  function compileStatement(node: ts.Statement): IScopedResult
  {
    let result = new ScopedResult();
    switch (node.kind)
    {
      case ts.SyntaxKind.InterfaceDeclaration:
      {
        result.concat(compileInterfaceDeclaration(node as ts.InterfaceDeclaration));
        break;
      }
      case ts.SyntaxKind.VariableStatement:
      {
        result.concat(compileVariableStatement(node as ts.VariableStatement));
        break;
      }
      case ts.SyntaxKind.ModuleDeclaration:
      case ts.SyntaxKind.TypeAliasDeclaration:
      {
        console.log("skipping " + ts.SyntaxKind[node.kind]);
        break;
      }
      default:
        throw new Error("cannot handle statement " + ts.SyntaxKind[node.kind]);
    }
    return result;
  }
  
  function compileInterfaceDeclaration(node: ts.InterfaceDeclaration): IScopedResult
  {
    const interfaceType = checker.getTypeAtLocation(node);
    const interfaceName = interfaceType.getSymbol().getName();
    const result = new ScopedResult();
    
    const callSignatures = interfaceType.getCallSignatures();
    if (callSignatures.length > 0)
    {
      const expression = compileSignatures(callSignatures);
      const callStatement = createConstantAssignment(interfaceName, expression);
      result.pushDecl(callStatement);
    }
    else
    {
      const constructStatement = createConstantAssignment(interfaceName, ts.createObjectLiteral());
      result.pushDecl(constructStatement);
    }
    
    const properties = interfaceType.getProperties();
    for (const pr of properties)
    {
      const propertyName: string = pr.getName();
      const rightType = checker.getTypeAtLocation(pr.valueDeclaration);
      const expression = compileType(rightType);
      const propertyStatement = createPropertyAssignment(interfaceName, propertyName, expression);
      result.pushDecl(propertyStatement);
    }
    return result;
  }
  
  function compileVariableStatement(node: ts.VariableStatement): IScopedResult
  {
    let result = new ScopedResult();
    for (const varDecl of node.declarationList.declarations)
    {
      result.concat(compileVariableDeclaration(varDecl));
    }
    return result;
  }
  
  function compileVariableDeclaration(node: ts.VariableDeclaration): IScopedResult
  {
    const variableName = node.name.text;
    const variableType = node.type;
    const typeExpression = compileType(variableType);
    const declarationStatement = createConstantAssignment(variableName, typeExpression);
    const result = new ScopedResult();
    result.pushInit(declarationStatement);
    return result;
  }
  
  function join(exps: Array<ts.Expression>): ts.Expression
  {
    if (exps.length === 0)
    {
      throw new Error("no expressions to join");
    }
    if (exps.length === 1)
    {
      return exps[0];
    }
    return ts.createCall(ts.createIdentifier("join"), [], exps);
  }
  
  function compileSignatures(sigs: Array<ts.Signature>): ts.Expression
  {
    
    function mergeSignatures(sigs: Array<ts.Signature>): Array<{ typeParameters, parameters, type }>
    {
      let maxLength = 0;
      const type = new Set();
      for (const sig of sigs)
      {
        maxLength = Math.max(maxLength, sig.getParameters().length);
        type.add(sig.getReturnType());
      }
      const typeParameters = [];
      const parameters = [];
      for (let i = 0; i < maxLength; i++)
      {
        parameters.push("p" + i);
      }
      return [{typeParameters, parameters, type}];
    }
    
    function compileMergedSignature(mergedSig: { typeParameters, parameters, type })
    {
      const typeParameters = mergedSig.typeParameters;
      const parameters = mergedSig.parameters.map(p => ts.createParameter(undefined, undefined, undefined, ts.createIdentifier(p)));
      const type = undefined;
      const returnType = compileTypes([...mergedSig.type]);
      const body = ts.createBlock([ts.createReturn(returnType)]);
      const funDecl = ts.createFunctionExpression([], undefined, undefined, typeParameters, parameters, type, body);
      return funDecl;
    }
    
    const mergedSigs = mergeSignatures(sigs);
    const expressions = mergedSigs.map(compileMergedSignature);
    return join(expressions);
  }
  
  function compileObject(objectType: ts.ObjectType): ts.Expression
  {
    if ((objectType.objectFlags & ts.ObjectFlags.Anonymous) !== 0)
    {
      const callSignatures = objectType.getCallSignatures();
      if (callSignatures.length === 0)
      {
        const properties = objectType.getProperties();
        const propertyElements = properties.map(
            function (property)
            {
              const propertyName: string = property.getName();
              const rightType = checker.getTypeAtLocation(property.valueDeclaration);
              const initializer = compileType(rightType);
              const propertyElement = ts.createPropertyAssignment(propertyName, initializer);
              return propertyElement;
            });
        const objectExpression = ts.createObjectLiteral(propertyElements);
        return objectExpression;
      }
      else
      {
        const callExpression = compileSignatures(callSignatures);
        return callExpression;
      }
    }
    else if ((objectType.objectFlags & ts.ObjectFlags.Interface) !== 0)
    {
      const symbol = objectType.getSymbol();
      const typeName = symbol.getName();
      const expression = ts.createIdentifier(typeName);
      return expression;
    }
    else if ((objectType.objectFlags & ts.ObjectFlags.Reference) !== 0)
    {
      const symbol = objectType.getSymbol();
      const typeName = symbol.getName();
      const expression = ts.createIdentifier(typeName);
      return expression;
    }
    throw new Error("cannot handle " + checker.typeToString(objectType) + " with flags " + objectType.objectFlags);
  }
  
  function compileType(type: ts.Type): ts.Expression
  {
    return compileTypes([type]);
  }
  
  function compileTypes(types: Array<ts.Type>): ts.Expression
  {
    const typeExpressions = [];
    while (types.length > 0)
    {
      const type: ts.Type = types.pop();
      if (type.flags === 0)
      {
        // difference with objectFlag 4?
        const typeName = type.typeName.text;
        const expression = ts.createIdentifier(typeName);
        typeExpressions.push(expression);
      }
      else
      {
        if ((type.flags & ts.TypeFlags.Any) !== 0)
        {
          typeExpressions.push(ts.createIdentifier("any"));
        }
        if ((type.flags & ts.TypeFlags.Void) !== 0)
        {
          typeExpressions.push(ts.createIdentifier("void"));
        }
        if ((type.flags & ts.TypeFlags.Undefined) !== 0)
        {
          typeExpressions.push(ts.createIdentifier("undefined"));
        }
        if ((type.flags & ts.TypeFlags.Null) !== 0)
        {
          typeExpressions.push(ts.createNull());
        }
        if ((type.flags & ts.TypeFlags.Boolean) !== 0)
        {
          typeExpressions.push(ts.createIdentifier("boolean"));
        }
        if ((type.flags & ts.TypeFlags.String) !== 0)
        {
          typeExpressions.push(ts.createIdentifier("string"));
        }
        if ((type.flags & ts.TypeFlags.Number) !== 0)
        {
          typeExpressions.push(ts.createIdentifier("number"));
        }
        if ((type.flags & ts.TypeFlags.Object) !== 0)
        {
          typeExpressions.push(compileObject(type as ts.ObjectType));
        }
        if ((type.flags & ts.TypeFlags.TypeParameter) !== 0) // TODO figure out best way of detecting `this`
        {
          if (!type.isThisType)
          {
            typeExpressions.push(ts.createThis());
          }
          else
          {
            typeExpressions.push(ts.createIdentifier("any"));
          }
        }
        if ((type.flags & ts.TypeFlags.Union) !== 0)
        {
          typeExpressions.push(ts.createIdentifier("union"));
        }
        if ((type.flags & ts.TypeFlags.Intersection) !== 0)
        {
          typeExpressions.push(ts.createIdentifier("intersection"));
        }
      }
    }
    
    return join(typeExpressions);
  }
  
  const program = ts.createProgram(fileNames, options);
  const checker = program.getTypeChecker();
  const printer = ts.createPrinter({newLine: ts.NewLineKind.LineFeed});
  const resultFile = ts.createSourceFile("generated.ts", "", ts.ScriptTarget.Latest, /*setParentNodes*/ false, ts.ScriptKind.TS);
  const result = compileProgram(program);
  const printed = printer.printNode(ts.EmitHint.Unspecified, result, resultFile);
  fs.writeFileSync(resultFile.fileName, printed);
}

const result = generateDocumentation([
  //"test.ts",
  "types/jquery/index.d.ts"
], {target: ts.ScriptTarget.ES5, module: ts.ModuleKind.CommonJS});

