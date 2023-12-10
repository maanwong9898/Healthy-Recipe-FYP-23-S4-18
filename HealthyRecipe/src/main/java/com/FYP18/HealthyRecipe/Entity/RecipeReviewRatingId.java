package com.FYP18.HealthyRecipe.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class RecipeReviewRatingId {
     @Column(name= "UserID", nullable = false)
    public String UserID;
 
    @Column(name= "RecipeID", nullable = false)
    public Integer RecipeID;

    @Override
    public String toString()
    {
        return "User ID: " + UserID + ", Recipe ID: " + RecipeID;
    }
}
