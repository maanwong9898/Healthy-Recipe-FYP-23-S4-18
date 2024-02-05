package com.FYP18.HealthyRecipe.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
 
import com.FYP18.HealthyRecipe.Repository.BlogRepository;
import com.FYP18.HealthyRecipe.Repository.EducationalContentRepository;
import com.FYP18.HealthyRecipe.Repository.RecipeRepository;

@Transactional
@Service  
public class BusinessUserService {
    
    @Autowired
    private RecipeRepository recipeRepo;

    @Autowired
    private BlogRepository blogRepo;

    @Autowired
    private EducationalContentRepository eduCoRepo;

    public Integer findRecipeCountById(String userId)
    {
        return recipeRepo.findCountById(userId);
    }
   
    public Integer findBlogCountById(String userId)
    {
        return blogRepo.findCountById(userId);
    }

    public Integer findEduCountById(String userId)
    {
        return eduCoRepo.findCountById(userId);
    }
}
