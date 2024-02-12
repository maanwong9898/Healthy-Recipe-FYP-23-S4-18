package com.FYP18.HealthyRecipe.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.DTO.PopularReviewRatingDTO;
import com.FYP18.HealthyRecipe.DTO.ReviewRatingDTO;
import com.FYP18.HealthyRecipe.Entity.BlogReviewRating;
import com.FYP18.HealthyRecipe.Entity.RecipeReviewRating;
import com.FYP18.HealthyRecipe.Entity.RecipeReviewRatingId;

@Repository
public interface RecipeReviewRatingRepository extends JpaRepository<RecipeReviewRating, RecipeReviewRatingId>  {
    
    // @Modifying
    // @Transactional
    // @Query("SELECT b FROM recipe_review_rating b WHERE b.userid = :id.UserID AND b.recipeid = :id.RecipeID")
    // List<RecipeReviewRating> findByUserID(String id);


    @Modifying
    @Transactional
    @Query("SELECT b FROM RecipeReviewRating b WHERE b.recipeReviewRatingId.UserID = :userId")
    List<RecipeReviewRating> findByUserID(String userId);

    @Modifying
    @Transactional
    @Query("SELECT b FROM RecipeReviewRating b WHERE b.recipeReviewRatingId.RecipeID = :recipeId")
    List<RecipeReviewRating> findByRecipeId(Long recipeId);

    @Transactional
    @Query("SELECT COUNT(b) as totalNumber, AVG(b.rating) as averageRatings  FROM RecipeReviewRating b WHERE b.recipeReviewRatingId.RecipeID = :recipeId")
    ReviewRatingDTO findAverageDTOByRecipeId (Long recipeId);
    
    //> SELECT COUNT(*) as totalNumber, rr.recipeid as id, AVG(rr.rating) AS averageRatings, AVG(LENGTH(COALESCE(rr.review, ''))) AS averageReviewSize FROM recipe_review_rating rr GROUP BY id ORDER BY averageRatings DESC, averageReviewSize DESC, totalNumber DESC;

    @Query("SELECT COUNT(rr) as totalNumber, rr.recipeReviewRatingId.RecipeID as id, AVG(rr.rating) AS averageRatings, AVG(LENGTH(COALESCE(rr.review, ''))) AS averageReviewSize FROM RecipeReviewRating rr GROUP BY id ORDER BY averageRatings DESC, averageReviewSize DESC, totalNumber DESC")
    List<PopularReviewRatingDTO> getMostPopularRecipes(); 

    @Query("SELECT COUNT(rr) as totalNumber, rr.recipeReviewRatingId.RecipeID as id, AVG(rr.rating) AS averageRatings, AVG(LENGTH(COALESCE(rr.review, ''))) AS averageReviewSize FROM RecipeReviewRating rr GROUP BY id ORDER BY averageRatings DESC, averageReviewSize DESC, totalNumber DESC LIMIT :count")
    List<PopularReviewRatingDTO> getMostPopularRecipes(@Param("count") Integer count); 
}
