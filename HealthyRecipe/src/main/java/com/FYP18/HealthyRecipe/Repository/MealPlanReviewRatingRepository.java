package com.FYP18.HealthyRecipe.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
 
import com.FYP18.HealthyRecipe.DTO.ReviewRatingDTO;
import com.FYP18.HealthyRecipe.Entity.MealPlanReviewRating;
import com.FYP18.HealthyRecipe.Entity.MealPlanReviewRatingId;

@Repository
public interface MealPlanReviewRatingRepository extends JpaRepository<MealPlanReviewRating, MealPlanReviewRatingId>  {
    
    // @Modifying
    // @Transactional
    // @Query("SELECT b FROM recipe_review_rating b WHERE b.userid = :id.UserID AND b.recipeid = :id.RecipeID")
    // List<RecipeReviewRating> findByUserID(String id);

    @Modifying
    @Transactional
    @Query("SELECT b FROM MealPlanReviewRating b WHERE b.mealPlanReviewRatingId.UserID = :userId")
    List<MealPlanReviewRating> findByUserID(String userId);

    @Modifying
    @Transactional
    @Query("SELECT b FROM MealPlanReviewRating b WHERE b.mealPlanReviewRatingId.MealPlanID = :mealPlanId")
    List<MealPlanReviewRating> findByMealPlanId(Long mealPlanId);

    @Transactional
    @Query("SELECT COUNT(b) as totalNumber, AVG(b.rating) as averageRatings  FROM MealPlanReviewRating b WHERE b.mealPlanReviewRatingId.MealPlanID = :mealPlanId")
    ReviewRatingDTO findAverageDTOByMealPlanId (Long mealPlanId);


}