package com.FYP18.HealthyRecipe.Service;

import java.nio.charset.StandardCharsets;
import java.util.Base64; 
import java.util.List;
import java.util.Optional; 

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
 
import com.FYP18.HealthyRecipe.Entity.Blog;
import com.FYP18.HealthyRecipe.Entity.EducationalContent;
import com.FYP18.HealthyRecipe.Entity.Recipe;
import com.FYP18.HealthyRecipe.Entity.RegisteredUser;
import com.FYP18.HealthyRecipe.Entity.Categories.*;
import com.FYP18.HealthyRecipe.Repository.BlogRepository;
import com.FYP18.HealthyRecipe.Repository.EducationalContentRepository;
import com.FYP18.HealthyRecipe.Repository.RecipeRepository;
import com.FYP18.HealthyRecipe.Repository.RegisteredUserRepository;
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
    

    @Autowired
    private RecipeRepository recipeRepo;

    @Autowired 
    private RegisteredUserRepository registeredUserRepo;
    public void deleteAllergy(long id)
    {   
        List<Recipe> recipe = recipeRepo.findRecipeWITHAllergies(id);
        Allergies allergy = allergiesRepo.findById(id).get();
        for(Recipe r: recipe)
        {
            r.getAllergies().remove(allergy);  
        } 
        List<RegisteredUser> list = registeredUserRepo.findByAllergies(id); 
        for(RegisteredUser ru: list)
        {
            ru.getAllergies().remove(allergy); 
        }
        recipeRepo.saveAll(recipe);
        registeredUserRepo.saveAll(list); 
        allergiesRepo.deleteById(id);  
    }

    @Autowired
    private BlogRepository blogRepo;
   
    public void deleteBlogPostCategory(long id)
    {  
        Optional<BlogPostCategory> al = blogPostCategoryRepo.findById(id) ; 
        if(al.isPresent())
        {
           List<Blog> list = blogRepo.findByBlogTypeId(id);
            for(Blog b: list)
            {
                b.setBlogTypeId(null);
                b.setBlogType(null);
            } 
            blogRepo.saveAll(list);
       
            blogPostCategoryRepo.delete(al.get());
        }  
    }
    public void deleteDietaryPreference(long id)
    {  
        Optional<DietaryPreferences> al = dietaryPreferenceRepo.findById(id) ; 
        if(al.isPresent())
        {
            List<Recipe> recipes = recipeRepo.findRecipeWITHDP(id);
            for(Recipe r: recipes)
            {
                r.setDietaryPreferencesId(null);
                r.setDietaryPreferences(null);
            }
            List<RegisteredUser> users  = registeredUserRepo.findByDP(id);
            for(RegisteredUser ru: users)
            {
                ru.setDietaryPreferencesId(null);
                ru.setDietaryPreferences(null);
            }
            registeredUserRepo.saveAll(users);

            recipeRepo.saveAll(recipes);
       
            dietaryPreferenceRepo.delete(al.get());
        }  
        dietaryPreferenceRepo.deleteById(id);  
    }

    @Autowired
    private EducationalContentRepository ecRepo;
    public void deleteEducationalContent(long id)
    {  
        List<EducationalContent> list = ecRepo.findByEducationalContentTypeId(id);
        for(EducationalContent ec : list)
        { 
            ec.setEducationalContentTypeId(null); 
            ec.setEducationalContentType(null);
        }
        ecRepo.saveAll(list); 
        educationalContentCategoryRepo.deleteById(id);  
    }
    public void deleteHealthGoal(long id)
    { 
        healthGoalRepo.deleteById(id);  
    }
     
    public void deleteMealType(long id)
    { 
        Optional<MealType> al = mealTypeRepo.findById(id) ; 
        if(al.isPresent())
        {
            List<Recipe> recipes = recipeRepo.findRecipeWITHMealType(id);
            for(Recipe r: recipes)
            {
                r.setMealTypeId(null);
                r.setMealType(null);
            }
            recipeRepo.saveAll(recipes);
            
            mealTypeRepo.delete(al.get());
        }   
    }

    public Allergies updateNewAllergy(Allergies allergy) throws Exception
    {     
        Allergies al = allergiesRepo.findById(allergy.getId()) 
                    .orElseThrow(()-> new Exception("Cant find allergy: " + allergy.getSubcategoryName()));
        
        // String encoded = encodeString(allergy.getSubcategoryName());  
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
    public String encodeString(String originalString) {
        byte[] encodedBytes = Base64.getEncoder().encode(originalString.getBytes(StandardCharsets.UTF_8));
        return new String(encodedBytes, StandardCharsets.UTF_8);
    }

    public String decodeString(String encodedString) {
        
        byte[] decodedBytes = Base64.getDecoder().decode(encodedString.getBytes(StandardCharsets.UTF_8));
        return new String(decodedBytes, StandardCharsets.UTF_8);
    }
    
    // the rest can only read 
    @Transactional(readOnly = true)
    public List<Allergies> getAllAllergies()
    {
        List<Allergies> toReturn = allergiesRepo.findAll();
        for(Allergies al: toReturn)
        {   
            al.setSubcategoryName(al.getSubcategoryName());
        }
        return toReturn;
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
