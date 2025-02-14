package com.FOP.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FOP.model.PasswordResetToken;

public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken, Integer> {
	PasswordResetToken findByToken(String token);
}
