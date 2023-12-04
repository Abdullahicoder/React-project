import React from "react";
import salad from "../images/salad.jpg";
import lemon from "../images/lemon.png"
import burger from "../images/burger.png"
import Swal from "sweetalert2";
import recipes from "../recipes";

const Menu = () => {
    const handleOrder = (id) => {
        console.log(id, "id is clicked");
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Order it!",
                text: "Your order is procesing.",
                icon: "success"
              });
            }
          });

    }
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This Week's Specials</h2>
        <button>Order Menu</button>
      </div>

      {/* Menu Cards */}
      <div className="cards">
        {
            recipes.map(recipe => <div key={recipe.id} className="menu-items">
                <img src={recipe.image} alt="" />
                <div className="menu-content">
                    <div className="heading">
                        <h5>{recipe.title}</h5>
                        <p>{recipe.price}</p>
                    </div>
                    <p>{recipe.description}</p>
                    <button className="orderBtn" onClick={() => handleOrder(recipe.id)}>Order Now</button>
                </div>
            </div>)
        }
      </div>
    </div>
  );
};

export default Menu;
