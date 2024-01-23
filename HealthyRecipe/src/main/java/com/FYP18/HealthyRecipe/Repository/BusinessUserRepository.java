package com.FYP18.HealthyRecipe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.Entity.BusinessUser;
import java.util.List;
  

@Repository
public interface BusinessUserRepository extends JpaRepository<BusinessUser, String>{
 
    @Transactional
    @Query("SELECT b FROM BusinessUser b WHERE b.UEN = :UEN")
    BusinessUser findByUEN(String UEN);
    
    @Transactional
    @Query("SELECT b FROM BusinessUser b WHERE b.verified = false")
    List<BusinessUser> findUnverifiedUsers();
    
}
