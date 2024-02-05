package com.FYP18.HealthyRecipe.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.DTO.RoleCountRequest;
import com.FYP18.HealthyRecipe.DTO.UserInfoDTO;
import com.FYP18.HealthyRecipe.Entity.User;
import java.util.List;

        
@Transactional
@Repository
public interface UserRepository extends JpaRepository<User,String> {
    
    // @Modifying
    // @Transactional
    // @Query("SELECT b FROM User b WHERE b.full_name = :full_name")
    // List<User> findByFullName(String fullName);
    
    // @Modifying
    // @Transactional
    // @Query("SELECT b FROM User b WHERE b.id = :id")
    // Optional<User> findById(String id);  
 
    @Transactional
    @Query("SELECT b FROM User b WHERE b.email = :email")
    User findByEmail(String email); 
 
    @Query("SELECT b FROM User b WHERE b.username = :username")
    Optional<User> findByUsername(String username); 

    
    @Query(value ="SELECT r.id AS id, r.username AS username, r.role AS role, r.email AS email, r.createdDate AS createdDate, r.enabled AS enabled FROM User r WHERE r.id = :id")
    UserInfoDTO getUserInfoDTO(String id);

    @Query(value ="SELECT r.id AS id, r.username AS username, r.role AS role, r.email AS email, r.createdDate AS createdDate, r.enabled AS enabled FROM User r")
    List<UserInfoDTO> getUsersDTO();

    @Query(value="SELECT r.role AS role, COUNT(r) as count FROM User r GROUP BY r.role")
    List<RoleCountRequest> getRoleCount();
    // List<User> findByUsername(String username);
    // @Modifying
    // @Transactional
    // @Query("SELECT b FROM USERACCOUNT b WHERE b.id = :id")
    // User findById(String id);
}
