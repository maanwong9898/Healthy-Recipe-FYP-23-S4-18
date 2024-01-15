package com.FYP18.HealthyRecipe.Repository;
 
import java.util.List; 

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.DTO.WeightDTO;
import com.FYP18.HealthyRecipe.Entity.UserInfoDateId;  
import com.FYP18.HealthyRecipe.Entity.UserInfoOverTime; 


public interface UserInfoRepository extends JpaRepository<UserInfoOverTime, UserInfoDateId>{
 
    @Transactional
    @Query("SELECT NEW com.FYP18.HealthyRecipe.DTO.WeightDTO(r.id.date, r.weight) FROM UserInfoOverTime r WHERE r.id.userId = :id")
    List<WeightDTO> getWeights(String id);
    // @Query(value ="SELECT r FROM UserInfoOverTime r WHERE :id = r.id.userId")
    // List<UserInfoOverTime> getWeights(String id);
}
