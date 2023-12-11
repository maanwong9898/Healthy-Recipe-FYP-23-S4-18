package com.FYP18.HealthyRecipe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.Entity.BlogReviewRating;
import com.FYP18.HealthyRecipe.Entity.BlogReviewRatingId;

public interface BlogReviewRatingRepository extends JpaRepository<BlogReviewRating, BlogReviewRatingId>  {
           
    @Modifying
    @Transactional
    @Query("DELETE FROM BlogReviewRating b WHERE b.blogReviewRatingId.blogID = :id")
    void deleteByBlogId(Long id);
}
