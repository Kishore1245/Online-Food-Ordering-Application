package com.FOP.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FOP.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
