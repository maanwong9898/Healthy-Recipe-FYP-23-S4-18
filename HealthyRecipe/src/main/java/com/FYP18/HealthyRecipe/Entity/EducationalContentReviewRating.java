package com.FYP18.HealthyRecipe.Entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.Formula;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.data.jpa.repository.Query;

import com.FYP18.HealthyRecipe.DTO.UserInfoDTO;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;

import lombok.*;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "EDUCATIONAL_CONTENT_REVIEW_RATING")
public class EducationalContentReviewRating {

    @EmbeddedId
    private EducationalContentReviewRatingId educationalContentReviewRatingId;

    // @ManyToOne(cascade = CascadeType.REMOVE, fetch = FetchType.EAGER)
    // @JoinColumn(name = "blogid", referencedColumnName = "id", insertable = false,
    // updatable = false)
    // @OnDelete(action = OnDeleteAction.CASCADE)
    // private Blog blog;

    // @ManyToOne
    // @JoinColumn(name = "UserID", referencedColumnName = "id", insertable = false,
    // updatable = false)
    // private RegisteredUser userAccount;

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
        return educationalContentReviewRatingId.toString() + ", rating: " + rating + ", Review: " + review;
    }

}
