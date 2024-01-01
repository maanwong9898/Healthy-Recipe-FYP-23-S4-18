package com.FYP18.HealthyRecipe.Entity.Categories;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name= "EducationalContentCategory")
public class EducationalContentCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    public Long id;
    
    // Healthy eating, Healthy Lifestyle, Misc

    @Column(name = "subcategoryName", nullable = false)
    public String subcategoryName;
}
