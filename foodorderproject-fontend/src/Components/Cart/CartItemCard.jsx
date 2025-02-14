import { Chip, IconButton } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../State/Customers/Cart/cart.action";

const CartItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt") || ""; // ✅ Ensure JWT is never null

  const handleUpdateCartItem = (value) => {
    if (value === -1 && item.quantity === 1) {
      handleRemoveCartItem();
      return; // ✅ Prevents further execution
    }
    const data = { cartItemId: item.id, quantity: item.quantity + value };
    dispatch(updateCartItem({ data, jwt }));
  };

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem({ cartItemId: item.id, jwt }));
  };

  return (
    <div className="px-5">
      <div className="lg:flex items-center lg:space-x-5">
        <div>
          <img
            className="w-[5rem] h-[5rem] object-cover"
            src={item.food?.images?.[0] || "default-image-url.jpg"} // ✅ Fix potential crash
            alt={item.food?.name || "Food Item"}
          />
        </div>

        <div className="flex items-center justify-between lg:w-[70%]">
          <div className="space-y-1 lg:space-y-3 w-full">
            <p>{item.food?.name || "Unknown Food"}</p> {/* ✅ Fix undefined name */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1">
                <IconButton
                  onClick={() => handleUpdateCartItem(-1)}
                  color="primary"
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <div className="w-5 h-5 text-xs flex items-center justify-center">
                  {item.quantity}
                </div>

                <IconButton
                  onClick={() => handleUpdateCartItem(1)}
                  color="primary"
                >
                  <AddCircleOutlineIcon />
                </IconButton>
              </div>
            </div>
          </div>

          <p>₹{item.totalPrice}</p>
        </div>
      </div>
      <div className="pt-3 space-x-2">
        {(item.ingredients || []).map((ingredient, index) => ( // ✅ Fix potential crash
          <Chip key={index} label={ingredient} />
        ))}
      </div>
    </div>
  );
};

export default CartItemCard;
