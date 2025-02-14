package com.FOP.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FOP.model.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {


//    CartItem findByFoodIsContaining

}
