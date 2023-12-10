package com.FYP18.HealthyRecipe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;  
import com.FYP18.HealthyRecipe.Entity.UserInfoDateId;  
import com.FYP18.HealthyRecipe.Entity.UserInfoOverTime; 


public interface UserInfoRepository extends JpaRepository<UserInfoOverTime, UserInfoDateId>{

    
}
