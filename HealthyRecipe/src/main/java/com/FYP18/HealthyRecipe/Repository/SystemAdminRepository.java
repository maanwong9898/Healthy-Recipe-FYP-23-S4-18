package com.FYP18.HealthyRecipe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FYP18.HealthyRecipe.Entity.SystemAdmin;

public interface SystemAdminRepository extends JpaRepository<SystemAdmin, String> {
    
}
