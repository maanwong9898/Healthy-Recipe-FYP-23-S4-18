package com.FYP18.HealthyRecipe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FYP18.HealthyRecipe.Entity.RecipeReviewRating;
import com.FYP18.HealthyRecipe.Entity.RecipeReviewRatingId;

public interface RecipeReviewRatingRepository extends JpaRepository<RecipeReviewRating, RecipeReviewRatingId>  {
    
}
