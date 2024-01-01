package com.FYP18.HealthyRecipe.Entity.Categories;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name= "HealthGoal")
public class HealthGoal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    public Long id;
    
    // Weight gain, Balanced diet, Weight loss, Misc
    @Column(name = "subcategoryName", nullable = false)
    public String subcategoryName;
}
