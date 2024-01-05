package com.FYP18.HealthyRecipe.Service;

import java.util.List;

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
        // Allergies find = allergiesRepo.find
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

    public void deleteAllergy(Allergies allergies) throws Exception
    {
        Allergies al = allergiesRepo.findById(allergies.getId()) 
                        .orElseThrow(()-> new Exception("Cant find allergy: " + allergies.getSubcategoryName()));

        allergiesRepo.delete(al);
    }
    public void deleteBlogPostCategory(BlogPostCategory healthGoal)throws Exception
    {
         BlogPostCategory al = blogPostCategoryRepo.findById(healthGoal.getId()) 
                        .orElseThrow(()-> new Exception("Cant find BlogPostCategory: " + healthGoal.getSubcategoryName()));

        blogPostCategoryRepo.delete(al);

    }
    public void deleteDietaryPreference(DietaryPreferences healthGoal)throws Exception
    {
         DietaryPreferences al =  dietaryPreferenceRepo.findById(healthGoal.getId()) 
                        .orElseThrow(()-> new Exception("Cant find DietaryPreferences: " + healthGoal.getSubcategoryName()));

        dietaryPreferenceRepo.delete(al);
    }
    public void deleteEducationalContent(EducationalContentCategory healthGoal)throws Exception
    {
        EducationalContentCategory al =  educationalContentCategoryRepo.findById(healthGoal.getId()) 
                                .orElseThrow(()-> new Exception("Cant find EducationalContentCategory: " + healthGoal.getSubcategoryName()));

        educationalContentCategoryRepo.delete(al);
    }
    public void deleteHealthGoal(HealthGoal healthGoal)throws Exception
    {
         HealthGoal al =  healthGoalRepo.findById(healthGoal.getId())
                        .orElseThrow(()-> new Exception("Cant find HealthGoal: " + healthGoal.getSubcategoryName()));

        healthGoalRepo.delete(al);
    }

    public void deleteAllergy(long id)
    { 
        allergiesRepo.deleteById(id);  
    }
    public void deleteBlogPostCategory(long id)
    { 
        blogPostCategoryRepo.deleteById(id);  
    }
    public void deleteDietaryPreference(long id)
    { 
        dietaryPreferenceRepo.deleteById(id);  
    }
    public void deleteEducationalContent(long id)
    { 
        educationalContentCategoryRepo.deleteById(id);  
    }
    public void deleteHealthGoal(long id)
    { 
        healthGoalRepo.deleteById(id);  
    }
    

    public Allergies updateNewAllergy(Allergies allergy) throws Exception
    {     
        Allergies al = allergiesRepo.findById(allergy.getId()) 
                    .orElseThrow(()-> new Exception("Cant find allergy: " + allergy.getSubcategoryName()));
        
        al.setSubcategoryName(allergy.getSubcategoryName());

        return allergiesRepo.save(al);
    }

    public BlogPostCategory updateBlogPostCategory(BlogPostCategory allergy) throws Exception
    {
        BlogPostCategory blogPost = blogPostCategoryRepo.findById(allergy.getId()) 
                    .orElseThrow(()-> new Exception("Cant find BlogPostCategory: " + allergy.getSubcategoryName()));
        
        blogPost.setSubcategoryName(allergy.getSubcategoryName());
        return blogPostCategoryRepo.save(blogPost);
    }

    public DietaryPreferences updateDietaryPreferences(DietaryPreferences allergy) throws Exception
    {
        DietaryPreferences al = dietaryPreferenceRepo.findById(allergy.getId()) 
                    .orElseThrow(()-> new Exception("Cant find DietaryPreferences: " + allergy.getSubcategoryName()));
        
        al.setSubcategoryName(allergy.getSubcategoryName());
        return dietaryPreferenceRepo.save(al);
    }

    public EducationalContentCategory updateEducationalContentCategory(EducationalContentCategory allergy) throws Exception
    {
        EducationalContentCategory al = educationalContentCategoryRepo.findById(allergy.getId()) 
                    .orElseThrow(()-> new Exception("Cant find EducationalContentCategory: " + allergy.getSubcategoryName()));
        
        al.setSubcategoryName(allergy.getSubcategoryName());
        return educationalContentCategoryRepo.save(al);
    }

    public HealthGoal updateHealthGoal(HealthGoal allergy) throws Exception
    {
        HealthGoal al = healthGoalRepo.findById(allergy.getId()) 
                    .orElseThrow(()-> new Exception("Cant find HealthGoal: " + allergy.getSubcategoryName()));
        
        al.setSubcategoryName(allergy.getSubcategoryName());
        return healthGoalRepo.save(al);
    }


    
    // the rest can only read 
    public List<Allergies> getAllAllergies()
    {
        return allergiesRepo.findAll();
    }

    public List<BlogPostCategory> getAllBlogPostCategories()
    {
        return blogPostCategoryRepo.findAll();
    }

    public List<DietaryPreferences> getAllDietaryPreferences()
    {
        return dietaryPreferenceRepo.findAll();
    }
    
    public List<EducationalContentCategory> getAllEducationalContentCategories()
    {
        return educationalContentCategoryRepo.findAll();
    }
    
    public List<HealthGoal> getAllHealthGoals()
    {
        return healthGoalRepo.findAll();
    }

}
