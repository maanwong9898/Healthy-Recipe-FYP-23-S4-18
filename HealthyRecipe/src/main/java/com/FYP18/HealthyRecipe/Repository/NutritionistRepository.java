package com.FYP18.HealthyRecipe.Repository;
 

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

 
import com.FYP18.HealthyRecipe.Entity.Nutritionist;

import java.util.List;
   
@Repository
public interface NutritionistRepository extends JpaRepository<Nutritionist, String>{

    // List<Nutritionist> findById(String id);
     @Transactional
    @Query("SELECT b FROM Nutritionist b WHERE b.verified = false")
    List<Nutritionist> findUnverifiedUsers(); 

      
    @Query("SELECT b FROM Nutritionist b WHERE b.email = :email")
    Nutritionist findByEmail(String email);
}
