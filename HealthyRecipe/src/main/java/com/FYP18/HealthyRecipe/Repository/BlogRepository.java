package com.FYP18.HealthyRecipe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FYP18.HealthyRecipe.Entity.Blog;
import java.util.List;


public interface BlogRepository extends JpaRepository<Blog, Long>{
    
    // List<Blog> find
}
