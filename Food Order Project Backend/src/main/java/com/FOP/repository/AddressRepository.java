package com.FOP.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FOP.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
