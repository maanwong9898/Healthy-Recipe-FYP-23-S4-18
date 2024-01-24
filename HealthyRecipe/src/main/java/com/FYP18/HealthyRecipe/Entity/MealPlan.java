package com.FYP18.HealthyRecipe.Entity;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import com.FYP18.HealthyRecipe.DTO.RecipeDTO;
import com.FYP18.HealthyRecipe.Entity.Categories.Allergies;
import com.FYP18.HealthyRecipe.Entity.Categories.EducationalContentCategory;
import com.FYP18.HealthyRecipe.Entity.Categories.HealthGoal;

import com.FYP18.HealthyRecipe.Entity.Recipe;

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
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter; 
@Getter
@Setter
@Builder
@AllArgsConstructor 
@NoArgsConstructor
@Entity
@Table(name = "MealPlan") 
public class MealPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
 
    private String title;
    
    @Column(nullable = false, columnDefinition="TEXT")
    @Lob
    private String introduction;

    @Column(nullable = false, columnDefinition="TEXT")
    @Lob
    private String  mainContent;

    private String  conclusion,
                    img, 
                    imgTitle;
   
                    // User (same like other features) 
    private LocalDate createdDT;

    private LocalDate lastUpdatedDT;

    @Column(columnDefinition="bit(1) default b'1'")
    private Boolean active = true;
    
    @Column(name="healthGoalCategory")
    private Long healthGoalCategoryId;
    
    @ManyToOne(fetch = FetchType.EAGER, cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH })
    @JoinColumn(name = "healthGoalCategory", insertable = false, updatable = false)
    private HealthGoal healthGoal;   

    @ManyToMany
    @JoinTable(
        name = "mealplan_recipe",
        joinColumns = @JoinColumn(name = "id"),
        inverseJoinColumns = @JoinColumn(name = "recipe_id"))
    private Set<Recipe> recipes = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "UserID", referencedColumnName = "id")
    private User userID; 
}
