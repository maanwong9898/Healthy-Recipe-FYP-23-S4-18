package com.FYP18.HealthyRecipe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.DTO.MealPlanDTO;
import com.FYP18.HealthyRecipe.DTO.RecipeDTO;
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


    @Query(value ="SELECT r.title AS title, r.introduction AS introduction, r.id AS id, r.img AS img, r.publisher AS publisher FROM MealPlan r", nativeQuery = false)
    List<MealPlanDTO> findMealPlanDTOs();

    @Query(value ="SELECT r.title AS title, r.introduction AS introduction, r.id AS id, r.img AS img, r.publisher AS publisher FROM MealPlan r WHERE r.title LIKE %:keyword%", nativeQuery = false)
    List<MealPlanDTO> findMealPlanDTOsWithKeyword(@Param("keyword") String keyword);

    @Modifying 
    @Query("SELECT r FROM MealPlan r WHERE r.title LIKE %:keyword%")
    List<MealPlan> findByKeyword(@Param("keyword") String keyword);
    
    @Query(value="SELECT COUNT(r) AS count FROM MealPlan r WHERE r.userID.id = :id")
    Integer findCountById(@Param("id") String id);
    

    @Query(value="SELECT COUNT(r) AS count FROM MealPlan r")
    Integer findTotalMealPlanCount();
    
    final String getDTOQuery = "SELECT r.title AS title, r.id AS id, r.img AS img, r.introduction AS introduction, r.publisher AS publisher, r.active AS active FROM MealPlan r ";

    @Query(value =getDTOQuery + " WHERE r.id IN :ids AND r.active = TRUE", nativeQuery = false)
    List<MealPlanDTO> findMealPlanDTOsByIds(@Param("ids") List<Long> ids);

    @Query(value =getDTOQuery + " WHERE r.id NOT IN :ids AND r.active = TRUE ORDER BY r.createdDT DESC  LIMIT :count", nativeQuery = false)
    List<MealPlanDTO> findMealPlanDTOsExceptIds(@Param("ids") List<Long> ids, @Param("count") Integer count);

    @Query(value =getDTOQuery +" WHERE r.active = TRUE ORDER BY r.createdDT DESC  LIMIT 3", nativeQuery = false)
    List<MealPlanDTO> findLatestMealPlanDTO();

    @Query(value= getDTOQuery + " WHERE r.id NOT IN (:ids) AND r.active = TRUE ORDER BY r.createdDT DESC LIMIT :count")
    List<MealPlanDTO> findLatestMealPlanDTO(@Param("ids") List<Long> ids,@Param("count") Integer count);
 
    @Query(value= getDTOQuery + " WHERE r.active = TRUE ORDER BY r.createdDT DESC LIMIT :count")
    List<MealPlanDTO> findLatestMealPlanDTO(@Param("count") Integer count);

    @Query(value= getDTOQuery+ " WHERE r.healthGoalCategoryId = :healthGoalCategoryId AND r.active = TRUE")
    List<MealPlanDTO> getMealPlansWithHealthGoal(Long healthGoalCategoryId);
 
}
