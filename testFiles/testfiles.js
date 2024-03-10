import { BufferedTokenStream, CommonToken, ParserRuleContext } from "antlr4ts";
import {
  ApexLexer,
  CommonTokenStream,
  ApexParser,
  CaseInsensitiveInputStream,
} from "apex-parser";

class TestListener{
  constructor() { }

  enterEveryRule(ctx) {        
    const ruleIndex = ctx.ruleIndex;
    const ruleName = parser.ruleNames[ruleIndex];
    const currentRuleConstructorName = ctx?.ruleContext?.constructor?.name;
    const parentRuleConstructorName = ctx?.parent?.ruleContext?.constructor?.name;
    const textValue = ctx.start.text;
    console.log("RULE STARTED " + ruleName)
    console.log("The value >"+ textValue);
    console.log("The Const Name> "+ currentRuleConstructorName);
    console.log("The Parent  Name> "+ parentRuleConstructorName);
    console.log("The What even is this Name> "+ ctx?.parent?.ruleContext?.DOT);
    console.log("RULE ENDED ")
    console.log();
    //console.log(parser.ruleNames)
    //console.log(`${ruleName} >>>> ${textValue}`);
  }  
  // exitEveryRule(ctx) {        
  //   const ruleIndex = ctx.ruleIndex;
  //   const ruleName = parser.ruleNames[ruleIndex];
  //   const textValue = ctx.start.text;
  //   console.log(`exit ${ruleName} >>>> ${textValue}`);
  // }

  enterMethodDeclaration(ctx) {
    let text = ctx.start.text;

  }
  enterFormalParameterList(ctx){

  }
  // enterFormalParameters(ctx){
  //   console.log(ctx.start.text)
  // }


  // exitMethodDeclaration(ctx) {
  //   let startIndex = ctx.start.startIndex;
  //   console.log('the start ind ', startIndex);
  //   let stopIndex = ctx.stop.stopIndex;
  //   console.log('the stop ind ', stopIndex);
  // }
}

let classBody =
  "public class Hello  { public static String sayHello(String xInput){ String anotherVariable = 'defalut';}}";

const lexer = new ApexLexer(new CaseInsensitiveInputStream({}, classBody));
const tokens = new CommonTokenStream(lexer);
const parser = new ApexParser(tokens);
lexer.removeErrorListeners();
parser.removeErrorListeners();
parser.addParseListener(new TestListener());
let tree = parser.compilationUnit();
