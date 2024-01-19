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
@Table(name = "RECIPE_REVIEW_RATING")  
public class RecipeReviewRating {
    
    @EmbeddedId
    private RecipeReviewRatingId recipeReviewRatingId;

    @Transient
    @Formula("SELECT u.id AS id, u.username AS username FROM User u WHERE u.id = UserID")
    private UserInfoDTO userDTO;
    
    @Column(name = "CreatedDT",  columnDefinition="DATETIME default (NOW())")
    private LocalDateTime createdDateTime ;

    @Column(name = "LastUpdatedDT", columnDefinition="DATETIME default (NOW())")
    private LocalDateTime lastUpdatedDateTime;

    @Column(name = "Rating", nullable = false)
    private double rating;

    @Column(name= "Review")
    private String review;
 
    @ManyToOne(cascade = CascadeType.REMOVE, fetch = FetchType.EAGER)
    @JoinColumn(name = "RecipeID", referencedColumnName = "id", insertable = false, updatable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Recipe recipe;

    @ManyToOne
    @JoinColumn(name = "UserID", referencedColumnName = "id", insertable = false, updatable = false)
    private RegisteredUser userAccount;
 
    @Override 
    public String toString()
    {
        return recipeReviewRatingId.toString()+ ", rating: "+ rating + ", Review: " + review;
    } 

} 