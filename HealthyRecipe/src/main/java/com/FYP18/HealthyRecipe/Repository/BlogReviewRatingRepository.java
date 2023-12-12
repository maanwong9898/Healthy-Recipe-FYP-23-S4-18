package com.FYP18.HealthyRecipe.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.Entity.Blog;
import com.FYP18.HealthyRecipe.Entity.BlogReviewRating;
import com.FYP18.HealthyRecipe.Entity.BlogReviewRatingId;

public interface BlogReviewRatingRepository extends JpaRepository<BlogReviewRating, BlogReviewRatingId>  {
           
    @Modifying
    @Transactional
    @Query("DELETE FROM BlogReviewRating b WHERE b.blogReviewRatingId.blogID = :blogId AND b.blogReviewRatingId.UserID = :userId ")
    void deleteByBlogId(String userId, Long blogId);

 
    @Modifying
    @Transactional
    @Query("SELECT b FROM BlogReviewRating b WHERE b.blogReviewRatingId.UserID = :userId")
    List<BlogReviewRating> findByUserID(String userId);

    // List<BlogReviewRating> findByBlogReviewRatingId(BlogReviewRatingId blogReviewRatingId);
    // List<Blog> findByUserID(User userID);
}
