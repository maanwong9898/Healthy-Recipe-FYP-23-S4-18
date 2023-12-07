package com.FYP18.HealthyRecipe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FYP18.HealthyRecipe.Entity.Recipe;

public interface RecipeRepository extends JpaRepository<Recipe, Long>{
    
}
