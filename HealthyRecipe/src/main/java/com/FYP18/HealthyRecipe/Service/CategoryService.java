package com.FYP18.HealthyRecipe.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.Entity.Blog;
import com.FYP18.HealthyRecipe.Entity.Categories.*;
import com.FYP18.HealthyRecipe.Repository.BlogRepository;
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
 
    @Autowired
    private MealTypeRepo mealTypeRepo;
    
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
 
    public MealType createNewMealType(MealType mealType)
    {
        return mealTypeRepo.save(mealType);
    }
    

    public void deleteAllergy(long id)
    { 
        allergiesRepo.deleteById(id);  
    }

    @Autowired
    private BlogRepository blogRepo;
   
    public void deleteBlogPostCategory(long id)
    { 

        Optional<BlogPostCategory> al = blogPostCategoryRepo.findById(id) ;
                                // 
        
        if(al.isPresent())
        {
           List<Blog> list = blogRepo.findByBlogTypeId(id);
            for(Blog b: list)
            {
                b.setBlogTypeId(null);
            }
            System.out.println("FOUND: " +list.size());
            blogRepo.saveAll(list);
       
            blogPostCategoryRepo.delete(al.get());
        } 
        else
        {
            System.out.println("FOUND: EMPTY");

        }
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
    
    public void deleteMealType(long id)
    {
        mealTypeRepo.deleteById(id);
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

    public MealType updateMealType(MealType _mealType) throws Exception
    {
        MealType mealType = mealTypeRepo.findById(_mealType.getId())
                            .orElseThrow(()-> new Exception("Can't find Meal Type: " + _mealType.getSubcategoryName()));

        mealType.setSubcategoryName(_mealType.getSubcategoryName());
        return mealTypeRepo.save(mealType);
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
    public List<MealType> getAllMealTypes()
    {
        return mealTypeRepo.findAll();
    }

}
