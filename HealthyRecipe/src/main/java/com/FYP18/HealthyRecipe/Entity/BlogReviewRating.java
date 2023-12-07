package com.FYP18.HealthyRecipe.Entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;

 
public class BlogReviewRating {

    @Column(name = "CreatedDT", nullable = false)
    private LocalDateTime createdDateTime = LocalDateTime.now();

    @Column(name = "LastUpdatedDT")
    private LocalDateTime lastUpdatedDateTime = LocalDateTime.now();

    @Column(name = "Rating", nullable = false)
    private double rating;

    @Column(name= "Review")
    private String review;

    @Column(name= "UserID", nullable = false)
    public String UserID;

    @Column(name= "BlogID", nullable = false)
    public Integer blogID;
    
}
// CreatedDT DATETIME NOT NULL DEFAULT (NOW()),
// 	LastUpdatedDT DATETIME,
// 	Rating DECIMAL(5,2) NOT NULL,
// 	Review VARCHAR(255) DEFAULT "", 

// 	UserID VARCHAR(255) NOT NULL,
// 	BlogID MEDIUMINT NOT NULL,
