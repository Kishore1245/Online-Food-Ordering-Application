package com.FOP.service;

import java.util.List;

import com.FOP.Exception.ReviewException;
import com.FOP.model.Review;
import com.FOP.model.User;
import com.FOP.request.ReviewRequest;

public interface ReviewSerive {
	
    public Review submitReview(ReviewRequest review,User user);
    public void deleteReview(Long reviewId) throws ReviewException;
    public double calculateAverageRating(List<Review> reviews);
}
