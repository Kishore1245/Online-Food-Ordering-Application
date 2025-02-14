package com.FOP.service;

import java.util.List;

import com.FOP.model.Notification;
import com.FOP.model.Order;
import com.FOP.model.Restaurant;
import com.FOP.model.User;

public interface NotificationService {
	
	public Notification sendOrderStatusNotification(Order order);
	public void sendRestaurantNotification(Restaurant restaurant, String message);
	public void sendPromotionalNotification(User user, String message);
	
	public List<Notification> findUsersNotification(Long userId);

}
