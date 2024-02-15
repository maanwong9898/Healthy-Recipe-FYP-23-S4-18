package com.FYP18.HealthyRecipe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.DTO.BlogDTO;
import com.FYP18.HealthyRecipe.DTO.EduCoDTO;
import com.FYP18.HealthyRecipe.DTO.MealPlanDTO;
import com.FYP18.HealthyRecipe.Entity.EducationalContent;
import com.FYP18.HealthyRecipe.Entity.Recipe;
import com.FYP18.HealthyRecipe.Entity.User;

import java.util.List;
import java.util.Optional;

public interface EducationalContentRepository extends JpaRepository<EducationalContent, Long> {

    @Modifying
    @Transactional
    @Query("DELETE FROM EducationalContent b WHERE b.ID = :id")
    void deleteByEducationalContentId(Long id);

    @Modifying
    @Transactional
    @Query("SELECT r FROM EducationalContent r WHERE r.title LIKE %:keyword%")
    List<EducationalContent> findByKeyword(@Param("keyword") String keyword);

    @Modifying
    @Transactional
    @Query("SELECT r FROM EducationalContent r WHERE r.educationalContentTypeId = :educationalContentTypeId")
    List<EducationalContent> findByEducationalContentTypeId(Long educationalContentTypeId);

    @Query(value="SELECT COUNT(r) AS count FROM EducationalContent r WHERE r.userID.id = :id")
    Integer findCountById(@Param("id") String id);

    // @Modifying
    // @Transactional
    // @Query("SELECT b FROM Blog b WHERE b.ID = :id")
    // Blog findById(Long id);
    // @Modifying
    // @Transactional
    // @Query("SELECT b FROM Blog b WHERE b.userID = :id")
    // List<Blog> findByUserId(String id);

    @Query(value="SELECT COUNT(r) AS count FROM EducationalContent r")
    Integer findTotalEducationalContentCount();
    
    @Modifying
    @Transactional
    @Query("SELECT b FROM EducationalContent b WHERE b.userID.id = :userId")
    List<EducationalContent> findByUserID(String userId);

    final String getDTO = "SELECT r.active, r.title AS title, r.id AS id, r.img AS img, SUBSTRING_INDEX(SUBSTRING_INDEX(r.info, ' ', 500), ' ', 50) AS introduction, r.publisher AS publisher FROM EducationalContent r ";

    @Query(value= getDTO 
    + " WHERE r.active = TRUE ORDER BY r.createdDateTime LIMIT 3", nativeQuery = false)
    List<EduCoDTO> findLatestEduCoDTO();

    @Query(value= getDTO 
    + " WHERE  r.active = TRUE AND r.id NOT IN (:ids) ORDER BY r.createdDateTime LIMIT :count")
    List<EduCoDTO> findLatestEduCoDTO(@Param("ids") List<Long> ids,@Param("count") Integer count);
 
    @Query(value= getDTO  + " WHERE r.active = TRUE ORDER BY r.createdDateTime LIMIT :count")
    List<EduCoDTO> findLatestEduCoDTO(@Param("count") Integer count);

    @Query(value= getDTO 
    + "WHERE r.id IN :ids AND r.active = TRUE")
    List<EduCoDTO> findEduCoDTOsByIds(@Param("ids") List<Long> ids);
}
 