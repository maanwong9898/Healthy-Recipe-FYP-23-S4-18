package com.FYP18.HealthyRecipe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
 
import com.FYP18.HealthyRecipe.Entity.Blog; 

import java.util.List; 


public interface BlogRepository extends JpaRepository<Blog, Long>{
    
       
    @Modifying
    @Transactional
    @Query("DELETE FROM Blog b WHERE b.ID = :id")
    void deleteByBlogId(Long id);
 
    @Modifying
    @Transactional 
    @Query("SELECT r FROM Blog r WHERE r.title LIKE %:keyword%")
    List<Blog> findByKeyword(@Param("keyword") String keyword);

    @Modifying
    @Transactional 
    @Query("SELECT r FROM Blog r WHERE r.blogTypeId = :blogTypeId")
    List<Blog> findByBlogTypeId(Long blogTypeId);

    
 
    // @Modifying
    // @Transactional
    // @Query("SELECT b FROM Blog b WHERE b.ID = :id")
    // Blog findById(Long id);
    // @Modifying
    // @Transactional
    // @Query("SELECT b FROM Blog b WHERE b.userID = :id")
    // List<Blog> findByUserId(String id);

    @Query(value="SELECT COUNT(r) AS count FROM Blog r WHERE r.userID.id = :id")
    Integer findCountById(@Param("id") String id);

    @Query(value="SELECT COUNT(r) AS count FROM Blog r")
    Integer findTotalBlogCount();
    
    @Modifying
    @Transactional
    @Query("SELECT b FROM Blog b WHERE b.userID.id = :userId")
    List<Blog> findByUserID(String userId); 


    // @Query(value ="SELECT r.title AS title, r.id AS id, r.img AS img, r.introduction AS introduction FROM Blog r WHERE r.id IN :ids", nativeQuery = false)
    // List<Blog> findBlogDTOsByIds(@Param("ids") List<Long> ids);

    @Query(value= "SELECT b FROM Blog b WHERE b.blogTypeId = :blogType")
    List<Blog> findBlogByBlogType(Long blogType);
}

// Validation failed for query for method public abstract com.FYP18.HealthyRecipe.Entity.Blog com.FYP18.HealthyRecipe.Repository.BlogRepository.findByUserId(java.lang.Long)