import * as ts from "typescript";
import * as fs from "fs";

/** Generate documentation for all classes in a set of .ts files */
function generateDocumentation(fileNames: string[], options: ts.CompilerOptions): void 
{

    function mergeSignatures(sigs:Array<ts.Signature>): Array<any>
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

    function compileProgram(node : ts.Program) : ts.Node
    {
        let result : Array<ts.Statement> = [];
        for (const sourceFile of program.getSourceFiles())
        {
            if (fileNames.includes(sourceFile.fileName))
            {
                result = result.concat(compileSourceFile(sourceFile));
            }
        }
        return ts.createBlock(result);
    }

    function compileSourceFile(node: ts.SourceFile) : Array<ts.Statement>
    {
        console.log("compiling " + node.fileName);
        let result = [];
        for (const st of node.statements)
        {
            result = result.concat(compileStatement(st));
        }
        return result;
    }

    function compileStatement(node: ts.Statement) : Array<ts.Statement>
    {
        let result : Array<ts.Statement> = [];
        switch (node.kind)
        {
            case ts.SyntaxKind.InterfaceDeclaration:
            {
                result = result.concat(compileInterfaceDeclaration(node as ts.InterfaceDeclaration));
                break;
            }
            default: throw new Error("cannot handle statement kind " + node.kind);
        }
        return result;
    }

    function compileInterfaceDeclaration(node: ts.InterfaceDeclaration) : Array<ts.Statement>
    {
        const interfaceType = checker.getTypeAtLocation(node);
        const callSignatures = interfaceType.getCallSignatures();
        const properties = interfaceType.getProperties();

        const mergedSigs = mergeSignatures(callSignatures);

        const result = [];
        for (const ms of mergedSigs)
        {
            const name = ts.createIdentifier(node.name.getText());
            const typeParameters = [];
            const parameters = ms.parameters.map(p => ts.createParameter(undefined, undefined, undefined, ts.createIdentifier(p)));
            const type = ts.createUnionTypeNode([...ms.type].map(t => checker.typeToTypeNode(t)));
            const body = ts.createBlock([]);
            const funDecl = ts.createFunctionDeclaration([], [], undefined, name, typeParameters, parameters, type, body);
            result.push(funDecl);
        }
        return result;
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
const result = generateDocumentation(["test.ts"], {
    target: ts.ScriptTarget.ES5, module: ts.ModuleKind.CommonJS
});

