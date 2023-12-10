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
    @Column(name = "ID", updatable = false)
    private Long id;

    @Column(name = "CreatedDT", nullable = false, columnDefinition="DATETIME default (NOW())")
    private LocalDateTime createdDateTime;

    @Column(name = "LastUpdatedDT")
    private LocalDateTime lastUpdatedDateTime;

    @Column(name= "ACTIVE", columnDefinition="bit(1) default b'1'")
    private Boolean active;

    @Column(name= "Educational_Content", columnDefinition="bit(1) default b'1'")
    private Boolean educationalContent ;
     
    @Column(name= "Publisher")
    private String publisher;

    
    @Column(name= "Title")
    private String title;

    @Column(name= "Info")
    private String info;
     
    @Column(name= "UserID")
    private String userID;
    
 
}    
  