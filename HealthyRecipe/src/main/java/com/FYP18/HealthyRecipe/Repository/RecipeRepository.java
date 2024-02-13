package com.FYP18.HealthyRecipe.Repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.DTO.RecipeDTO;
import com.FYP18.HealthyRecipe.Entity.Recipe;
import com.FYP18.HealthyRecipe.Entity.User;
import com.FYP18.HealthyRecipe.Entity.Categories.DietaryPreferences;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.util.List;
import java.util.Set;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {

    @Modifying
    @Transactional
    @Query("SELECT b FROM Recipe b WHERE b.userID.id = :userId")
    List<Recipe> findByUserID(String userId);

    @Modifying
    @Transactional
    @Query("DELETE FROM Recipe b WHERE b.ID = :id")
    void deleteByRecipeId(Long id);

    @Query("SELECT r from Recipe r WHERE r.active = true")
    List<Recipe> findAllActiveRecipes();

    @Query("SELECT Count(r) from Recipe r WHERE r.active = true")
    Integer findAllActiveRecipesCount();

    @Modifying
    @Transactional
    @Query("SELECT r FROM Recipe r WHERE r.title LIKE %:keyword%")
    List<Recipe> findRecipesByTitle(@Param("keyword") String keyword);

    @Modifying
    @Transactional
    @Query("SELECT r FROM Recipe r WHERE r.ingredients LIKE %:keyword%")
    List<Recipe> findRecipesByIngredients(@Param("keyword") String keyword);

    final String getDTOQuery         = "SELECT r.title AS title, r.publisher AS publisher, r.description AS description, r.id AS id, r.img AS img, r.calories AS calories, r.protein AS protein, r.fat AS fat, r.fibre AS fibre, r.sodium AS sodium, r.carbs AS carbs FROM Recipe r ";
    final String getDistinctDTOQuery = "SELECT DISTINCT r.title as title, r.publisher AS publisher, r.description AS description, r.id AS id, r.img AS img, r.calories AS calories, r.protein AS protein, r.fat AS fat, r.fibre AS fibre, r.sodium AS sodium, r.carbs AS carbs FROM Recipe r ";


    @Transactional
    @Query(value =  getDTOQuery + " WHERE r.title LIKE %:keyword%", nativeQuery = false) 
    List<RecipeDTO> findRecipeDTOsByKeyword(@Param("keyword") String keyword);

    @Query(value = getDTOQuery + " WHERE r.id IN :ids", nativeQuery = false)
    List<RecipeDTO> findRecipeDTOsByIds(@Param("ids") List<Long> ids);

    @Query(value = "SELECT COUNT(r) AS count FROM Recipe r WHERE r.userID.id = :id")
    Integer findCountById(@Param("id") String id);
  
    @Query(value="SELECT COUNT(r) AS count FROM Recipe r")
    Integer findTotalRecipeCount();
    
    
    @Query(value =  getDTOQuery + " WHERE r.dietaryPreferencesId = :dp")
    List<RecipeDTO> findRecipeDTOsByDietaryPreferences(Long dp);
    
    @Query(value = getDTOQuery + " WHERE r.mealTypeId = :mealType")
    List<RecipeDTO> findRecipeDTOsByMealType(Long mealType);
     
    @Query(value =  getDistinctDTOQuery + " JOIN r.allergies al WHERE al.allergy_id NOT IN (:allergies) AND r.dietaryPreferencesId = :dp")
    List<RecipeDTO> findRecipeDTOsByAllergiesAndDP(@Param("allergies") Set<Long> allergies, @Param("dp") Long dp);


    @Query(value = getDistinctDTOQuery + " JOIN r.allergies al WHERE al.id NOT IN (:allergies)")
    List<RecipeDTO> findRecipeDTOsByAllergies(@Param("allergies") Set<Long> allergies);

    // @Query(value = "SELECT DISTINCT r.title as title, r.publisher AS publisher, r.description AS description, r.id AS id, r.img AS img, r.calories AS calories, r.protein AS protein, r.fat AS fat, r.fibre AS fibre, r.sodium AS sodium, r.carbs AS carbs "
    // + "FROM Recipe r JOIN r.allergies al WHERE al.id NOT IN (:allergies) AND r.dietaryPreferencesId = :dp  LIMIT :count")
    // List<RecipeDTO> findRecipeDTOsByAllergiesAndDP(@Param("allergies") Set<Long> allergies, @Param("dp") Long dp, Integer count);

    // SELECT id FROM RECIPE WHERE id NOT IN (1) ORDER BY RAND() LIMIT 3;

    @Query(value= getDistinctDTOQuery + " WHERE r.id NOT IN (:ids) ORDER BY RAND() LIMIT :count")
    List<RecipeDTO> findRandomRecipes(@Param("ids") List<Long> ids, Integer count);
 
    @Query(value= getDistinctDTOQuery + " ORDER BY RAND() LIMIT :count")
    List<RecipeDTO> findRandomRecipes(Integer count);

    @Query(value= getDistinctDTOQuery + " WHERE r.id NOT IN (:ids) ORDER BY r.createdDT LIMIT :count")
    List<RecipeDTO> findLatestRecipe(@Param("ids") List<Long> ids,@Param("count") Integer count);
 
    @Query(value= getDistinctDTOQuery + " ORDER BY r.createdDT")
    List<RecipeDTO> findLatestRecipe(@Param("count") Integer count);
    

    @Query(value = getDTOQuery)
    Page<RecipeDTO> findRecipesOfPage(Pageable pageable); 
}
