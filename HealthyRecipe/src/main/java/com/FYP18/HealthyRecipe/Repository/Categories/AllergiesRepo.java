package com.FYP18.HealthyRecipe.Repository.Categories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.Entity.Categories.Allergies;



public interface AllergiesRepo extends JpaRepository<Allergies,Long>{// CategoryRepository<Allergies, Long> {
     
    // @Transactional
    // @Query("SELECT FROM Allergies b WHERE b.subcategoryName = :subcategoryName") 
    // Optional<Allergies> findBySubcategoryName(String subcategoryName);
 
}