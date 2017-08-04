import * as ts from "typescript";
import * as fs from "fs";

function generateDocumentation(fileNames: string[], options: ts.CompilerOptions): void
{
  
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
    let result: Array<ts.Statement> = [];
    for (const sourceFile of program.getSourceFiles())
    {
      if (fileNames.includes(sourceFile.fileName))
      {
        result = result.concat(compileSourceFile(sourceFile));
      }
    }
    return ts.createBlock(result);
  }
  
  
  
  function compileSourceFile(node: ts.SourceFile): Array<ts.Statement>
  {
    console.log("compiling " + node.fileName);
    let result = [];
    for (const st of node.statements)
    {
      result = result.concat(compileStatement(st));
    }
    return result;
  }
  
  function compileStatement(node: ts.Statement): Array<ts.Statement>
  {
    let result: Array<ts.Statement> = [];
    switch (node.kind)
    {
      case ts.SyntaxKind.InterfaceDeclaration:
      {
        result = result.concat(compileInterfaceDeclaration(node as ts.InterfaceDeclaration));
        break;
      }
      case ts.SyntaxKind.VariableStatement:
      {
        result = result.concat(compileVariableStatement(node as ts.VariableStatement));
        break;
      }
      default:
        throw new Error("cannot handle statement " + ts.SyntaxKind[node.kind]);
    }
    return result;
  }
  
  function compileInterfaceDeclaration(node: ts.InterfaceDeclaration): Array<ts.Statement>
  {
    const interfaceType = checker.getTypeAtLocation(node);
    const interfaceName = interfaceType.getSymbol().getName();
    const result = [];
    
    const callSignatures = interfaceType.getCallSignatures();
    const callExpression = compileSignatures(callSignatures);
    const callStatement = createConstantAssignment(interfaceName, callExpression);
    result.push(callStatement);
  
    const properties = interfaceType.getProperties();
    for (const pr of properties)
    {
      const propertyName: string = pr.getName();
      const rightType = checker.getTypeAtLocation(pr.valueDeclaration);
      const expression = compileType(rightType);
      const propertyStatement = createPropertyAssignment(interfaceName, propertyName, expression);
      result.push(propertyStatement);
    }
    return result;
  }
  
  function compileVariableStatement(node: ts.VariableStatement): Array<ts.Statement>
  {
    let result = [];
    for (const varDecl of node.declarationList.declarations)
    {
      result = result.concat(compileVariableDeclaration(varDecl));
    }
    return result;
  }
  
  function compileVariableDeclaration(node: ts.VariableDeclaration) : Array<ts.Statement>
  {
    const variableName = node.name.text;
    const variableType = node.type;
    const typeExpression = compileType(variableType);
    const declarationStatement = createConstantAssignment(variableName, typeExpression);
    return [declarationStatement];
  }
    
  function join(exps: Array<ts.Expression>) : ts.Expression
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
  
  function compileSignatures(sigs : Array<ts.Signature>) : ts.Expression
  {
  
    function mergeSignatures(sigs: Array<ts.Signature>): Array<{typeParameters, parameters, type}>
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
    
    function compileMergedSignature(mergedSig: {typeParameters, parameters, type})
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
  
  function compileObject(objectType: ts.ObjectType) : ts.Expression
  {
    if ((objectType.objectFlags & ts.ObjectFlags.Anonymous) !== 0)
    {
      const callSignatures = objectType.getCallSignatures();
      const callExpression = compileSignatures(callSignatures);
      return callExpression;
    }
    throw new Error("cannot handle " + checker.typeToString(objectType) + " with flags " + objectType.objectFlags);
  }
  
  function compileType(type: ts.Type) : ts.Expression
  {
    return compileTypes([type]);
  }
  
  function compileTypes(types: Array<ts.Type>) : ts.Expression
  {
    const typeExpressions = [];
    while (types.length > 0)
    {
      const type: ts.Type = types.pop();
      if (type.flags === 0)
      {
        const typeName = type.typeName.text;
        const callExpression = ts.createCall(ts.createIdentifier(typeName), undefined, []);
        typeExpressions.push(callExpression);
      }
      else
      {
        if ((type.flags & ts.TypeFlags.Null) !== 0)
        {
          typeExpressions.push(ts.createNull());
        }
        if ((type.flags & ts.TypeFlags.Boolean) !== 0)
        {
          typeExpressions.push(ts.createIdentifier("boolean"));
        }
        if ((type.flags & ts.TypeFlags.Undefined) !== 0)
        {
          typeExpressions.push(ts.createIdentifier("undefined"));
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

//generateDocumentation(["types/jquery/index.d.ts"], {
const result = generateDocumentation(["test.ts"], {target: ts.ScriptTarget.ES5, module: ts.ModuleKind.CommonJS});

