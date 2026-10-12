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
  note?: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    id: "coffee",
    label: "Coffee",
    priceHeading: "R | L",
    note: "Alternate milk: Almond, Oat, Soya, Lactose Free — extra $1",
    items: [
      { name: "Espresso, Piccolo", price: "$4" },
      { name: "Long Black", price: "$4 | $5" },
      { name: "Flat White", price: "$5 | $6" },
      { name: "Cappuccino", price: "$5 | $6" },
      { name: "Latte", price: "$5 | $6" },
      { name: "Mocha", price: "$5 | $6" },
      { name: "Hot Choc", price: "$5 | $6" },
      { name: "Chai Latte", price: "$5 | $6" },
      { name: "Tea (T2)", price: "$5" },
      { name: "Cookies", price: "$2" },
    ],
  },
  {
    id: "iced-coffee",
    label: "Iced Coffee",
    items: [
      { name: "Iced Long Black", price: "$6" },
      { name: "Iced Latte", price: "$6" },
    ],
  },
  {
    id: "matcha",
    label: "Matcha",
    items: [
      { name: "Matcha Latte", price: "$6" },
      { name: "Iced Matcha", price: "$6" },
    ],
  },
  {
    id: "cold-refreshments",
    label: "Cold Refreshments",
    items: [
      { name: "Coke, Fanta, Sprite, Solo", price: "$4" },
      { name: "Water", price: "$4" },
      { name: "Apple Juice", price: "$4" },
      { name: "Powerade", price: "$6" },
      { name: "Ice Tea", price: "$6" },
    ],
  },
  {
    id: "morning-rush",
    label: "Morning Rush",
    items: [
      {
        name: "Breakfast Croissants",
        price: "$8 | $10 | $10",
        description: "Plain | Ham & Cheese | Cheese & Tomato",
      },
      {
        name: "Toastie",
        price: "$12 | $12",
        description: "Cheese & Tomato | Ham & Cheese",
      },
      {
        name: "Bacon & Egg Roll",
        price: "$12",
        description:
          "Grilled bacon and egg served on gourmet milk bun with bbq sauce.",
      },
    ],
  },
  {
    id: "burgers-chips",
    label: "Burgers & Chips",
    note: "Burgers served with a side of chips. Drink combo +$3 for a soft drink can.",
    items: [
      {
        name: "Cheese Burger",
        price: "$18",
        description:
          "Smash beef patty, American cheese, pickles with mustard sauce and tomato sauce.",
      },
      {
        name: "Classic Burger",
        price: "$19",
        description:
          "Smash beef patty, American cheese, lettuce, tomato, onion, pickles with pirka burger sauce.",
      },
      {
        name: "Bacon Deluxe Burger",
        price: "$22",
        description:
          "Smash beef patty, American cheese, lettuce, tomato, onion, pickles with pirka burger sauce.",
      },
      {
        name: "Fried Chicken Burger",
        price: "$21",
        description: "Chicken, lettuce with pirka burger sauce.",
      },
      {
        name: "Fish Burger",
        price: "$19",
        description: "Fried battered fish, lettuce with tartar sauce.",
      },
    ],
  },
  {
    id: "kids",
    label: "Kids",
    items: [
      {
        name: "Nuggets & Chips",
        price: "$12",
        description:
          "Fried chicken nuggets (6) and chips served with tomato sauce.",
      },
    ],
  },
  {
    id: "momo",
    label: "Momo",
    items: [
      {
        name: "Chicken (Dumpling)",
        price: "$18",
        description:
          "Chicken mince (dumpling - 10 pcs) served with tomato chutney or chilli sauce.",
      },
      {
        name: "Vegetarian (Dumpling)",
        price: "$18",
        description:
          "Mix veg (dumpling - 10 pcs) served with tomato chutney or chilli sauce.",
      },
    ],
  },
  {
    id: "pirka-meal",
    label: "Pirka Meal",
    items: [
      {
        name: "Battered Fish & Chips",
        price: "$18",
        description:
          "Battered fried fish, chips served with tartar sauce and lemon wedge.",
      },
      {
        name: "Chicken Schnitzel & Chips",
        price: "$18",
        description: "Fried schnitzel, chips served with tomato sauce.",
      },
      {
        name: "Chicken Tenders & Chips",
        price: "$14",
        description: "Fried chicken tenders, chips served with tomato sauce.",
      },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    items: [
      {
        name: "Chips",
        price: "$8",
        description:
          "Deep fried potato seasoned with pirka salt and served with tomato sauce.",
      },
      {
        name: "Loaded Fries",
        price: "$14",
        description:
          "Deep fried potato with bacon, cheese sauce, mayonnaise, parmesan snow, and seasoned with pirka special spices.",
      },
      {
        name: "Chicken Sausage (2)",
        price: "$9",
        description: "Deep fried chicken sausage served with tomato chutney.",
      },
      { name: "Potato Scallop", price: "$3" },
      { name: "Hash Browns", price: "$3" },
    ],
  },
];
