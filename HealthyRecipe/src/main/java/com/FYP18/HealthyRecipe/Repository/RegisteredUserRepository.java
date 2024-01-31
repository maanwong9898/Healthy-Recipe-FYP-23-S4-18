package com.FYP18.HealthyRecipe.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.FYP18.HealthyRecipe.DTO.AgeGroupRequest;
import com.FYP18.HealthyRecipe.DTO.DietaryPreferenceDemographic;
import com.FYP18.HealthyRecipe.Entity.RegisteredUser; 

import jakarta.transaction.Transactional; 


@Transactional 
@Repository
public interface RegisteredUserRepository extends JpaRepository<RegisteredUser, String>{

    @Query("SELECT Age as age, COUNT(*) AS ageCount FROM ( SELECT IFNULL(TIMESTAMPDIFF(YEAR, dob, CURDATE()), 0) AS Age FROM RegisteredUser ) AS Subquery GROUP BY Age ORDER BY ageCount DESC")
    List<AgeGroupRequest> getAgeGroup();
 
    @Query("SELECT dp.subcategoryName AS name, COUNT(ua.dietaryPreferencesId) AS count FROM DietaryPreferences dp LEFT JOIN RegisteredUser ua ON dp.id = ua.dietaryPreferencesId GROUP BY dp.subcategoryName")
    List<DietaryPreferenceDemographic> getDemo();
 
     
    @Query("SELECT b FROM RegisteredUser b WHERE b.email = :email")
    RegisteredUser findByEmail(String email); 
 
}
