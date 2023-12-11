package com.FYP18.HealthyRecipe.Entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column; 
import jakarta.persistence.EmbeddedId;
 
import lombok.*;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
 
@Getter
@Setter
@Builder 
@AllArgsConstructor 
@NoArgsConstructor
@Entity
@Table(name = "BLOG_REVIEW_RATING") 
public class BlogReviewRating {


    @EmbeddedId
    private BlogReviewRatingId blogReviewRatingId;
  
    @ManyToOne
    @JoinColumn(name = "blogid", referencedColumnName = "id", insertable = false, updatable = false)
    private Blog blog;

    @ManyToOne
    @JoinColumn(name = "UserID", referencedColumnName = "id", insertable = false, updatable = false)
    private User userAccount;


    @Column(name = "CreatedDT", nullable = false, columnDefinition="DATETIME default (NOW())")
    private LocalDateTime createdDateTime;

    @Column(name = "LastUpdatedDT", columnDefinition="DATETIME default (NOW())")
    private LocalDateTime lastUpdatedDateTime;

    @Column(name = "Rating", nullable = false)
    private double rating;

    @Column(name= "Review")
    private String review;

    @Override 
    public String toString()
    {
        return blogReviewRatingId.toString()+ ", rating: "+ rating + ", Review: " + review;
    } 
    
} 

