package com.FYP18.HealthyRecipe.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.Entity.User;
import java.util.List;


public interface UserRepository extends JpaRepository<User,String> {
    
    List<User> findByFullName(String fullName);
    Optional<User> findById(String id);  
    // @Modifying
    // @Transactional
    // @Query("SELECT b FROM USERACCOUNT b WHERE b.id = :id")
    // User findById(String id);
}
