package com.FYP18.HealthyRecipe.Entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@Builder 
@AllArgsConstructor 
@NoArgsConstructor
@Entity
@Table(name = "RECIPE_REVIEW_RATING")  
public class RecipeReviewRating {
    
    @EmbeddedId
    private RecipeReviewRatingId recipeReviewRatingId;
    
    @Column(name = "CreatedDT", nullable = false,  columnDefinition="DATETIME default (NOW())")
    private LocalDateTime createdDateTime ;

    @Column(name = "LastUpdatedDT", columnDefinition="DATETIME default (NOW())")
    private LocalDateTime lastUpdatedDateTime;

    @Column(name = "Rating", nullable = false)
    private double rating;

    @Column(name= "Review")
    private String review;

    @Override 
    public String toString()
    {
        return recipeReviewRatingId.toString()+ ", rating: "+ rating + ", Review: " + review;
    } 

} 