## Examples

### Simple Functions

Input :

```JAVA
public static String sayHello(String firstName,String lastName){
    String resultString = 'Hello ' + firstName + ' ' + lastName;
    return resultString;
}
```

Output :

Autolaunch flow metadata with

1. Flow name same as methodName `sayHello`
1. `firstName` as `Available for input` variable.
1. `lastName` as `Available for input` variable.
1. Assignment node for `resultString`.
1. `resultString` as `Available for output` variable.

### Retrieve and Conditions

```JAVA
public static List<Account> getAccounts(List<String> accountIds){
    List<Account> accList = new List<Account>();
    if(accountIds.isEmpty()){
        return accList;
    }
    accList = [Select id , name from account where id in:accountIds];

    return accList;
}
```
Output :

Autolaunch flow metadata with

1. Flow name same as methodName
1. `accountIds` as `Available for input` variable.
1. `accList` new variable.
1. `Decision` node for checking if `accList isEmpty()`.
1. Get element for making query with provided fields.
1. `accList` variable `Available for output`.

### DMLs and Loops

```JAVA
public static void transformSomeList(List<String> accountIds){
    if(accountIds.isEmpty()){
        return ;
    }
    List<Account> accList = new List<Account>();
    
    accList = [Select id , name , description from account where id in: accountIds ];

    if(accountList.isEmpty()){
        return ;        
    }

    for(Account acc : accList){
        acc.description = acc.name + 'some string';
    }

    update accList;
}
```