package com.FYP18.HealthyRecipe.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.DTO.PopularReviewRatingDTO;
import com.FYP18.HealthyRecipe.DTO.ReviewRatingDTO;
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


    @Modifying
    @Transactional
    @Query("SELECT b FROM BlogReviewRating b WHERE b.blogReviewRatingId.blogID = :blogId")
    List<BlogReviewRating> findByBlogId(Long blogId);

    // Long getAverageRatings();
    // Integer getTotalNumber(); 
    @Transactional
    @Query("SELECT COUNT(b) as totalNumber, AVG(b.rating) as averageRatings  FROM BlogReviewRating b WHERE b.blogReviewRatingId.blogID = :blogId")
    ReviewRatingDTO findAverageDTOByBlogId (Long blogId);
    // List<ReviewRatingDTO> findAverageByBlogIds(List<Blog> id);
    
    @Query("SELECT COUNT(rr) as totalNumber, rr.blogReviewRatingId.blogID as id, AVG(rr.rating) AS averageRatings, AVG(LENGTH(COALESCE(rr.review, ''))) AS averageReviewSize FROM BlogReviewRating rr GROUP BY id")
    List<PopularReviewRatingDTO> getMostPopularBlogs(); 

    // List<BlogReviewRating> findByBlogReviewRatingId(BlogReviewRatingId blogReviewRatingId);
    // List<Blog> findByUserID(User userID);
}
