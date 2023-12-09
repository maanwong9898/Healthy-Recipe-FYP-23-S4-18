package com.FYP18.HealthyRecipe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FYP18.HealthyRecipe.Entity.BlogReviewRating;
import com.FYP18.HealthyRecipe.Entity.BlogReviewRatingId;

public interface BlogReviewRatingRepository extends JpaRepository<BlogReviewRating, BlogReviewRatingId>  {
    
}
