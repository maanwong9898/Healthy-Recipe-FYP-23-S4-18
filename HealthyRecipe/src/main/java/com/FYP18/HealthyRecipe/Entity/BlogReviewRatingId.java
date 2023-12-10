package com.FYP18.HealthyRecipe.Entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Id;

@Embeddable
public class BlogReviewRatingId implements Serializable
{ 
    @Column(name= "UserID", nullable = false, updatable = false)
    public String UserID;
 
    @Column(name= "BlogID", nullable = false, updatable = false)
    public Integer blogID;

    @Override
    public String toString()
    {
        return "User ID: " + UserID + ", Blog ID: " + blogID;
    } 
}