package com.FOP.service;

import com.stripe.exception.StripeException;
import com.FOP.model.Order;
import com.FOP.model.PaymentResponse;

public interface PaymentService {
	
	public PaymentResponse generatePaymentLink(Order order) throws StripeException;

}
