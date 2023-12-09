package com.FYP18.HealthyRecipe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FYP18.HealthyRecipe.Entity.RegisteredUser; 


public interface RegisteredUserRepository extends JpaRepository<RegisteredUser, String>{

    
}
