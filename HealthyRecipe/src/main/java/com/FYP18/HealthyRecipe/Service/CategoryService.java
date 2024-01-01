package com.FYP18.HealthyRecipe.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.Entity.Categories.*;
import com.FYP18.HealthyRecipe.Repository.Categories.*;
@Transactional 
@Service
public class CategoryService {
    
    @Autowired
    private AllergiesRepo allergiesRepo;
 
    @Autowired
    private BlogPostCategoryRepo blogPostCategoryRepo;
 
    @Autowired
    private DietaryPreferenceRepo dietaryPreferenceRepo;
 
    @Autowired
    private EducationalContentCategoryRepo educationalContentCategoryRepo;
 
    @Autowired
    private HealthGoalRepo healthGoalRepo;

    
    //Only System admin can edit, add, remove


    public Allergies createNewAllergy(Allergies allergy)
    {
        return allergiesRepo.save(allergy);
    }

    public BlogPostCategory createNewBlogPostCategory(BlogPostCategory allergy)
    {
        return blogPostCategoryRepo.save(allergy);
    }

    public DietaryPreferences createNewDietaryPreferences(DietaryPreferences allergy)
    {
        return dietaryPreferenceRepo.save(allergy);
    }

    public EducationalContentCategory createNewEducationalContentCategory(EducationalContentCategory allergy)
    {
        return educationalContentCategoryRepo.save(allergy);
    }

    public HealthGoal createNewHealthGoal(HealthGoal allergy)
    {
        return healthGoalRepo.save(allergy);
    }


    // the rest can only read

}
