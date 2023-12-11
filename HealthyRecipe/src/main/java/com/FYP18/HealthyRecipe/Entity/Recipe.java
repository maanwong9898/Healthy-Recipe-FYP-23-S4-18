package com.FYP18.HealthyRecipe.Entity;

import lombok.*;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Getter
@Setter
@Builder
@AllArgsConstructor 
@NoArgsConstructor
@Entity
@Table(name = "RECIPE")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", updatable = false)
    private Long id;

    @Column(name = "STEPS", nullable = false)
    private String steps;

    @Column(name = "Active", nullable = false,columnDefinition="bit(1) default b'1'")
    private Boolean active;

    @Column(name = "Title", nullable = false)
    private String title;

    @Column(name = "Description", nullable = false)
    private String description;


    @Column(name = "Info", nullable = false)
    private String info;

    @Column(name = "Ingredients", nullable = false)
    private String Ingredients;

      
    // yes the userId can be null, credit may land on existing business 
    // users or saved inside info column
    @ManyToOne
    @JoinColumn(name = "UserID", referencedColumnName = "id")
    private User userID;
 
}

