package com.FYP18.HealthyRecipe.Entity;

import lombok.*;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import org.hibernate.Length;

import com.FYP18.HealthyRecipe.Entity.Categories.Allergies;
import com.FYP18.HealthyRecipe.Entity.Categories.DietaryPreferences;
import com.FYP18.HealthyRecipe.Entity.Categories.MealType;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
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
 
    @Column(nullable = false, columnDefinition="TEXT")
    @Lob 
    private String steps;

    @Column(name = "Active", nullable = false,columnDefinition="bit(1) default b'1'")
    private Boolean active;

    @Column(name = "Publisher")
    private String publisher;

    @Column(name = "Title", nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition="TEXT", length = Length.LONG32)
    @Lob 
    private String description;

    @Column(name = "Info", nullable = false)
    private String info;
 
    @Column 
    private Float calories;

    @Column 
    private Float protein;

    @Column 
    private Float fat;

    @Column 
    private Float fibre;

    @Column 
    private Float sodium;

    @Column 
    private Float carbs;
    
    @Column 
    private Integer servingSize;

    // all in minutes
    private Integer cookingTime; 

    @Column(name = "dietaryPreference", nullable = true)
    private Long dietaryPreferencesId;
    
    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name="dietaryPreference", insertable = false, updatable = false)  
    private DietaryPreferences dietaryPreferences;

    @Column(name = "mealType", nullable = true)
    private Long mealTypeId;
    
    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name="mealType", insertable = false, updatable = false)  
    private MealType mealType;


    @ManyToMany
    @JoinTable(
        name = "recipe_allergies",
        joinColumns = @JoinColumn(name = "id"),
        inverseJoinColumns = @JoinColumn(name = "allergy_id"))
    private Set<Allergies> allergies = new HashSet<>();
  

    private LocalDate createdDT;

    private LocalDate lastUpdatedDT;

    @Column(nullable = false, columnDefinition="TEXT")
    @Lob
    private String ingredients;

    private String img;

    private String imgTitle;
    // yes the userId can be null, credit may land on existing business 
    // users or saved inside info column
    @ManyToOne
    @JoinColumn(name = "UserID", referencedColumnName = "id")
    private User userID;
 
}

