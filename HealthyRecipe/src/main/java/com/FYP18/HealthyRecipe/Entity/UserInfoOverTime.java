package com.FYP18.HealthyRecipe.Entity;

import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder 
@NoArgsConstructor
@AllArgsConstructor
@Entity 
public class UserInfoOverTime {
  
    @EmbeddedId
    private UserInfoDateId id;
  
    @Column(name= "Info")
    private double info;


    // i can have many user info referencing the same user 
    @ManyToOne
    @JoinColumn(name = "UserID", referencedColumnName = "id", insertable = false, updatable = false)
    private User userAccount;

    @Override
    public String toString()
    {
        return id.toString() + " "+ info;
    }
}


	// UserID 					VARCHAR(255) NOT NULL,
	// SavedDate			DATE NOT NULL DEFAULT(CURDATE()),
	// Weight 		BIT(1) NOT NULL, 
    // Info                DECIMAL(5,2) NOT NULL,
 	// CONSTRAINT ID_PKey PRIMARY KEY (UserID, SavedDate, Weight),