package com.FYP18.HealthyRecipe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

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

    // @Modifying
    // @Transactional
    // @Query("SELECT b FROM Blog b WHERE b.ID = :id")
    // Blog findById(Long id);
    // @Modifying
    // @Transactional
    // @Query("SELECT b FROM Blog b WHERE b.userID = :id")
    // List<Blog> findByUserId(String id);

    @Modifying
    @Transactional
    @Query("SELECT b FROM EducationalContent b WHERE b.userID.id = :userId")
    List<EducationalContent> findByUserID(String userId);
}

// Validation failed for query for method public abstract
// com.FYP18.HealthyRecipe.Entity.Blog
// com.FYP18.HealthyRecipe.Repository.BlogRepository.findByUserId(java.lang.Long)