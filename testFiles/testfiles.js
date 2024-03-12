import {
  ApexLexer,
  CommonTokenStream,
  ApexParser,
  CaseInsensitiveInputStream,
  ParseTreeWalker
} from "apex-parser";

class VariableDeclarationListener {

  enterFormalParameter(ctx) {
    const typeRef = ctx.typeRef();
    const varName = ctx.id().text;
    const varType = this.getTypeAsString(typeRef);
    console.log('Variable Name: ' + varName + ', Variable Type: ' + varType);
  }
  enterLocalVariableDeclaration(ctx) {
    const typeRef = ctx.typeRef();
    const variableDeclaratorsContext = ctx.variableDeclarators();
    this.handleVariableDeclarators(typeRef, variableDeclaratorsContext);
  }

  handleVariableDeclarators(typeRef, variableDeclaratorsContext) {
    if (variableDeclaratorsContext) {
      variableDeclaratorsContext.variableDeclarator().forEach(variableDeclarator => {
        const varName = variableDeclarator.id().text;
        const varType = this.getTypeAsString(typeRef);
        console.log('Variable Name: ' + varName + ', Variable Type: ' + varType);
      });
    }
  }
  getTypeAsString(typeRef) {
    const typeNames = typeRef.typeName();
    if (typeNames && typeNames.length > 0) {
      const typeStrings = typeNames.map(typeName => this.getTypeName(typeName));
      return typeStrings.join('|');
    }
    return "";
  }


  getTypeName(typeNameContext) {
    if (typeNameContext) {
      const baseType = typeNameContext.id() ? typeNameContext.id().text : "";

      if (typeNameContext.LIST()) {
        return 'List<' + this.getTypeArguments(typeNameContext.typeArguments()) + '>';
      } else if (typeNameContext.SET()) {
        return 'Set<' + this.getTypeArguments(typeNameContext.typeArguments()) + '>';
      } else if (typeNameContext.MAP()) {
        return 'Map<' + this.getTypeArguments(typeNameContext.typeArguments()) + '>';
      } else {
        return baseType;
      }
    }
    return "";
  }


  getTypeArguments(typeArgumentsContext) {
    if (typeArgumentsContext) {
      const typeList = typeArgumentsContext.typeList();
      return this.getTypeList(typeList);
    }
    return "";
  }

  getTypeList(typeListContext) {
    if (typeListContext) {
      return typeListContext.typeRef().map(typeRef => this.getTypeAsString(typeRef)).join(', ');
    }
    return "";
  }
}

let classBody = `public class Hello  {
  public static String sayHello(List<Account> accList , String xInput,List<String> someLst , List<List<String>> deepStrings){
    String xLocal = '1';
    List<Contact> someContacts = new List<Contacts>();
    List<Account> accListNew = [Select id from account];
    againSomeMethod(xLocal);    
  }
  public static void againSomeMethod(String yInput){
    
  }
}`;

const lexer = new ApexLexer(new CaseInsensitiveInputStream({}, classBody));
const tokens = new CommonTokenStream(lexer);

const parser = new ApexParser(tokens)

parser.removeErrorListeners()

const cu = parser.compilationUnit()
ParseTreeWalker.DEFAULT.walk(new VariableDeclarationListener(), cu)
