import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Account Ctrl Get Account Services By Account ID",
					"value": "Account Ctrl Get Account Services By Account ID",
					"action": "Get account data by ID",
					"description": "Get account data by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/accounts/{{$parameter[\"account_id\"]}}"
						}
					}
				},
				{
					"name": "Account Ctrl Get Locations By Account ID",
					"value": "Account Ctrl Get Locations By Account ID",
					"action": "Get account locations data by account ID",
					"description": "Get account locations data by account ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/accounts/{{$parameter[\"account_id\"]}}/locations"
						}
					}
				},
				{
					"name": "Account Ctrl Get Location By ID",
					"value": "Account Ctrl Get Location By ID",
					"action": "Get location data by account ID and location ID",
					"description": "Get location data by account ID and location ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/accounts/{{$parameter[\"account_id\"]}}/locations/{{$parameter[\"location_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/accounts/{account_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Account Ctrl Get Account Services By Account ID"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "account_id",
			"required": true,
			"description": "The Vonage Business Cloud account ID",
			"default": 571700,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Account Ctrl Get Account Services By Account ID"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearerauth",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for bearerAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Account Ctrl Get Account Services By Account ID"
					]
				}
			}
		},
		{
			"displayName": "GET /api/accounts/{account_id}/locations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Account Ctrl Get Locations By Account ID"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "account_id",
			"required": true,
			"description": "The Vonage Business Cloud account ID",
			"default": 571700,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Account Ctrl Get Locations By Account ID"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearerauth",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for bearerAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Account Ctrl Get Locations By Account ID"
					]
				}
			}
		},
		{
			"displayName": "GET /api/accounts/{account_id}/locations/{location_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Account Ctrl Get Location By ID"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "account_id",
			"required": true,
			"description": "The Vonage Business Cloud account ID",
			"default": 571700,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Account Ctrl Get Location By ID"
					]
				}
			}
		},
		{
			"displayName": "Location Id",
			"name": "location_id",
			"required": true,
			"description": "The Vonage Business Cloud location ID",
			"default": 327910,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Account Ctrl Get Location By ID"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearerauth",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for bearerAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Account Ctrl Get Location By ID"
					]
				}
			}
		},
];
