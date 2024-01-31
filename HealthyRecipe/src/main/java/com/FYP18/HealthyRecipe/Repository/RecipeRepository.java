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
    List<Recipe> findRecipesByTitle(@Param("keyword") String keyword);

    @Modifying
    @Transactional 
    @Query("SELECT r FROM Recipe r WHERE r.ingredients LIKE %:keyword%")
    List<Recipe> findRecipesByIngredients(@Param("keyword") String keyword);

 
    @Transactional
    @Query(value ="SELECT r.title AS title, r.description AS description, r.id AS id, r.img AS img, r.calories AS calories, r.protein AS protein, r.fat AS fat, r.fibre AS fibre, r.sodium AS sodium, r.carbs AS carbs FROM Recipe r WHERE r.title LIKE %:keyword%", nativeQuery = false)
    // @Query(value ="SELECT r.title AS title, r.description AS description FROM Recipe r WHERE r.title LIKE %:keyword%", nativeQuery = false)
    List<RecipeDTO> findRecipeDTOsByKeyword(@Param("keyword") String keyword);

}
