package com.FYP18.HealthyRecipe.Repository.Categories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FYP18.HealthyRecipe.Entity.Categories.Allergies;


public interface AllergiesRepo extends JpaRepository<Allergies,Long>{// CategoryRepository<Allergies, Long> {
    
}