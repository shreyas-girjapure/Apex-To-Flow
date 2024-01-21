import {
    ApexLexer,
    CommonTokenStream,
    ApexParser,
    CaseInsensitiveInputStream,
  } from "apex-parser";
  
  class DeclarationTypeListener {
    createdNames = new Set();
    ignoredTypes = new Set(["map", "set", "list"]);
  
    constructor() {}
  
    enterCreatedName(ctx) {
      this.handleSObjects(ctx);
    }
  
    enterFormalParameterList(ctx) {
      this.handleSObjects(ctx);
    }
  
    enterTypeList(ctx) {
      this.handleSObjects(ctx);
    }
  
    enterTypeRef(ctx) {
      this.handleSObjects(ctx);
    }
  
    enterTypeName(ctx) {
      this.handleSObjects(ctx);
    }
  
    enterLocalVariableDeclarationStatement(ctx) {
      this.handleSObjects(ctx);
    }
  
    enterEnhancedForControl(ctx) {
      this.handleSObjects(ctx);
    }
  
    enterFromNameList(ctx) {
      this.handleSObjects(ctx);
    }
  
    enterEnhancedForControl(ctx) {
      this.handleSObjects(ctx);
    }
  
    handleSObjects(ctx) {
      console.log("mew");
      const name = ctx.start.text.toLowerCase();
      if (!this.ignoredTypes.has(name)) {
        this.createdNames.add(name);
      }
    }
  }
  
  let classBody =
    "public class Hello  { public static String name = 'test';public static string sayHello(){ return 'helloWorldl';}}";
  const lexer = new ApexLexer(new CaseInsensitiveInputStream({}, classBody));
  const tokens = new CommonTokenStream(lexer);
  const parser = new ApexParser(tokens);
  
  lexer.removeErrorListeners();
  parser.removeErrorListeners();
  
  tokens.fill();
  
  let tokenMap = parser.getTokenTypeMap();
  
  for (const [key, value] of tokenMap.entries()) {
    console.log("the key " + key + " val " + value);
  }
  
  for (const token of tokens.getTokens()) {
    console.log(`${token.text} and ${token.type} `);
  }
  
  console.log(parser.typeDeclaration().children[0]);
  