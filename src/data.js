const formData = [{
    label: "Pizza Name",
    jsonKey: "name",
    validate: {
      required: true
    },
    uiType: "Input",
    level: 0
  },{
    label: "Pizza type",
    validate: {
      required: true
    },
    jsonKey: "pizza_type",
    uiType: "Group",
    level: 0,
    subParameters: [
      {
        lable: "Pizza_type Type",
        validate: {
          required: true,
          options: [
            {
              label: "Naples Style Pizza",
              value: "naples"
            },
            {
              label: "New York Style Pizza",
              value: "newyork"
            }

          ],
          defaultValue: "naples"
        },
        jsonKey: "type",
        uiType: "Radio",
        level: 1
      },
      {
        label: "Naples Style Pizza",
        validate: {
          required: true
        },
        jsonKey:"Naples",
        uiType:"Ignore",
        level:1,
        conditions:[
          {
            jsonKey: "pizza_type.type",
            op: "==",
            value: "naples"
          }
        ],
        subParameters:[
          {
            label: "Slices",
            validate:{
              required: true,
              options: [
                {
                  label: 1,
                  value: 1
                },
                {
                  label: 2,
                  value: 2
                },
                {
                  label: 3,
                  value: 3
                },
                {
                  label: 4,
                  value: 4
                },
                {
                  label: 5,
                  value: 5
                },
              ],
              defaultValue: 1
            },
            jsonKey: "slices",
            uiType: "Select",
            level: 2
          }
        ]
      },
      {
        label: "New York Style Pizza",
        validate:{
          required: true,
        },
        jsonKey: "NewYork",
        uiType: "Ignore",
        level: 1,
        conditions: [
          {
            jsonKey: "pizza_type.type",
            op: "==",
            value: "newyork"
          }
        ],
        subParameters: [
          {
            label: "CheeseBurst",
            validate: {
              required: true,
              defaultValue: false
            },
            jsonKey: "cheeseburst",
            uiType: "Switch",
            level: 2
          }
        ]
      }
    ]
  },
  {
    label: "Toppings",
    validate:{
      required: true
    },
    jsonKey: "toppings",
    uiType: "Group",
    level: 0,
    subParameters:[
      {
        label: "Sauce",
        validate:{
          required:true,
          options:[
            {
              label: "Red",
              value: "Red"
            },
            {
              label: "White",
              value: "White"
            },
            {
              label: "Pesto",
              value: "Pesto"
            }
          ]
        },
        defaultValue: "Red",
        jsonKey: "sauce",
        uiType: "Select",
        level: 1
      },
      {
        label: "Main_topping",
        validate:{
          required: true,
          options:[
            {
              label: "Mushroom",
              value: "Mushroom"
            },
            {
              label: "Chicken",
              value: "Chicken"
            },
            {
              label: "Jalapenos",
              value: "Jalapenos"
            }
          ],
          defaultValue: "Mushroom"
        },
        jsonKey: "main_topping",
        uiType: "Select",
        level:1
      },
      {
        label: "Second topping",
        validate: {
          options: [
            {
              label: "Anchovies",
              value: "Anchovies"
            },
            {
              label: "Pineapple",
              value: "Pineapple"
              
            },
            {
              label: "Potatoes",
              value: "Potatoes"
            }
          ],
          defaultValue: "Anchovies"
        },
        jsonKey: "second_topping",
        uiType: "Select",
        level: 1
      }
    ]
  },
  {
    label: "Size",
    validate:{
      options:[
        {
          label: "Medium",
          value: "Medium"
        },
        {
          label: "Small",
          value: "Small"
        },
        {
          label: "Large",
          value: "Large"
        }
      ],
      defaultValue: "Medium"
    },
    jsonKey: "size",
    uiType: "Select",
    level: 0
  }
];

export default formData;