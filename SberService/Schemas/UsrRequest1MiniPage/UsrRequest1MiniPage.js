define("UsrRequest1MiniPage", [], function() {
	return {
		entitySchemaName: "UsrRequest",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"UsrCategory2": {
				"d8bf0c30-c98e-40fb-b50a-a4f164456dc8": {
					"uId": "d8bf0c30-c98e-40fb-b50a-a4f164456dc8",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "UsrCatInSubCat",
					"comparisonType": 3,
					"autoClean": true,
					"autocomplete": true,
					"type": 1,
					"attribute": "UsrCategory"
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "HeaderContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "insert",
				"name": "HeaderColumnContainer",
				"values": {
					"itemType": 6,
					"caption": {
						"bindTo": "getPrimaryDisplayColumnValue"
					},
					"labelClass": [
						"label-in-header-container"
					],
					"visible": {
						"bindTo": "isNotAddMode"
					}
				},
				"parentName": "HeaderContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CreatedOn68b4316e-2e30-4674-99d4-8fe15020ad38",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isViewMode"
					},
					"bindTo": "CreatedOn"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrApplicant8bb76ff4-cbfa-4818-8aeb-d85fa9bee5d0",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isViewMode"
					},
					"bindTo": "UsrApplicant"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrCategory6d6bbdff-1203-4e53-a994-960504a9f750",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isViewMode"
					},
					"bindTo": "UsrCategory"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrCategory24ba004e0-f24e-407f-b10a-38b50317bb6c",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isViewMode"
					},
					"bindTo": "UsrCategory2"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrTexta582e39a-4a04-40ed-a7c1-8c2fe4ff8338",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isViewMode"
					},
					"bindTo": "UsrText"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "UsrOwner06c0b10a-6ceb-4589-9ad8-07fc847704e8",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isViewMode"
					},
					"bindTo": "UsrOwner"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "UsrStatusb49d7f64-28a1-4bb0-8e95-02ca045f182f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isViewMode"
					},
					"bindTo": "UsrStatus"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "UsrNamef3d23e41-df34-4dae-8f18-89555a591831",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "UsrName"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "UsrApplicant8ad0764e-f774-40d7-b7da-24cd89479823",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "UsrApplicant"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "UsrText56eb472c-99f4-49ed-9171-691aa9bc6215",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "UsrText"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "UsrCategoryc2a2cbd2-5aac-4f05-9f63-56a87d1456df",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "UsrCategory"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "UsrCategory2e94b6c52-a0f0-463e-9d06-0ce6cca0e9e1",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "UsrCategory2"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "UsrName0a7e6984-ea84-416c-a27e-3bb8f3d28a9b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isEditMode"
					},
					"bindTo": "UsrName"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "UsrDeadlinea7170ddd-fe09-410a-abbb-ff7bb6e52fc3",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isEditMode"
					},
					"bindTo": "UsrDeadline"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "UsrApplicant6ba199f9-96e5-4dfa-8c08-9b980c81c5f6",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isEditMode"
					},
					"bindTo": "UsrApplicant"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 15
			},
			{
				"operation": "insert",
				"name": "UsrCategory935f9163-d8fb-4747-a38f-f7ffd55e807a",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isEditMode"
					},
					"bindTo": "UsrCategory"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 16
			},
			{
				"operation": "insert",
				"name": "UsrCategory2f1bc83b6-50fc-4dc8-80f7-cabbe0721506",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isEditMode"
					},
					"bindTo": "UsrCategory2"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 17
			},
			{
				"operation": "insert",
				"name": "UsrTextff575c81-1438-47fa-ad01-4018fffa78ba",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isEditMode"
					},
					"bindTo": "UsrText"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 18
			},
			{
				"operation": "insert",
				"name": "UsrOwnere0012025-f287-4dde-a970-0643f4acc2a0",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isEditMode"
					},
					"bindTo": "UsrOwner"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 19
			}
		]/**SCHEMA_DIFF*/
	};
});
