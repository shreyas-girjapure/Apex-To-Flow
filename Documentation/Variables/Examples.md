# Examples

## Variable Declaration
### String
```JAVA
String someVariable ;
```
```JSON
    {
      "apexClass": null,
      "dataType": "String",
      "description": null,
      "isCollection": false,
      "isInput": false,
      "isOutput": false,
      "name": "someVariable",
      "objectType": null,
      "processMetadataValues": [],
      "scale": null,
      "value": null
    }
```
## Variable declaration and initialization
```JAVA
//Single variable and default value
String someVariableName = 'Hello World';
```
```JSON
    {
      "apexClass": null,
      "dataType": "String",
      "description": null,
      "isCollection": false,
      "isInput": false,
      "isOutput": false,
      "name": "defaultValueString",
      "objectType": null,
      "processMetadataValues": [],
      "scale": null,
      "value": {
        "apexValue": null,
        "booleanValue": null,
        "dateTimeValue": null,
        "dateValue": null,
        "elementReference": null,
        "formulaDataType": null,
        "formulaExpression": null,
        "numberValue": null,
        "setupReference": null,
        "setupReferenceType": null,
        "sobjectValue": null,
        "stringValue": "Hello world"
      }
    },
```

## List Declaration

```JAVA
//List of Strings
List<String> someList = new List<String>();
```

```JSON
    {
      "apexClass": null,
      "dataType": "String",
      "description": null,
      "isCollection": true,
      "isInput": false,
      "isOutput": false,
      "name": "someList",
      "objectType": null,
      "processMetadataValues": [],
      "scale": null,
      "value": null
    },
```

## List initialization 

```JAVA
//Initialization/Default value on List
List<String> someList = new List<String>{'valueOne', 'valueTwo', 'valueThree'}
```

```JSON
Not Allowed in Metadata
```

## Variable to variable assignment
```JAVA
// Multiple Variables
String variableTwo = 'hello world';
String variableOne = variableTwo;
```
```JSON
    {
      "apexClass": null,
      "dataType": "String",
      "description": null,
      "isCollection": false,
      "isInput": false,
      "isOutput": false,
      "name": "variableTwo",
      "objectType": null,
      "processMetadataValues": [],
      "scale": null,
      "value": {
        "apexValue": null,
        "booleanValue": null,
        "dateTimeValue": null,
        "dateValue": null,
        "elementReference": "variableOne",
        "formulaDataType": null,
        "formulaExpression": null,
        "numberValue": null,
        "setupReference": null,
        "setupReferenceType": null,
        "sobjectValue": null,
        "stringValue": null
      }
    }
``` 