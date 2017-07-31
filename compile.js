"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const fs = require("fs");
function mapJoin(map, key, value, join) {
    const result = map.get(key);
    if (result === undefined) {
        map.set(key, value);
    }
    else {
        map.set(key, join(result, value));
    }
}
/** Generate documentation for all classes in a set of .ts files */
function generateDocumentation(fileNames, options) {
    function SourceFiles() {
        this.sourceFiles = [];
    }
    SourceFiles.prototype.add =
        function (sf) {
            this.sourceFiles.push(sf);
        };
    SourceFiles.prototype.toString =
        function () {
            return this.sourceFiles.join();
        };
    function Statements() {
        this.statements = [];
    }
    Statements.prototype.add =
        function (st) {
            this.statements.push(st);
        };
    Statements.prototype.toString =
        function () {
            return this.statements.join();
        };
    function Signatures(name) {
        this.propertySignatures = new PropertySignatures(name);
        this.methodSignatures = new MethodSignatures(name);
        this.callSignatures = new CallSignatures(name);
    }
    Signatures.prototype.add =
        function (sig) {
            let sigs;
            if (ts.isPropertySignature(sig)) {
                sigs = this.propertySignatures;
            }
            else if (ts.isMethodSignature(sig)) {
                sigs = this.methodSignatures;
            }
            else if (ts.isCallSignatureDeclaration(sig)) {
                sigs = this.callSignatures;
            }
            sigs.add(sig);
        };
    Signatures.prototype.toString =
        function () {
            let sb = "";
            sb += this.callSignatures.toString();
            sb += this.propertySignatures.toString();
            sb += this.methodSignatures.toString();
            return sb;
        };
    function PropertySignatures(name) {
        this.name = name;
        this.propertySignatures = [];
    }
    PropertySignatures.prototype.add =
        function (sig) {
            this.propertySignatures.push(sig);
        };
    PropertySignatures.prototype.toString =
        function () {
            const name = this.name;
            for (const propSig of this.propertySignatures) {
                let sb = "";
                sb += name + "." + propSig.name.getText() + " = " + propSig.type.getText() + ";\n";
                return sb;
            }
        };
    function MethodSignatures(name) {
        this.name = name;
        this.methodSignatures = new Map();
    }
    MethodSignatures.prototype.add =
        function (sig) {
            const key = sig.name.getText();
            if (!this.methodSignatures.has(key)) {
                this.methodSignatures.set(key, new Parameters());
            }
            this.methodSignatures.get(key).add(sig.parameters);
        };
    MethodSignatures.prototype.toString =
        function () {
            const name = this.name;
            let sb = "";
            for (const methodSigEntry of this.methodSignatures) {
                const [methodName, methodSigs] = methodSigEntry;
                sb += name + "." + methodName + " = function (" + methodSigs + ") {};\n";
            }
            return sb;
        };
    function CallSignatures(name) {
        this.name = name;
        this.parameters = new Parameters();
    }
    CallSignatures.prototype.add =
        function (sig) {
            this.parameters.add(sig.parameters);
        };
    CallSignatures.prototype.toString =
        function () {
            const name = this.name;
            let sb = "function " + name + "(" + this.parameters + ")\n{\n";
            sb += "\n}\n";
            return sb;
        };
    function Parameters() {
        this.numParams = 0;
    }
    Parameters.prototype.add =
        function (params) {
            this.numParams = Math.max(this.numParams, params.length);
        };
    Parameters.prototype.toString =
        function () {
            const sig = [];
            for (let i = 0; i < this.numParams; i++) {
                sig.push("p" + i);
            }
            return sig.join();
        };
    function compileProgram(node) {
        let result = new SourceFiles();
        for (const sourceFile of program.getSourceFiles()) {
            // Walk the tree to search for classes
            if (fileNames.includes(sourceFile.fileName)) {
                result.add(compileSourceFile(sourceFile));
            }
        }
        return result;
    }
    function compileSourceFile(node) {
        console.log(node.fileName);
        let result = new Statements();
        for (const st of node.statements) {
            result.add(compileStatement(st));
        }
        return result;
    }
    function compileStatement(node) {
        switch (node.kind) {
            // case ts.SyntaxKind.VariableStatement:
            // {
            //     for (const decl of (node as ts.VariableStatement).declarationList.declarations)
            //         {
            //             return statements.addVariableDeclaration()
            //         }
            // }
            // case ts.SyntaxKind.TypeReference:
            // {
            //     const type = checker.getTypeFromTypeNode(node as ts.TypeNode);
            //     return compileType(type);
            // }
            // case ts.SyntaxKind.ModuleDeclaration:
            // case ts.SyntaxKind.TypeAliasDeclaration:
            case ts.SyntaxKind.InterfaceDeclaration:
                {
                    const id = node;
                    let result = new Signatures(id.name.getText());
                    for (const sig of id.members) {
                        result.add(compileSignature(sig));
                    }
                    return result;
                }
            default: throw new Error("cannot handle statement kind " + node.kind);
        }
    }
    function compileSignature(node) {
        switch (node.kind) {
            case ts.SyntaxKind.PropertySignature:
                return compilePropertySignature(node);
            case ts.SyntaxKind.MethodSignature:
                return compileMethodSignature(node);
            case ts.SyntaxKind.CallSignature:
                return compileCallSignatureDeclaration(node);
            default: throw new Error("cannot handle signature kind " + node.kind);
        }
    }
    function compileCallSignatureDeclaration(node) {
        return node;
    }
    function compileMethodSignature(node) {
        return node;
    }
    function compilePropertySignature(node) {
        return node;
    }
    function compileType(node) {
        return node;
    }
    // function compileType(type: ts.Type): string
    // {
    //     if ((type.flags & ts.TypeFlags.Object) !== 0)
    //     {
    //         let result = "{";
    //         const compiled = type.getProperties().map(compileSymbol);
    //         result += compiled.join(",\n");
    //         result += "}\n";
    //         return result;
    //     }
    //     else if ((type.flags & ts.TypeFlags.Any) !== 0)
    //     {
    //         return "any";
    //     }
    //     else if ((type.flags & ts.TypeFlags.String) !== 0)
    //     {
    //         return "string";
    //     }
    //     else if ((type.flags & ts.TypeFlags.Boolean) !== 0)
    //     {
    //         return "boolean";
    //     }
    //     else if ((type.flags & ts.TypeFlags.Number) !== 0)
    //     {
    //         return "number";
    //     }
    //     else if ((type.flags & ts.TypeFlags.Null) !== 0)
    //     {
    //         return "null";
    //     }
    //     else if ((type.flags & ts.TypeFlags.Undefined) !== 0)
    //     {
    //         return "undefined";
    //     }
    //     else
    //     {
    //         throw new Error("cannot handle type with flags " + type.flags);
    //     }
    // }
    // Build a program using the set of root file names in fileNames
    let program = ts.createProgram(fileNames, options);
    // Get the checker, we will use it to find more about classes
    let checker = program.getTypeChecker();
    let result = compileProgram(program);
    // print out the doc
    fs.writeFileSync("generated.js", result);
}
//generateDocumentation(["types/jquery/index.d.ts"], {
const result = generateDocumentation(["test.ts"], {
    target: ts.ScriptTarget.ES5, module: ts.ModuleKind.CommonJS
});
//# sourceMappingURL=compile.js.map