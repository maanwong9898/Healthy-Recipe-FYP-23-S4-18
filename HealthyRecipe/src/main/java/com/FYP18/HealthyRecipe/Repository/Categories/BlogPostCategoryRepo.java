package com.FYP18.HealthyRecipe.Repository.Categories;

import org.springframework.data.jpa.repository.JpaRepository; 
import com.FYP18.HealthyRecipe.Entity.Categories.BlogPostCategory;


public interface BlogPostCategoryRepo extends JpaRepository<BlogPostCategory,Long>{// CategoryRepository<Allergies, Long> {
    
}