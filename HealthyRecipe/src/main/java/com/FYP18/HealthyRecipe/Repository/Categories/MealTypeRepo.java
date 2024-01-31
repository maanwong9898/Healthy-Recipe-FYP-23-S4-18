package com.FYP18.HealthyRecipe.Repository.Categories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FYP18.HealthyRecipe.Entity.Categories.MealType;

public interface MealTypeRepo extends JpaRepository<MealType, Long> {
    
}
