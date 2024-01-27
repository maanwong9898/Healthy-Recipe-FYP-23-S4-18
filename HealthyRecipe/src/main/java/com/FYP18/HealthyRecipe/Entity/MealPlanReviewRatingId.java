package com.FYP18.HealthyRecipe.Entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class MealPlanReviewRatingId implements Serializable {
    @Column(name = "UserID", nullable = false, updatable = false)
    public String UserID;
    // this belongs to whoever user left review/rating
    // usually registered user
 
    @Column(name = "MealPlanID", nullable = false, updatable = false)
    public Long MealPlanID;

    // this belongs to which educational content
    @Override
    public String toString() {
        return "User ID: " + UserID + ", Meal Plan ID: " + MealPlanID;
    }
}