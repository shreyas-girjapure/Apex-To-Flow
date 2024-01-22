import { BufferedTokenStream, CommonToken, ParserRuleContext  } from "antlr4ts";
import {
  ApexLexer,  
  CommonTokenStream,
  ApexParser,
  CaseInsensitiveInputStream,
  MethodDeclarationContext
} from "apex-parser";

class TestListener {
  constructor() { }

  // enterEveryRule(ctx) {        
  //   const ruleIndex = ctx.ruleIndex;
  //   const ruleName = parser.ruleNames[ruleIndex];
  //   const textValue = ctx.start.text;
  //   console.log(`${ruleName} >>>> ${textValue}`);
  // }  
  // exitEveryRule(ctx) {        
  //   const ruleIndex = ctx.ruleIndex;
  //   const ruleName = parser.ruleNames[ruleIndex];
  //   const textValue = ctx.start.text;
  //   console.log(`exit ${ruleName} >>>> ${textValue}`);
  // }  

  enterMethodDeclaration(ctx) {
    let text = ctx.start.text;
  }

  exitMethodDeclaration(ctx) {
    let startIndex = ctx.start.startIndex;
    console.log('the start ind ',startIndex);
    let stopIndex = ctx.stop.stopIndex;
    console.log('the stop ind ',stopIndex);  
  }
}

let classBody =
  "public class Hello  { public static String sayHello(String x){ return 'helloWorldl';}}";

  const lexer = new ApexLexer(new CaseInsensitiveInputStream({}, classBody));
const tokens = new CommonTokenStream(lexer);
const parser = new ApexParser(tokens);

lexer.removeErrorListeners();
parser.removeErrorListeners();
parser.addParseListener(new TestListener());
let tree = parser.compilationUnit();
