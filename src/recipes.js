import salad from "./images/salad.jpg";
import lemon from "./images/lemon.png"
import burger from "./images/burger.png"

const recipes = [
  {
    id: 1,
    title: "Greek salad",
    price: 12.99,
    image: salad,
    description: "Our Salad is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },

 {
    id: 2,
    title: "Bruchetta",
    price: 5.99,
    image: burger,
    description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
{
    id: 3,
    title: "Lemon Dessert",
    price: 4.78,
    image: lemon,
    description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as  as can be imagined.",
    },
  
  ];
  
  export default recipes;
  
  