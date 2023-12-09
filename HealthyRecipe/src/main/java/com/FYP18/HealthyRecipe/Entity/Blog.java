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
      @Column(name = "CreatedDT", nullable = false)
    private LocalDateTime createdDateTime = LocalDateTime.now();

    @Column(name = "LastUpdatedDT")
    private LocalDateTime lastUpdatedDateTime = LocalDateTime.now();

    @Column(name= "ACTIVE")
    private Boolean active;
    
    @Column(name= "UserID", nullable = false)
    public String UserID;

    @Column(name= "BlogID", nullable = false)
    public Integer blogID;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

}
// ID MEDIUMINT NOT NULL AUTO_INCREMENT,
// 	ACTIVE BIT(1) NOT NULL DEFAULT b'1',
// 	CreatedDT DATETIME NOT NULL DEFAULT (NOW()),
// 	LastUpdatedDT DATETIME,

// 	PUBLISHER VARCHAR(255) NOT NULL,
// 	TITLE 	VARCHAR(50) NOT NULL,
// 	INFO VARCHAR(255),
// 	CONSTRAINT ID_PKey PRIMARY KEY (ID)