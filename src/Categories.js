import React, { useState } from "react";
import SingleCategory from "./SingleCategory";

const dataObject = [
  {
    "Breakfast Items": [
      {
        name: "Omelets",
        carbs: 0,
        protein: 0,
        calories: 0,
        isSelected: true,
        chefNote: "",
        Ingredients: {
          "Egg Types": [
            {
              name: "Egg Whites",
              carbs: 0,
              protein: 52,
              calories: 123,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            },
            {
              name: "Whole Eggs",
              carbs: 22,
              protein: 122,
              calories: 233,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            }
          ],
          Proteins: [
            {
              name: "Bacon",
              carbs: 5,
              protein: 50,
              calories: 490,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            },
            {
              name: "Chicken",
              carbs: 2,
              protein: 53,
              calories: 120,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            },
            {
              name: "Chicken Apple Sausage",
              carbs: 3,
              protein: 50,
              calories: 91,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            },
            {
              name: "Ham",
              carbs: 1,
              protein: 50,
              calories: 120,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            },
            {
              name: "Pork Sausage",
              carbs: 0,
              protein: 39,
              calories: 100,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            }
          ]
        }
      },
      {
        name: "Scrambles",
        carbs: 0,
        protein: 0,
        calories: 0,
        isSelected: true,
        chefNote: "",
        Ingredients: {
          "Egg Types": [
            {
              name: "Egg Whites",
              carbs: 0,
              protein: 52,
              calories: 123,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            },
            {
              name: "Whole Eggs",
              carbs: 22,
              protein: 122,
              calories: 233,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            }
          ],
          Proteins: [
            {
              name: "Bacon",
              carbs: 5,
              protein: 50,
              calories: 490,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            },
            {
              name: "Chicken",
              carbs: 2,
              protein: 53,
              calories: 120,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            },
            {
              name: "Chicken Apple Sausage",
              carbs: 3,
              protein: 50,
              calories: 91,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            },
            {
              name: "Ham",
              carbs: 1,
              protein: 50,
              calories: 120,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            },
            {
              name: "Pork Sausage",
              carbs: 0,
              protein: 39,
              calories: 100,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            }
          ],
          Vegetables: [
            {
              name: "Avocado",
              carbs: 3,
              protein: 55,
              calories: 23,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            },
            {
              name: "Asparagus",
              carbs: 3,
              protein: 23,
              calories: 543,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            },
            {
              name: "Broccoli",
              carbs: 0,
              protein: 1,
              calories: 20,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            },
            {
              name: "Jalapenos",
              carbs: 3,
              protein: 23,
              calories: 90,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            }
          ]
        }
      },
      {
        name: "Eggs",
        carbs: 0,
        protein: 0,
        calories: 0,
        isSelected: true,
        chefNote: "",
        Ingredients: {
          "Egg Type": [
            {
              name: "Over Easy",
              carbs: 0,
              protein: 52,
              calories: 123,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            },
            {
              name: "Over Medium",
              carbs: 22,
              protein: 122,
              calories: 233,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            },
            {
              name: "Over Hard ",
              carbs: 9,
              protein: 23,
              calories: 33,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            }
          ],
          Cheeses: [
            {
              name: "Shredded Cheddar ",
              carbs: 4,
              protein: 28,
              calories: 92,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            },
            {
              name: "American Cheese",
              carbs: 7,
              protein: 22,
              calories: 90,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            }
          ],
          Fruits: [
            {
              name: "Mixed Fruit",
              carbs: 3,
              protein: 10,
              calories: 113,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            },
            {
              name: "Pineapple Cup",
              carbs: 6,
              protein: 3,
              calories: 143,
              isSelected: true,
              chefNote: "",
              Ingredients: {}
            }
          ]
        }
      }
    ],
    "Jordan's Specials": [
      {
        name: "Jordan's Special",
        carbs: 100,
        protein: 50,
        calories: 500,
        isSelected: true,
        chefNote: "",
        Ingredients: {}
      },
      {
        name: "Jordan's Deluxe",
        carbs: 230,
        protein: 140,
        calories: 700,
        isSelected: true,
        chefNote: "",
        Ingredients: {}
      }
    ]
  }
];
export default function Categories() {
  return (
    <div>
      {dataObject.map((key, value) => {
        return <SingleCategory category={key} inCategory={value} />;
      })}
    </div>
  );
}
