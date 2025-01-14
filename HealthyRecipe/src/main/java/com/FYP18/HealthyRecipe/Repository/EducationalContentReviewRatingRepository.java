package com.FYP18.HealthyRecipe.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.DTO.PopularReviewRatingDTO;
import com.FYP18.HealthyRecipe.DTO.ReviewRatingDTO;
import com.FYP18.HealthyRecipe.Entity.EducationalContent;
import com.FYP18.HealthyRecipe.Entity.EducationalContentReviewRating;
import com.FYP18.HealthyRecipe.Entity.EducationalContentReviewRatingId;

public interface EducationalContentReviewRatingRepository extends JpaRepository<EducationalContentReviewRating, EducationalContentReviewRatingId>  {
           
    @Modifying
    @Transactional
    @Query("DELETE FROM EducationalContentReviewRating b WHERE b.educationalContentReviewRatingId.educationalContentID = :educationalContentId AND b.educationalContentReviewRatingId.UserID = :userId ")
    void deleteByEducationalContentId(String userId, Long educationalContentId);

 
    @Modifying
    @Transactional
    @Query("SELECT b FROM EducationalContentReviewRating b WHERE b.educationalContentReviewRatingId.UserID = :userId")
    List<EducationalContentReviewRating> findByUserID(String userId);


    @Modifying
    @Transactional
    @Query("SELECT b FROM EducationalContentReviewRating b WHERE b.educationalContentReviewRatingId.educationalContentID = :educationalContentId")
    List<EducationalContentReviewRating> findByEducationalContentId(Long educationalContentId);

    // Long getAverageRatings();
    // Integer getTotalNumber(); 
    @Transactional
    @Query("SELECT COUNT(b) as totalNumber, AVG(b.rating) as averageRatings  FROM EducationalContentReviewRating b WHERE b.educationalContentReviewRatingId.educationalContentID = :educationalContentId")
    ReviewRatingDTO findAverageDTOByEducationalContentId (Long educationalContentId);
    // List<ReviewRatingDTO> findAverageByEducationalContentIds(List<EducationalContent> id);
    
    // @Query("SELECT COUNT(rr) as totalNumber, rr.educationalContentReviewRatingId.educationalContentID as id, AVG(rr.rating) AS averageRatings, AVG(LENGTH(COALESCE(rr.review, ''))) AS averageReviewSize FROM EducationalContentReviewRating rr GROUP BY id")
    // List<PopularReviewRatingDTO> getMostPopularEducationalContents(); 

 // @Query("SELECT COUNT(rr) as totalNumber, rr.educationalContentReviewRatingId.educationalContentID as id, AVG(rr.rating) AS averageRatings, AVG(LENGTH(COALESCE(rr.review, ''))) AS averageReviewSize FROM EducationalContentReviewRating rr GROUP BY id")
    @Query("SELECT COUNT(rr) as totalNumber, rr.educationalContentReviewRatingId.educationalContentID as id, AVG(rr.rating) AS averageRatings, AVG(LENGTH(COALESCE(rr.review, ''))) AS averageReviewSize FROM EducationalContentReviewRating rr GROUP BY id ORDER BY averageRatings DESC, averageReviewSize DESC, totalNumber DESC")
    List<PopularReviewRatingDTO> getMostPopularEducationalContents(); 

    @Query("SELECT COUNT(rr) as totalNumber, rr.educationalContentReviewRatingId.educationalContentID as id, AVG(rr.rating) AS averageRatings, AVG(LENGTH(COALESCE(rr.review, ''))) AS averageReviewSize FROM EducationalContentReviewRating rr GROUP BY id ORDER BY averageRatings DESC, averageReviewSize DESC, totalNumber DESC LIMIT :count")
    List<PopularReviewRatingDTO> getMostPopularEducationalContents(@Param("count") Integer count); 
    // List<EducationalContentReviewRating> findByEducationalContentReviewRatingId(EducationalContentReviewRatingId educationalContentReviewRatingId);
    // List<EducationalContent> findByUserID(User userID);
}
