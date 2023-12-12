package com.FYP18.HealthyRecipe.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
 
import com.FYP18.HealthyRecipe.Entity.RecipeReviewRating;
import com.FYP18.HealthyRecipe.Entity.RecipeReviewRatingId;

public interface RecipeReviewRatingRepository extends JpaRepository<RecipeReviewRating, RecipeReviewRatingId>  {
    
    // @Modifying
    // @Transactional
    // @Query("SELECT b FROM recipe_review_rating b WHERE b.userid = :id.UserID AND b.recipeid = :id.RecipeID")
    // List<RecipeReviewRating> findByUserID(String id);


    @Modifying
    @Transactional
    @Query("SELECT b FROM RecipeReviewRating b WHERE b.recipeReviewRatingId.UserID = :userId")
    List<RecipeReviewRating> findByUserID(String userId);

}
