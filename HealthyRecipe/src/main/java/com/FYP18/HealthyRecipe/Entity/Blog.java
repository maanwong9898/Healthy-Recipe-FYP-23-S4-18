package com.FYP18.HealthyRecipe.Entity;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import lombok.*;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
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

    @Column(name = "CreatedDT", columnDefinition="DATETIME default (NOW())", updatable = false)
    private LocalDateTime createdDateTime;

    @Column(name = "LastUpdatedDT")
    private LocalDateTime lastUpdatedDateTime;

    @Column(name= "ACTIVE", columnDefinition="bit(1) default b'1'")
    private Boolean active;

    @Column(name= "Educational_Content", updatable = false)
    private Boolean educationalContent ;
     
    @Column(name= "Publisher")
    private String publisher;
 
    @Column(name= "Title")
    private String title;

    @Column(name= "Info")
    private String info;
      
    // yes the userId can be null, credit may land on existing business 
    // users or saved inside info column
    // i included cascadeType.MERGE just to 
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "UserID", referencedColumnName = "id")
    private User userID;
 
    // this userId belongs to who wrote it, usually fellow 
    // business user
  
}    
  