package com.FYP18.HealthyRecipe.Entity.Categories;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
@Table(name= "MealType")
public class MealType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;
    
    // Chinese, Halal, Western, Mediterranean, Korean, Japanese
    @Column(name = "subcategoryName", nullable = false)
    private String subcategoryName;
}
 