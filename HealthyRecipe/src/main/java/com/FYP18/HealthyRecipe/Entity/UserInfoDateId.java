package com.FYP18.HealthyRecipe.Entity;

import java.io.Serializable;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable 
public class UserInfoDateId implements Serializable  {
     @Column(name= "UserID", nullable = false)
    public String UserID;
 
    @Column(name= "SavedDate", nullable = false)
    public LocalDate SavedDate;

    @Column(name= "Weight")
    private Boolean weight;

    @Override
    public String toString()
    {
        return "User ID: " + UserID + ", Blog ID: " + SavedDate;
    }
}

	// UserID 					VARCHAR(255) NOT NULL,
	// SavedDate			DATE NOT NULL DEFAULT(CURDATE()),
	// Weight 		BIT(1) NOT NULL, 
    // Info                DECIMAL(5,2) NOT NULL,
 	// CONSTRAINT ID_PKey PRIMARY KEY (UserID, SavedDate, Weight),