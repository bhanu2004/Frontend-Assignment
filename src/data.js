// const formData = [{
//     label: "Pizza Name",
//     jsonKey: "name",
//     validate: {
//       required: true
//     },
//     uiType: "Input",
//     level: 0
//   },{
//     label: "Pizza type",
//     validate: {
//       required: true
//     },
//     jsonKey: "pizza_type",
//     uiType: "Group",
//     level: 0,
//     subParameters: [
//       {
//         lable: "Pizza_type Type",
//         validate: {
//           required: true,
//           options: [
//             {
//               label: "Naples Style Pizza",
//               value: "naples"
//             },
//             {
//               label: "New York Style Pizza",
//               value: "newyork"
//             }

//           ],
//           defaultValue: "naples"
//         },
//         jsonKey: "type",
//         uiType: "Radio",
//         level: 1
//       },
//       {
//         label: "Naples Style Pizza",
//         validate: {
//           required: true
//         },
//         jsonKey:"Naples",
//         uiType:"Ignore",
//         level:1,
//         conditions:[
//           {
//             jsonKey: "pizza_type.type",
//             op: "==",
//             value: "naples"
//           }
//         ],
//         subParameters:[
//           {
//             label: "Slices",
//             validate:{
//               required: true,
//               options: [
//                 {
//                   label: 1,
//                   value: 1
//                 },
//                 {
//                   label: 2,
//                   value: 2
//                 },
//                 {
//                   label: 3,
//                   value: 3
//                 },
//                 {
//                   label: 4,
//                   value: 4
//                 },
//                 {
//                   label: 5,
//                   value: 5
//                 },
//               ],
//               defaultValue: 1
//             },
//             jsonKey: "slices",
//             uiType: "Select",
//             level: 2
//           }
//         ]
//       },
//       {
//         label: "New York Style Pizza",
//         validate:{
//           required: true,
//         },
//         jsonKey: "NewYork",
//         uiType: "Ignore",
//         level: 1,
//         conditions: [
//           {
//             jsonKey: "pizza_type.type",
//             op: "==",
//             value: "newyork"
//           }
//         ],
//         subParameters: [
//           {
//             label: "CheeseBurst",
//             validate: {
//               required: true,
//               defaultValue: false
//             },
//             jsonKey: "cheeseburst",
//             uiType: "Switch",
//             level: 2
//           }
//         ]
//       }
//     ]
//   },
//   {
//     label: "Toppings",
//     validate:{
//       required: true
//     },
//     jsonKey: "toppings",
//     uiType: "Group",
//     level: 0,
//     subParameters:[
//       {
//         label: "Sauce",
//         validate:{
//           required:true,
//           options:[
//             {
//               label: "Red",
//               value: "Red"
//             },
//             {
//               label: "White",
//               value: "White"
//             },
//             {
//               label: "Pesto",
//               value: "Pesto"
//             }
//           ]
//         },
//         defaultValue: "Red",
//         jsonKey: "sauce",
//         uiType: "Select",
//         level: 1
//       },
//       {
//         label: "Main_topping",
//         validate:{
//           required: true,
//           options:[
//             {
//               label: "Mushroom",
//               value: "Mushroom"
//             },
//             {
//               label: "Chicken",
//               value: "Chicken"
//             },
//             {
//               label: "Jalapenos",
//               value: "Jalapenos"
//             }
//           ],
//           defaultValue: "Mushroom"
//         },
//         jsonKey: "main_topping",
//         uiType: "Select",
//         level:1
//       },
//       {
//         label: "Second topping",
//         validate: {
//           options: [
//             {
//               label: "Anchovies",
//               value: "Anchovies"
//             },
//             {
//               label: "Pineapple",
//               value: "Pineapple"
              
//             },
//             {
//               label: "Potatoes",
//               value: "Potatoes"
//             }
//           ],
//           defaultValue: "Anchovies"
//         },
//         jsonKey: "second_topping",
//         uiType: "Select",
//         level: 1
//       }
//     ]
//   },
//   {
//     label: "Size",
//     validate:{
//       options:[
//         {
//           label: "Medium",
//           value: "Medium"
//         },
//         {
//           label: "Small",
//           value: "Small"
//         },
//         {
//           label: "Large",
//           value: "Large"
//         }
//       ],
//       defaultValue: "Medium"
//     },
//     jsonKey: "size",
//     uiType: "Select",
//     level: 0
//   }
// ];


const formData = [
  {
    "sort": 1,
    "label": "Pizza Name",
    "description": "ffs fasf dfdas",
    "validate": {
      "required": true,
      "immutable": false
    },
    "jsonKey": "name",
    "uiType": "Input",
    "icon": "",
    "level": 0,
    "placeholder": ""
  },
  {
    "sort": 4,
    "label": "Pizza_type",
    "description": "",
    "validate": {
      "required": true,
      "immutable": false
    },
    "jsonKey": "pizza_type",
    "uiType": "Group",
    "icon": "",
    "level": 0,
    "placeholder": "",
    "subParameters": [
      {
        "sort": 0,
        "label": "Pizza_type Type",
        "description": "",
        "validate": {
          "required": true,
          "options": [
            {
              "label": "Naples Style Pizza",
              "value": "naples",
              "description": "",
              "icon": ""
            },
            {
              "label": "New York Style Pizza",
              "value": "newyork",
              "description": "",
              "icon": ""
            }
          ],
          "defaultValue": "naples",
          "immutable": false
        },
        "jsonKey": "type",
        "uiType": "Radio",
        "icon": "",
        "level": 1,
        "placeholder": ""
      },
      {
        "sort": 10001,
        "label": "Naples Style Pizza",
        "description": "",
        "validate": {
          "required": true,
          "immutable": false
        },
        "jsonKey": "Naples",
        "uiType": "Ignore",
        "icon": "",
        "level": 1,
        "placeholder": "",
        "conditions": [
          {
            "jsonKey": "pizza_type.type",
            "op": "==",
            "value": "naples",
            "action": "enable"
          }
        ],
        "subParameters": [
          {
            "sort": 10000,
            "label": "Slices",
            "description": "",
            "validate": {
              "required": true,
              "options": [
                {
                  "label": "1",
                  "value": "1",
                  "description": "",
                  "icon": ""
                },
                {
                  "label": "2",
                  "value": "2",
                  "description": "",
                  "icon": ""
                },
                {
                  "label": "3",
                  "value": "3",
                  "description": "",
                  "icon": ""
                },
                {
                  "label": "4",
                  "value": "4",
                  "description": "",
                  "icon": ""
                },
                {
                  "label": "5",
                  "value": "5",
                  "description": "",
                  "icon": ""
                }
              ],
              "defaultValue": "1",
              "immutable": false
            },
            "jsonKey": "slices",
            "uiType": "Select",
            "icon": "",
            "level": 2,
            "placeholder": ""
          },
          {
            "sort": 10001,
            "label": "Type",
            "description": "",
            "validate": {
              "required": true,
              "pattern": "naples",
              "immutable": false
            },
            "jsonKey": "type",
            "uiType": "Input",
            "icon": "",
            "level": 2,
            "placeholder": "",
            "disable": true
          }
        ]
      },
      {
        "sort": 10002,
        "label": "New York Style Pizza",
        "description": "",
        "validate": {
          "required": true,
          "immutable": false
        },
        "jsonKey": "NewYork",
        "uiType": "Ignore",
        "icon": "",
        "level": 1,
        "placeholder": "",
        "conditions": [
          {
            "jsonKey": "pizza_type.type",
            "op": "==",
            "value": "newyork",
            "action": "enable"
          }
        ],
        "subParameters": [
          {
            "sort": 10000,
            "label": "Cheeseburst",
            "description": "",
            "validate": {
              "required": true,
              "defaultValue": false,
              "immutable": false
            },
            "jsonKey": "cheeseburst",
            "uiType": "Switch",
            "icon": "",
            "level": 2,
            "placeholder": ""
          },
          {
            "sort": 10001,
            "label": "Type",
            "description": "",
            "validate": {
              "required": true,
              "pattern": "newyork",
              "immutable": false
            },
            "jsonKey": "type",
            "uiType": "Input",
            "icon": "",
            "level": 2,
            "placeholder": "",
            "disable": true
          }
        ]
      }
    ]
  },
  {
    "sort": 10002,
    "label": "Toppings",
    "description": "",
    "validate": {
      "required": true,
      "immutable": false
    },
    "jsonKey": "toppings",
    "uiType": "Group",
    "icon": "",
    "level": 0,
    "placeholder": "",
    "subParameters": [
      {
        "sort": 1,
        "label": "Sauce",
        "description": "",
        "validate": {
          "required": true,
          "options": [
            {
              "label": "Red",
              "value": "Red",
              "description": "",
              "icon": ""
            },
            {
              "label": "White",
              "value": "White",
              "description": "",
              "icon": ""
            },
            {
              "label": "Pesto",
              "value": "Pesto",
              "description": "",
              "icon": ""
            }
          ],
          "defaultValue": "Red",
          "immutable": false
        },
        "jsonKey": "sauce",
        "uiType": "Select",
        "icon": "",
        "level": 1,
        "placeholder": ""
      },
      {
        "sort": 3,
        "label": "Main_topping",
        "description": "",
        "validate": {
          "required": true,
          "options": [
            {
              "label": "Mushroom",
              "value": "Mushroom",
              "description": "",
              "icon": ""
            },
            {
              "label": "Chicken",
              "value": "Chicken",
              "description": "",
              "icon": ""
            },
            {
              "label": "Jalapenos",
              "value": "Jalapenos",
              "description": "",
              "icon": ""
            }
          ],
          "defaultValue": "Mushroom",
          "immutable": false
        },
        "jsonKey": "main_topping",
        "uiType": "Select",
        "icon": "",
        "level": 1,
        "placeholder": ""
      },
      {
        "sort": 6,
        "label": "Include_seasonings",
        "description": "",
        "validate": {
          "required": true,
          "defaultValue": true,
          "immutable": false
        },
        "jsonKey": "include_seasonings",
        "uiType": "Switch",
        "icon": "",
        "level": 1,
        "placeholder": ""
      },
      {
        "sort": 6,
        "label": "Second_topping",
        "description": "",
        "validate": {
          "options": [
            {
              "label": "Anchovies",
              "value": "Anchovies",
              "description": "",
              "icon": ""
            },
            {
              "label": "Pineapple",
              "value": "Pineapple",
              "description": "",
              "icon": ""
            },
            {
              "label": "Potatoes",
              "value": "Potatoes",
              "description": "",
              "icon": ""
            }
          ],
          "defaultValue": "Anchovies",
          "immutable": false
        },
        "jsonKey": "second_topping",
        "uiType": "Select",
        "icon": "",
        "level": 1,
        "placeholder": ""
      }
    ]
  },
  {
    "sort": 10003,
    "label": "Size",
    "description": "",
    "validate": {
      "options": [
        {
          "label": "Medium",
          "value": "Medium",
          "description": "",
          "icon": ""
        },
        {
          "label": "Small",
          "value": "Small",
          "description": "",
          "icon": ""
        },
        {
          "label": "Large",
          "value": "Large",
          "description": "",
          "icon": ""
        }
      ],
      "defaultValue": "Medium",
      "immutable": false
    },
    "jsonKey": "size",
    "uiType": "Select",
    "icon": "",
    "level": 0,
    "placeholder": ""
  }
]

// const formData = [
//   {
//     "sort": 1,
//     "label": "Pasta Name",
//     "description": "",
//     "validate": {
//       "required": true,
//       "immutable": false
//     },
//     "jsonKey": "name",
//     "uiType": "Input",
//     "icon": "",
//     "level": 0,
//     "placeholder": ""
//   },
//   {
//     "sort": 10001,
//     "label": "Pasta_type",
//     "description": "",
//     "validate": {
//       "required": true,
//       "immutable": false
//     },
//     "jsonKey": "pasta_type",
//     "uiType": "Group",
//     "icon": "",
//     "level": 0,
//     "placeholder": "",
//     "subParameters": [
//       {
//         "sort": 1,
//         "label": "Sauce",
//         "description": "",
//         "validate": {
//           "required": true,
//           "options": [
//             {
//               "label": "Red",
//               "value": "Red",
//               "description": "",
//               "icon": ""
//             },
//             {
//               "label": "White",
//               "value": "White",
//               "description": "",
//               "icon": ""
//             },
//             {
//               "label": "Pesto",
//               "value": "Pesto",
//               "description": "",
//               "icon": ""
//             }
//           ],
//           "defaultValue": "Red",
//           "immutable": false
//         },
//         "jsonKey": "sauce",
//         "uiType": "Select",
//         "icon": "",
//         "level": 1,
//         "placeholder": ""
//       },
//       {
//         "sort": 3,
//         "label": "Topping_type",
//         "description": "",
//         "validate": {
//           "required": true,
//           "options": [
//             {
//               "label": "Veg",
//               "value": "Veg",
//               "description": "",
//               "icon": ""
//             },
//             {
//               "label": "Mushroom",
//               "value": "Mushroom",
//               "description": "",
//               "icon": ""
//             },
//             {
//               "label": "Chicken",
//               "value": "Chicken",
//               "description": "",
//               "icon": ""
//             },
//             {
//               "label": "Prawns",
//               "value": "Prawns",
//               "description": "",
//               "icon": ""
//             }
//           ],
//           "defaultValue": "Veg",
//           "immutable": false
//         },
//         "jsonKey": "topping_type",
//         "uiType": "Select",
//         "icon": "",
//         "level": 1,
//         "placeholder": ""
//       },
//       {
//         "sort": 5,
//         "label": "Cheese",
//         "description": "",
//         "validate": {
//           "options": [
//             {
//               "label": "Cheddar",
//               "value": "Cheddar",
//               "description": "",
//               "icon": ""
//             },
//             {
//               "label": "Mozzarella",
//               "value": "Mozzarella",
//               "description": "",
//               "icon": ""
//             },
//             {
//               "label": "Parmesan",
//               "value": "Parmesan",
//               "description": "",
//               "icon": ""
//             },
//             {
//               "label": "Feta",
//               "value": "Feta",
//               "description": "",
//               "icon": ""
//             },
//             {
//               "label": "Gouda",
//               "value": "Gouda",
//               "description": "",
//               "icon": ""
//             }
//           ],
//           "defaultValue": "Cheddar",
//           "immutable": false
//         },
//         "jsonKey": "cheese",
//         "uiType": "Select",
//         "icon": "",
//         "level": 1,
//         "placeholder": ""
//       }
//     ]
//   },
//   {
//     "sort": 10002,
//     "label": "Portion",
//     "description": "",
//     "validate": {
//       "options": [
//         {
//           "label": "Medium",
//           "value": "Medium",
//           "description": "",
//           "icon": ""
//         },
//         {
//           "label": "Small",
//           "value": "Small",
//           "description": "",
//           "icon": ""
//         },
//         {
//           "label": "Large",
//           "value": "Large",
//           "description": "",
//           "icon": ""
//         }
//       ],
//       "defaultValue": "Medium",
//       "immutable": false
//     },
//     "jsonKey": "portion",
//     "uiType": "Select",
//     "icon": "",
//     "level": 0,
//     "placeholder": ""
//   }
// ]

export default formData;