package com.FYP18.HealthyRecipe.Repository.Categories;

import org.springframework.data.jpa.repository.JpaRepository;
 
import com.FYP18.HealthyRecipe.Entity.Categories.DietaryPreferences;


public interface DietaryPreferenceRepo extends JpaRepository<DietaryPreferences,Long>{// CategoryRepository<Allergies, Long> {
    
}