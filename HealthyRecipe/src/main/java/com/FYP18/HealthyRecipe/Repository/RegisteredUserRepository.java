package com.FYP18.HealthyRecipe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FYP18.HealthyRecipe.Entity.RegisteredUser;
import com.FYP18.HealthyRecipe.Entity.User;


public interface RegisteredUserRepository extends JpaRepository<RegisteredUser, String>{

    
}
