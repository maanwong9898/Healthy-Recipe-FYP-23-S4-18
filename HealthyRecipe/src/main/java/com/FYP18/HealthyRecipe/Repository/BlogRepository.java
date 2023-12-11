package com.FYP18.HealthyRecipe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.Entity.Blog;
import com.FYP18.HealthyRecipe.Entity.User;

import java.util.List;


public interface BlogRepository extends JpaRepository<Blog, Long>{
    
       
    @Modifying
    @Transactional
    @Query("DELETE FROM Blog b WHERE b.ID = :id")
    void deleteByBlogId(Long id);

    // @Modifying
    // @Transactional
    // @Query("SELECT b FROM Blog b WHERE b.userID.id = :id.")
    // List<Blog> findByUserId(User id);

    // List<Blog> findByUserID(User userID);
}

// Validation failed for query for method public abstract com.FYP18.HealthyRecipe.Entity.Blog com.FYP18.HealthyRecipe.Repository.BlogRepository.findByUserId(java.lang.Long)