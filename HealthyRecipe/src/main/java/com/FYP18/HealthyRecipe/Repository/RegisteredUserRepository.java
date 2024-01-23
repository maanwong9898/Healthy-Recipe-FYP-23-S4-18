package com.FYP18.HealthyRecipe.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.FYP18.HealthyRecipe.DTO.AgeGroupRequest;
import com.FYP18.HealthyRecipe.Entity.RegisteredUser;

import jakarta.transaction.Transactional; 


@Repository
public interface RegisteredUserRepository extends JpaRepository<RegisteredUser, String>{

    @Transactional 
    @Query("SELECT Age as age, COUNT(*) AS ageCount FROM ( SELECT IFNULL(TIMESTAMPDIFF(YEAR, dob, CURDATE()), 0) AS Age FROM RegisteredUser ) AS Subquery GROUP BY Age ORDER BY ageCount DESC")
    List<AgeGroupRequest> getAgeGroup();
// SELECT  
// Age,
// COUNT(*) AS AgeCount
// FROM (
// SELECT  
// IFNULL(TIMESTAMPDIFF(YEAR, DOB, CURDATE()), 'Age not provided') AS Age
// FROM
// Registered_User
// ) AS Subquery
// GROUP BY
// Age
// ORDER BY
// AgeCount DESC;
}
