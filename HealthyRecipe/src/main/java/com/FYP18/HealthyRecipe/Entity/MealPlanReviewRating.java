package com.FYP18.HealthyRecipe.Entity;
import java.time.LocalDateTime;

import org.hibernate.annotations.Formula;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.FYP18.HealthyRecipe.DTO.UserInfoDTO;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

 
@Getter
@Setter
@Builder 
@AllArgsConstructor 
@NoArgsConstructor
@Entity
@Table(name = "MEAL_PLAN_REVIEW_RATING")  
public class MealPlanReviewRating {

    @EmbeddedId
    private MealPlanReviewRatingId mealPlanReviewRatingId;

    @Transient
    @Formula("SELECT u.id AS id, u.username AS username FROM User u WHERE u.id = UserID")
    private UserInfoDTO userDTO;

    // @Query(value ="SELECT r.id AS id, r.username AS username, FROM User r WHERE
    // r.id = :id")
    // UserInfoDTO getUserInfoDTO(String id);
    @Column(name = "CreatedDT", columnDefinition = "DATETIME default (NOW())")
    private LocalDateTime createdDateTime;

    @Column(name = "LastUpdatedDT", columnDefinition = "DATETIME default (NOW())")
    private LocalDateTime lastUpdatedDateTime;

    @Column(name = "Rating", nullable = false)
    private double rating;

    @Column(name = "Review")
    private String review;

    @Override
    public String toString() {
        return mealPlanReviewRatingId.toString() + ", rating: " + rating + ", Review: " + review;
    }

    
}
