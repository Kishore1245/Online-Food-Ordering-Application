package com.FOP.service;

import java.util.List;

import com.stripe.exception.StripeException;
import com.FOP.Exception.CartException;
import com.FOP.Exception.OrderException;
import com.FOP.Exception.RestaurantException;
import com.FOP.Exception.UserException;
import com.FOP.model.Order;
import com.FOP.model.OrderItem;
import com.FOP.model.PaymentResponse;
import com.FOP.model.User;
import com.FOP.request.CreateOrderRequest;

public interface OrderService {
	
	 public PaymentResponse createOrder(CreateOrderRequest order, User user) throws UserException, RestaurantException, CartException, StripeException;
	 
	 public Order updateOrder(Long orderId, String orderStatus) throws OrderException;
	 
	 public void cancelOrder(Long orderId) throws OrderException;
	 
	 public List<Order> getUserOrders(Long userId) throws OrderException;
	 
	 public List<Order> getOrdersOfRestaurant(Long restaurantId,String orderStatus) throws OrderException, RestaurantException;

	OrderItem createOrderItem(OrderItem orderItem);
	 

}
