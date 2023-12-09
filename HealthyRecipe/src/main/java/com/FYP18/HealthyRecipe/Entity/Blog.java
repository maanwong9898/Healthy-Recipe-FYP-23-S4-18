package com.FYP18.HealthyRecipe.Entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import lombok.*;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Getter
@Setter
@Builder
@AllArgsConstructor 
@NoArgsConstructor
@Entity
@Table(name = "Blog")

public class Blog {

 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "CreatedDT", nullable = false)
    private LocalDateTime createdDateTime = LocalDateTime.now();

    @Column(name = "LastUpdatedDT")
    private LocalDateTime lastUpdatedDateTime = LocalDateTime.now();

    @Column(name= "ACTIVE")
    private Boolean active = true;

    @Column(name= "Educational_Content")
    private Boolean educationalContent = true;
    
    
    
    @Column(name= "Publisher")
    private String publisher;

    
    @Column(name= "Title")
    private String title;

    @Column(name= "Info")
    private String info;
     
    @Column(name= "UserID")
    private String userID;
    
 
}    
 
    
	// LastUpdatedDT DATETIME, 
	
	// EducationalContent	BIT(1) NOT NULL,  
	// Info VARCHAR(255),  


        // b1_0.id,  
        // b1_0.educational_content, 
        // b1_0.last_updateddt,  

        //        b1_0.id,
        // b1_0.active,
        // b1_0.createddt,
        // b1_0.educational_content,
        // b1_0.info,
        // b1_0.last_updateddt,
        // b1_0.publisher,
        // b1_0.title 