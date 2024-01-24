package com.FYP18.HealthyRecipe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.DTO.MealPlanDTO;
import com.FYP18.HealthyRecipe.Entity.MealPlan;
import java.util.List;

@Transactional
@Repository
public interface MealPlanRepository extends JpaRepository<MealPlan,Long> {
    
    @Modifying 
    @Query("DELETE FROM MealPlan b WHERE b.ID = :id")
    void deleteByMealPlanId(Long id);

    @Modifying 
    @Query("SELECT b FROM MealPlan b WHERE b.userID.id = :userId")
    List<MealPlan> findByUserID(String userId);


    @Query(value ="SELECT r.title AS title, r.introduction AS introduction, r.id AS id, r.img AS img FROM MealPlan r", nativeQuery = false)
    List<MealPlanDTO> findMealPlanDTOs();

    @Query(value ="SELECT r.title AS title, r.introduction AS introduction, r.id AS id, r.img AS img FROM MealPlan r WHERE r.title LIKE %:keyword%", nativeQuery = false)
    List<MealPlanDTO> findMealPlanDTOsWithKeyword(@Param("keyword") String keyword);

    @Modifying 
    @Query("SELECT r FROM MealPlan r WHERE r.title LIKE %:keyword%")
    List<MealPlan> findByKeyword(@Param("keyword") String keyword);
   
}
