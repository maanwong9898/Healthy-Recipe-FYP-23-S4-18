package com.FYP18.HealthyRecipe.Repository.Categories;

import org.springframework.data.jpa.repository.JpaRepository;
 
import com.FYP18.HealthyRecipe.Entity.Categories.EducationalContentCategory;


public interface EducationalContentCategoryRepo extends JpaRepository<EducationalContentCategory,Long>{// CategoryRepository<Allergies, Long> {
    
}