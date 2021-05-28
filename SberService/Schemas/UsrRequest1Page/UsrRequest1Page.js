define("UsrRequest1Page", [], function() {
	return {
		entitySchemaName: "UsrRequest",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrRequestFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrRequest"
				}
			},
			"UsrSchema8db4ff4bDetailc01ad9b1": {
				"schemaName": "UsrSchema8db4ff4bDetail",
				"entitySchemaName": "UsrSbsExpReq",
				"filter": {
					"detailColumn": "UsrUsrRequest",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"UsrApplicant": {
				"f8ccab7d-5d30-4d98-9488-a244e41c02e6": {
					"uId": "f8ccab7d-5d30-4d98-9488-a244e41c02e6",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "01438f21-be73-4899-b796-153484ce2612",
								"dataValueType": 10
							}
						}
					]
				},
				"d54de032-0644-41e0-9aca-e94e257167fd": {
					"uId": "d54de032-0644-41e0-9aca-e94e257167fd",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "CreatedBy"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "d234a132-3b54-42d8-8ec9-5a8011d39db2",
								"dataValueType": 10
							}
						}
					]
				},
				"d700401d-9fd6-4cb6-84cf-aa7973c1e9b3": {
					"uId": "d700401d-9fd6-4cb6-84cf-aa7973c1e9b3",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrOwner"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "d234a132-3b54-42d8-8ec9-5a8011d39db2",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"UsrOwner": {
				"8ef29b60-709b-46f5-b951-3c4402ed0450": {
					"uId": "8ef29b60-709b-46f5-b951-3c4402ed0450",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "Type",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 0,
					"value": "60733efc-f36b-1410-a883-16d83cab0980",
					"dataValueType": 10
				}
			},
			"UsrText": {
				"424f608f-7cb1-431a-8b06-ffebfa5231b8": {
					"uId": "424f608f-7cb1-431a-8b06-ffebfa5231b8",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "cba71e57-9887-4a8a-b0ad-5bbabbcf92bd",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"UsrString": {
				"7ad5f7ae-9be2-4cd1-8a8d-a46b09eada24": {
					"uId": "7ad5f7ae-9be2-4cd1-8a8d-a46b09eada24",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 5,
							"leftExpression": {
								"type": 3,
								"value": "CurrentDateTime",
								"dataValueType": 7
							},
							"rightExpression": {
								"type": 1,
								"attribute": "UsrDeadline"
							}
						}
					]
				},
				"c4566e62-0ce1-42bb-b302-e23c171e1947": {
					"uId": "c4566e62-0ce1-42bb-b302-e23c171e1947",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 7,
							"leftExpression": {
								"type": 3,
								"value": "CurrentDateTime",
								"dataValueType": 7
							},
							"rightExpression": {
								"type": 1,
								"attribute": "UsrDeadline"
							}
						}
					]
				}
			},
			"UsrFloat3": {
				"4cf6dbfe-e25f-432f-b140-862135be95d0": {
					"uId": "4cf6dbfe-e25f-432f-b140-862135be95d0",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 6,
							"formula": {
								"type": 0,
								"dataType": 32,
								"operatorType": 1,
								"leftExpression": {
									"type": 1,
									"dataType": 32,
									"operandType": 1,
									"columnPath": "UsrFloat1",
									"columnOperandType": 0
								},
								"rightExpression": {
									"type": 1,
									"dataType": 32,
									"operandType": 1,
									"columnPath": "UsrFloat2",
									"columnOperandType": 0
								},
								"arithmeticOperatorType": 0
							}
						}
					},
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrFloat1"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrFloat2"
							}
						}
					]
				}
			},
			"ESNTabGroup4f27c3c2": {
				"964b94c4-a8b5-45fa-a10b-623a966746b7": {
					"uId": "964b94c4-a8b5-45fa-a10b-623a966746b7",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrBoolean1"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrCategory2": {
				"a2cf717f-58d3-415d-8097-2f9b32ce046f": {
					"uId": "a2cf717f-58d3-415d-8097-2f9b32ce046f",
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
				"operation": "insert",
				"name": "UsrName91014f7d-a1a9-460a-8a09-06fd292cdc0c",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrName"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CreatedOn62e9c618-0d33-4cef-a6e8-31055fabca9f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "CreatedOn",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CreatedByf35793a7-fc97-4716-85f9-394019ff001b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "CreatedBy",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DATETIME7023bb54-0d11-4c76-be0b-3851e2578f4f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrDeadline",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUPfb700e4d-2750-4bac-b5f8-c3101eece9f8",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrOwner",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUP7f3cedd5-ebe0-4cf4-a166-b2812725b71f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrApplicant",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUP5c6c1155-1c22-4f29-8216-bc8a4a59d268",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrExecutor",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "LOOKUP2362a37d-28b0-4def-bc94-7d10e0ba5ff3",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrStatus",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "LOOKUP487346bb-1cf8-4f29-8f5c-7bb46e1b919b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCategory",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "LOOKUP363905df-2f45-4923-b4b0-8d6d54d079b3",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 9,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCategory2",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "STRING80955b71-0bac-4dcf-a052-3dad05c1a0a2",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrText",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrString09363ea8-f8c1-4124-aafd-11d94cfa2991",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrString",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "BOOLEANa14503fa-bf5b-4806-91f8-f8dea4a34e1f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrBoolean1",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP2c8239e6-ab8e-4a8f-ab71-f4822b1ffc64",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrLookup1",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "insert",
				"name": "ESNTabGroup4f27c3c2",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.ESNTabGroup4f27c3c2GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "ESNTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ESNTabGridLayoutecc89d6b",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "ESNTabGroup4f27c3c2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FLOATb1c33b39-0c28-4d01-a000-22050f64330e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ESNTabGridLayoutecc89d6b"
					},
					"bindTo": "UsrFloat1",
					"enabled": true
				},
				"parentName": "ESNTabGridLayoutecc89d6b",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FLOATd9ed1f12-4ffe-43e3-b9d3-11a9415ab0e9",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "ESNTabGridLayoutecc89d6b"
					},
					"bindTo": "UsrFloat2",
					"enabled": true
				},
				"parentName": "ESNTabGridLayoutecc89d6b",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FLOAT61c685c4-5d14-4482-afb1-8e800d11060f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ESNTabGridLayoutecc89d6b"
					},
					"bindTo": "UsrFloat3",
					"enabled": true
				},
				"parentName": "ESNTabGridLayoutecc89d6b",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrSchema8db4ff4bDetailc01ad9b1",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "ESNTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "UsrNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_DIFF*/
	};
});
