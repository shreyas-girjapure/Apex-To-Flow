## Flow Creation API
`URL` /services/data/v58.0/tooling/sobjects/flow

`POST` Method

`Body` Use below body , sample boiler plate body
```JSON
{
    "Metadata": {
        "actionCalls": [],
        "apexPluginCalls": [],
        "apiVersion": 60,
        "assignments": [],
        "choices": [],
        "collectionProcessors": [],
        "constants": [],
        "customErrors": [],
        "decisions": [],
        "description": null,
        "dynamicChoiceSets": [],
        "environments": [
            "Default"
        ],
        "formulas": [],
        "interviewLabel": "Test Flow To be Deleted After March {!$Flow.CurrentDateTime}",
        "isAdditionalPermissionRequiredToRun": null,
        "isOverridable": null,
        "isTemplate": null,
        "label": "Test Flow To be Deleted After March",
        "loops": [],
        "migratedFromWorkflowRuleName": null,
        "orchestratedStages": [],
        "overriddenFlow": null,
        "processMetadataValues": [
            {
                "name": "BuilderType",
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
                    "stringValue": "LightningFlowBuilder"
                }
            },
            {
                "name": "CanvasMode",
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
                    "stringValue": "AUTO_LAYOUT_CANVAS"
                }
            },
            {
                "name": "OriginBuilderType",
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
                    "stringValue": "LightningFlowBuilder"
                }
            }
        ],
        "processType": "AutoLaunchedFlow",
        "recordCreates": [],
        "recordDeletes": [],
        "recordLookups": [],
        "recordRollbacks": [],
        "recordUpdates": [],
        "runInMode": null,
        "screens": [],
        "sourceTemplate": null,
        "start": {
            "capabilityTypes": [],
            "connector": null,
            "description": null,
            "doesRequireRecordChangedToMeetCriteria": null,
            "elementSubtype": null,
            "entryType": null,
            "filterFormula": null,
            "filterLogic": null,
            "filters": [],
            "flowRunAsUser": null,
            "form": null,
            "label": null,
            "locationX": 50,
            "locationY": 0,
            "name": null,
            "object": null,
            "objectContainer": null,
            "processMetadataValues": [],
            "publishSegment": null,
            "recordTriggerType": null,
            "schedule": null,
            "scheduledPaths": [],
            "segment": null,
            "triggerType": null
        },
        "startElementReference": null,
        "status": "InvalidDraft",
        "steps": [],
        "subflows": [],
        "textTemplates": [],
        "timeZoneSidKey": null,
        "transforms": [],
        "triggerOrder": null,
        "urls": null,
        "variables": [],
        "waits": []
    },
    "FullName": "Test_Flow_To_be_Deleted_After_MarchNewNew"
}
```