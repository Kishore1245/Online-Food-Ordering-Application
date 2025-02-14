package com.FOP.service;

import com.FOP.Exception.CartException;
import com.FOP.Exception.CartItemException;
import com.FOP.Exception.FoodException;
import com.FOP.Exception.UserException;
import com.FOP.model.Cart;
import com.FOP.model.CartItem;
import com.FOP.model.Food;
import com.FOP.model.User;
import com.FOP.request.AddCartItemRequest;
import com.FOP.request.UpdateCartItemRequest;

public interface CartSerive {

	public CartItem addItemToCart(AddCartItemRequest req, String jwt) throws UserException, FoodException, CartException, CartItemException;

	public CartItem updateCartItemQuantity(Long cartItemId,int quantity) throws CartItemException;

	public Cart removeItemFromCart(Long cartItemId, String jwt) throws UserException, CartException, CartItemException;

	public Long calculateCartTotals(Cart cart) throws UserException;
	
	public Cart findCartById(Long id) throws CartException;
	
	public Cart findCartByUserId(Long userId) throws CartException, UserException;
	
	public Cart clearCart(Long userId) throws CartException, UserException;
	

	

}
