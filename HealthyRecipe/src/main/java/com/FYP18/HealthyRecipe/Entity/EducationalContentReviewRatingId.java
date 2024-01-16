package com.FYP18.HealthyRecipe.Entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class EducationalContentReviewRatingId implements Serializable {
    @Column(name = "UserID", nullable = false, updatable = false)
    public String UserID;
    // this belongs to whoever user left review/rating
    // usually registered user

    @Column(name = "EducationalContentID", nullable = false, updatable = false)
    public Long educationalContentID;

    // this belongs to which educational content
    @Override
    public String toString() {
        return "User ID: " + UserID + ", Educational Content ID: " + educationalContentID;
    }
}