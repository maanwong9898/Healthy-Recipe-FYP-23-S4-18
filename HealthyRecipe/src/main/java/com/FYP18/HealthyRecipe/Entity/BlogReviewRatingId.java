package com.FYP18.HealthyRecipe.Entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable; 

@Embeddable
public class BlogReviewRatingId implements Serializable
{ 
    @Column(name= "UserID", nullable = false, updatable = false)
    public String UserID;
    // this belongs to whoever user left review/rating
    // usually registered user
 
    
    @Column(name= "BlogID", nullable = false, updatable = false)
    public Long blogID;
    // this belongs to which blog 
    @Override
    public String toString()
    {
        return "User ID: " + UserID + ", Blog ID: " + blogID;
    } 
}