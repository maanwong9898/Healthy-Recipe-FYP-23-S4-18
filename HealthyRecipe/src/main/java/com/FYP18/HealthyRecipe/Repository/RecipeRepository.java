package com.FYP18.HealthyRecipe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.DTO.RecipeDTO;
import com.FYP18.HealthyRecipe.Entity.Recipe;
import com.FYP18.HealthyRecipe.Entity.User;

import java.util.List;


public interface RecipeRepository extends JpaRepository<Recipe, Long>{
    

    @Modifying
    @Transactional
    @Query("SELECT b FROM Recipe b WHERE b.userID.id = :userId")
    List<Recipe> findByUserID(String userId);


    @Modifying
    @Transactional
    @Query("DELETE FROM Recipe b WHERE b.ID = :id")
    void deleteByRecipeId(Long id);

    @Modifying
    @Transactional 
    @Query("SELECT r FROM Recipe r WHERE r.title LIKE %:keyword%")
    List<Recipe> findByKeyword(@Param("keyword") String keyword);

 
    @Transactional
    @Query(value ="SELECT r.title AS title, r.description AS description FROM Recipe r WHERE r.title LIKE %:keyword%", nativeQuery = false)
    List<RecipeDTO> findRecipeDTOsByKeyword(@Param("keyword") String keyword);

}
