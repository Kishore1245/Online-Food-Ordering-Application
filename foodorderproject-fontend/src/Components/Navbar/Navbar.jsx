import React from "react";
import "./Navbar.css";
import PersonIcon from "@mui/icons-material/Person";
import { Avatar, Badge, IconButton, Menu, MenuItem } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom"; // Removed useLocation
import { useDispatch, useSelector } from "react-redux";
import { pink } from "@mui/material/colors";
import Auth from "../Auth/Auth";
import { logout } from "../../State/Authentication/Action";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ✅ Fixed: Select only required parts
  const auth = useSelector((store) => store.auth);
  const cart = useSelector((store) => store.cart);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const navigateToCart = () => {
    navigate("/cart");
  };

  const navigateToProfile = () => {
    if (auth?.user?.role === "ROLE_ADMIN" || auth?.user?.role === "ROLE_RESTAURANT_OWNER") {
      navigate("/admin/restaurant");
    } else {
      navigate("/my-profile");
    }
  };

  const handleCloseAuthModel = () => {
    navigate("/");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const handleLogout = () => {
    dispatch(logout());
    handleCloseMenu();
  };

  return (
    <div className="px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
      <div className="flex items-center space-x-4">
        <div
          onClick={navigateToHome}
          className="lg:mr-10 cursor-pointer flex items-center space-x-4"
        >
          <li className="logo font-semibold text-gray-300 text-2xl">S K Food</li>
        </div>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
        <IconButton onClick={() => navigate("/search")}>
          <SearchIcon sx={{ fontSize: "1.5rem" }} />
        </IconButton>

        <div className="flex items-center space-x-2">
          {auth?.user?.fullName ? (
            <span
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={auth?.user?.role === "ROLE_ADMIN" ? handleOpenMenu : navigateToProfile}
              className="font-semibold cursor-pointer"
            >
              <Avatar sx={{ bgcolor: "white", color: pink.A400 }} className="bg-white">
                {auth?.user?.fullName?.charAt(0)?.toUpperCase() || "U"}
              </Avatar>
            </span>
          ) : (
            <IconButton onClick={() => navigate("/account/login")}>
              <PersonIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          )}

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() =>
                auth?.user?.role === "ROLE_ADMIN" ? navigate("/admin") : navigate("/super-admin")
              }
            >
              Profile
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>

        <IconButton onClick={navigateToCart}>
          <Badge color="black" badgeContent={cart?.cartItems?.length || 0}>
            <ShoppingCartIcon className="text-4xl" sx={{ fontSize: "2rem" }} />
          </Badge>
        </IconButton>
      </div>

      <Auth handleClose={handleCloseAuthModel} />
    </div>
  );
};

export default Navbar;
