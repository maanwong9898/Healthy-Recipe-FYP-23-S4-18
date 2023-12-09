package com.FYP18.HealthyRecipe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FYP18.HealthyRecipe.Entity.BusinessUser;  

public interface BusinessUserRepository extends JpaRepository<BusinessUser, String>{

    
}
