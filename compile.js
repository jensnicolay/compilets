"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const fs = require("fs");
function generateDocumentation(fileNames, options) {
    function mergeSignatures(sigs) {
        let maxLength = 0;
        const type = new Set();
        for (const sig of sigs) {
            maxLength = Math.max(maxLength, sig.getParameters().length);
            type.add(sig.getReturnType());
        }
        const typeParameters = [];
        const parameters = [];
        for (let i = 0; i < maxLength; i++) {
            parameters.push("p" + i);
        }
        return { typeParameters, parameters, type };
    }
    function createPropertyAssignment(objectName, propertyName, right) {
        const left = ts.createPropertyAccess(ts.createIdentifier(objectName), ts.createIdentifier(propertyName));
        const expression = ts.createAssignment(left, right);
        const statement = ts.createStatement(expression);
        return statement;
    }
    function createConstantAssignment(name, right) {
        const left = ts.createIdentifier(name);
        const expression = ts.createAssignment(left, right);
        const statement = ts.createStatement(expression);
        return statement;
    }
    function compileProgram(node) {
        let result = [];
        for (const sourceFile of program.getSourceFiles()) {
            if (fileNames.includes(sourceFile.fileName)) {
                result = result.concat(compileSourceFile(sourceFile));
            }
        }
        return ts.createBlock(result);
    }
    function compileSourceFile(node) {
        console.log("compiling " + node.fileName);
        let result = [];
        for (const st of node.statements) {
            result = result.concat(compileStatement(st));
        }
        return result;
    }
    function compileStatement(node) {
        let result = [];
        switch (node.kind) {
            case ts.SyntaxKind.InterfaceDeclaration:
                {
                    result = result.concat(compileInterfaceDeclaration(node));
                    break;
                }
            default:
                throw new Error("cannot handle statement " + ts.SyntaxKind[node.kind]);
        }
        return result;
    }
    function compileInterfaceDeclaration(node) {
        const interfaceType = checker.getTypeAtLocation(node);
        const interfaceName = interfaceType.getSymbol().getName();
        const callSignatures = interfaceType.getCallSignatures();
        const properties = interfaceType.getProperties();
        const mergedSig = mergeSignatures(callSignatures);
        const result = [];
        const typeParameters = mergedSig.typeParameters;
        const parameters = mergedSig.parameters.map(p => ts.createParameter(undefined, undefined, undefined, ts.createIdentifier(p)));
        const type = undefined;
        const returnType = compileTypes([...mergedSig.type]);
        const body = ts.createBlock([ts.createReturn(returnType)]);
        const funDecl = ts.createFunctionExpression([], undefined, undefined, typeParameters, parameters, type, body);
        const callStatement = createConstantAssignment(interfaceName, funDecl);
        result.push(callStatement);
        for (const pr of properties) {
            const propertyName = pr.getName();
            const rightType = checker.getTypeAtLocation(pr.valueDeclaration);
            const expression = compileType(rightType);
            const propertyStatement = createPropertyAssignment(interfaceName, propertyName, expression);
            result.push(propertyStatement);
        }
        return result;
    }
    function compileObject(objectType) {
        if ((objectType.objectFlags & ts.ObjectFlags.Anonymous) !== 0) {
            const callSignatures = objectType.getCallSignatures();
            const mergedSig = mergeSignatures(callSignatures);
            const typeParameters = mergedSig.typeParameters;
            const parameters = mergedSig.parameters.map(p => ts.createParameter(undefined, undefined, undefined, ts.createIdentifier(p)));
            const type = undefined;
            const returnType = compileTypes([...mergedSig.type]);
            const body = ts.createBlock([ts.createReturn(returnType)]);
            const funDecl = ts.createFunctionExpression([], undefined, undefined, typeParameters, parameters, type, body);
            return funDecl;
        }
        throw new Error("cannot handle " + checker.typeToString(objectType) + " with flags " + objectType.objectFlags);
    }
    function compileType(type) {
        return compileTypes([type]);
    }
    function compileTypes(types) {
        const typeExpressions = [];
        while (types.length > 0) {
            const type = types.pop();
            if ((type.flags & ts.TypeFlags.Null) !== 0) {
                typeExpressions.push(ts.createNull());
            }
            if ((type.flags & ts.TypeFlags.Boolean) !== 0) {
                typeExpressions.push(ts.createIdentifier("boolean"));
            }
            if ((type.flags & ts.TypeFlags.Undefined) !== 0) {
                typeExpressions.push(ts.createIdentifier("undefined"));
            }
            if ((type.flags & ts.TypeFlags.String) !== 0) {
                typeExpressions.push(ts.createIdentifier("string"));
            }
            if ((type.flags & ts.TypeFlags.Number) !== 0) {
                typeExpressions.push(ts.createIdentifier("number"));
            }
            if ((type.flags & ts.TypeFlags.Object) !== 0) {
                typeExpressions.push(compileObject(type));
            }
        }
        if (typeExpressions.length === 1) {
            return typeExpressions[0];
        }
        return ts.createCall(ts.createIdentifier("join"), [], typeExpressions);
    }
    const program = ts.createProgram(fileNames, options);
    const checker = program.getTypeChecker();
    const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
    const resultFile = ts.createSourceFile("generated.ts", "", ts.ScriptTarget.Latest, /*setParentNodes*/ false, ts.ScriptKind.TS);
    const result = compileProgram(program);
    const printed = printer.printNode(ts.EmitHint.Unspecified, result, resultFile);
    fs.writeFileSync(resultFile.fileName, printed);
}
//generateDocumentation(["types/jquery/index.d.ts"], {
const result = generateDocumentation(["test.ts"], { target: ts.ScriptTarget.ES5, module: ts.ModuleKind.CommonJS });
//# sourceMappingURL=compile.js.map