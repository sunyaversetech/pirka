export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  note?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  priceHeading?: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    id: "coffee",
    label: "Coffee",
    priceHeading: "R | L",
    items: [
      { name: "Espresso, Piccolo", price: "$4" },
      { name: "Long Black", price: "$4 | $5" },
      { name: "Flat White", price: "$4 | $5" },
      { name: "Cappuccino", price: "$4 | $5" },
      { name: "Latte", price: "$4 | $5" },
      { name: "Belgian Mocha", price: "$7 | $8" },
      { name: "Belgian Hot Choc", price: "$7 | $8" },
      { name: "Chai Latte", price: "$4 | $5" },
      { name: "Tea", price: "$4" },
    ],
  },
  {
    id: "cold-coffee",
    label: "Cold Coffee",
    priceHeading: "R",
    items: [
      { name: "Iced Long Black", price: "$6" },
      { name: "Iced Coffee", price: "$8" },
      { name: "Iced Latte", price: "$6" },
      { name: "Spiced Vanilla Iced Latte", price: "$8" },
    ],
  },
  {
    id: "matcha",
    label: "Matcha",
    priceHeading: "R",
    items: [
      { name: "Matcha Latte", price: "$6" },
      { name: "Iced Matcha", price: "$6" },
      { name: "Strawberry Cream Matcha", price: "$11" },
      { name: "Mango Cream Matcha", price: "$11" },
    ],
  },
  {
    id: "gelato",
    label: "Gelato",
    priceHeading: "R",
    items: [
      { name: "Chocolate", price: "$6 | $8" },
      { name: "Vanilla", price: "$6 | $8" },
      { name: "Strawberry", price: "$6 | $8" },
    ],
  },
  {
    id: "cold-refreshments",
    label: "Cold Refreshments",
    priceHeading: "R",
    items: [
      { name: "Coke, Fanta, Lemonade", price: "$4" },
      { name: "Water", price: "$4" },
    ],
  },
  {
    id: "grab-go",
    label: "Grab & Go",
    items: [
      {
        name: "Breakfast Croissants",
        price: "$8 | $10 | $10",
        description: "Plain | Ham & Cheese | Cheese & Tomato",
      },
      {
        name: "Sandwich",
        price: "$10",
        description: "Cheese & Tomato | Ham & Cheese | Chicken (pesto) & Cheese",
      },
      {
        name: "Wrap",
        price: "$12",
        description: "Chicken, Cheese | Bacon & Egg | Veg — with mixed lettuce & aioli.",
      },
      {
        name: "Bacon & Egg Roll",
        price: "$12",
        description:
          "Grilled bacon and egg served on gourmet milk bun with tomato relish.",
      },
    ],
  },
  {
    id: "burgers-chips",
    label: "Burgers & Chips",
    items: [
      {
        name: "Chicken Burger",
        price: "$15.50",
        description:
          "Chicken, american cheese, tomato, onion, and lettuce with chipotle mayo.",
        note: "Choose Chicken: southern fry | grilled | schnitzel",
      },
      {
        name: "Cheese Burger",
        price: "$15.50",
        description:
          "Grilled beef patty, american cheese, pickle with mustard sauce and tomato sauce.",
        note: "Extra beef patty: $4",
      },
      {
        name: "Halloumi",
        price: "$15.50",
        description:
          "Grilled halloumi, grilled zucchini, tomato, onion, and lettuce with pesto mayo.",
      },
      {
        name: "Fish",
        price: "$15.50",
        description:
          "Fried battered fish, tomato, onion, and lettuce with tartar sauce.",
      },
    ],
  },
  {
    id: "kids",
    label: "Kids",
    items: [
      {
        name: "Nuggets & Chips",
        price: "$9",
        description: "Fried nugget and chips served with tomato sauce.",
      },
      {
        name: "Fish & Chips",
        price: "$11",
        description: "Fried fish and chips served with tomato sauce.",
      },
    ],
  },
  {
    id: "momo",
    label: "Momo",
    items: [
      {
        name: "Chicken (Dumpling)",
        price: "$14.50",
        description:
          "Chicken mince dumplings served with tomato chutney or chilli sauce.",
      },
      {
        name: "Vegetarian (Dumpling)",
        price: "$14.50",
        description:
          "Mix veg dumplings served with tomato chutney or chilli sauce.",
      },
    ],
  },
  {
    id: "pirka-special",
    label: "Pirka Special",
    items: [
      {
        name: "Steak & Potato",
        price: "$24",
        description: "Steak fillet, fried mustang potato with chimichurri sauce.",
      },
      {
        name: "Beer Battered Fish & Chips",
        price: "$15.50",
        description:
          "Battered fried fish, chips served with tartar sauce and lemon wedge.",
      },
      {
        name: "Chicken Lollipop",
        price: "$12",
        description:
          "Deep fried chicken drumstick (wings) served with tomato chutney.",
      },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    items: [
      {
        name: "Fries",
        price: "$8",
        description:
          "Deep fried potato seasoned with pirka salt and served with tomato sauce.",
      },
      {
        name: "Mustang Fries",
        price: "$9",
        description:
          "Deep fried potato wedges seasoned with pirka special spices and served with tomato chutney.",
      },
      {
        name: "Chicken Sausage",
        price: "$9",
        description: "Deep fried chicken sausage served with tomato chutney.",
      },
      {
        name: "Chicken Bites",
        price: "$9",
        description: "Deep fried chicken served with tomato chutney.",
      },
    ],
  },
];
