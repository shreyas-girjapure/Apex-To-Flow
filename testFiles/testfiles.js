import { BufferedTokenStream, CommonToken, ParserRuleContext, RuleContext } from "antlr4ts";
import {
  ApexLexer,
  CommonTokenStream,
  ApexParser,
  CaseInsensitiveInputStream,
  MethodCallContext,
} from "apex-parser";

class VariableDeclarationListener {
  declaredVariables = {
    allVariables: [],
    inputVariables: [],
    localVariables: [],
    outputVariables: [],
  }

  enterEveryRule(ctx) {
    const ruleIndex = ctx.ruleIndex;
    const ruleName = parser.ruleNames[ruleIndex];
    const currentRuleConstructorName = ctx?.ruleContext?.constructor?.name;
    const currentRuleConstructorValue = ctx?.ruleContext?.start?.text;
    const parentRuleConstructorName = ctx?.parent?.ruleContext?.constructor?.name;
    const parentRuleConstructorValue = ctx?.parent?.ruleContext?.start.text;
    const grandParentRuleConstructorName = ctx?.parent?.parent?.ruleContext?.constructor?.name;
    const grandParentRuleConstructorValue = ctx?.parent?.parent?.ruleContext?.start.text;
    const textValue = ctx.ruleContext.start.text;
    console.log("RULE STARTED " + ruleName)
    console.log("The value > " + textValue);
    console.log("The anpther > " + textValue);
    console.log("The Constructor Name > " + currentRuleConstructorName);
    console.log("The Constructor Value > " + currentRuleConstructorValue);
    console.log("The Parent  Name > " + parentRuleConstructorName);
    console.log("The Parent  Value > " + parentRuleConstructorValue);
    console.log("The Grand Parent  Name > " + grandParentRuleConstructorName);
    console.log("The Grand Parent  Value > " + grandParentRuleConstructorValue);
    console.log("RULE ENDED ")
    console.log();

  }


}


class VariableDeclarationListenerTest {
  declaredVariables = {
    allVariables: [],
    inputVariables: [],
    localVariables: [],
    outputVariables: [],
  }
  

  enterEveryRule(ctx) {
    const ruleIndex = ctx.ruleIndex;
    const ruleName = parser.ruleNames[ruleIndex];
    const textValue = ctx.start.text;
    const parentText = ctx?.parent?.ruleContext?.start?.text;
    const parentRuleIndex = ctx?.parent?.ruleIndex;
    const parentRuleName = parser.ruleNames[parentRuleIndex];
    console.log("RULE STARTED " + ruleName +" and index "+ruleIndex);
    console.log("The value > " + textValue);
    console.log("Parent Rule Name? > " + parentRuleName + " and index "+parentRuleIndex);
    console.log("Parent Text? > " + parentText);
    console.log("RULE ENDED ")
    console.log();
  }

  exitEveryRule(ctx) {
    const ruleIndex = ctx.ruleIndex;
    const ruleName = parser.ruleNames[ruleIndex];
    const textValue = ctx.start.text;
    const parentText = ctx?.parent?.ruleContext?.start?.text;
    const parentRuleIndex = ctx?.parent?.ruleIndex;

    const parentRuleName = parser.ruleNames[ctx?.parent?.ruleIndex];
    console.log("RULE Exit " + ruleName+" and index "+ruleIndex)
    console.log("The value > " + textValue);
    console.log("Parent Rule Name? > " + parentRuleName + " and index "+parentRuleIndex);
    console.log("Parent Text? > " + parentText);
    console.log("RULE ENDED ")
    console.log();
  }

}
// let classBody =
//   "public class Hello  { public static String sayHello(String xInput, Integer xInteger,List<String> numList){ String anotherVariable = 'default'; Boolean someBool = false; String finalValue = anotherVariable + 'exact'; List<Account> accList = new List<Account>(); return someBool;}}";


let classBody = "public class Hello  { public static String sayHello(String xInput){}}";
const lexer = new ApexLexer(new CaseInsensitiveInputStream({}, classBody));
const tokens = new CommonTokenStream(lexer);
const parser = new ApexParser(tokens);
lexer.removeErrorListeners();
parser.removeErrorListeners();

parser.addParseListener(new VariableDeclarationListenerTest());
let tree = parser.compilationUnit();
