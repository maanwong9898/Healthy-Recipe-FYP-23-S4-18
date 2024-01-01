package com.FYP18.HealthyRecipe.Repository.Categories;

import org.springframework.data.jpa.repository.JpaRepository;
 
import com.FYP18.HealthyRecipe.Entity.Categories.HealthGoal;


public interface HealthGoalRepo extends JpaRepository<HealthGoal,Long>{// CategoryRepository<Allergies, Long> {
    
}