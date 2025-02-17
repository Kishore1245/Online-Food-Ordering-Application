package com.FOP.service;

import java.util.List;

import com.FOP.Exception.UserException;
import com.FOP.model.User;

public interface UserService {

	public User findUserProfileByJwt(String jwt) throws UserException;
	
	public User findUserByEmail(String email) throws UserException;

	public List<User> findAllUsers();

	public List<User> getPenddingRestaurantOwner();

	void updatePassword(User user, String newPassword);

	void sendPasswordResetEmail(String email);

	public void sendPasswordResetEmail(String userEmail, String resetPasswordUrl);

	void sendPasswordResetEmail(User user);

}
