package com.FYP18.HealthyRecipe.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FYP18.HealthyRecipe.DTO.MealPlanDTO;
import com.FYP18.HealthyRecipe.DTO.PopularReviewRatingDTO;
import com.FYP18.HealthyRecipe.DTO.RecipeDTO;
import com.FYP18.HealthyRecipe.DTO.RoleCountRequest;
import com.FYP18.HealthyRecipe.Entity.Blog;
import com.FYP18.HealthyRecipe.Entity.EducationalContent;
import com.FYP18.HealthyRecipe.Entity.Categories.BlogPostCategory;
import com.FYP18.HealthyRecipe.Entity.Categories.DietaryPreferences;
import com.FYP18.HealthyRecipe.Entity.Categories.MealType;
import com.FYP18.HealthyRecipe.Repository.MealPlanRepository;
import com.FYP18.HealthyRecipe.Repository.MealPlanReviewRatingRepository;
import com.FYP18.HealthyRecipe.Service.BlogService;
import com.FYP18.HealthyRecipe.Service.EducationalContentService;
import com.FYP18.HealthyRecipe.Service.LandingPageService;
import com.FYP18.HealthyRecipe.Service.MealPlanService;
import com.FYP18.HealthyRecipe.Service.RecipeService;
 
@RestController
@CrossOrigin()
@RequestMapping(value = "/landingPage")
public class LandingPage {
     
   @Autowired 
   private LandingPageService service;
   
    @GetMapping("/getPopularMealPlans")
    public List<MealPlanDTO> getMostPopularMealPlans()
    {
        return service.getPopularMealPlans();
    }
    

    @GetMapping("/getRoleCount")
    public List<RoleCountRequest> getRoleCount()
    {
        return service.getRoleCount();
    }

    @Autowired 
    private EducationalContentService educationalContentService;

    @GetMapping("/getMostPopularEducationalContents")
    public List<EducationalContent> getMostPopularEducationalContents()
    {
        return educationalContentService.getMostPopularEducationalContents();
    }
 
    @Autowired
    private BlogService blogService;
    
    @GetMapping("/getMostPopularBlogs")
    public List<Blog> getMostPopularBlogs()
    {
        return blogService.getMostPopularBlogs();
    } 

    @GetMapping("/findBlogByBlogType")
    public List<Blog> findBlogByBlogType(@RequestBody BlogPostCategory id)
    {
        return blogService.findBlogByBlogType(id);
    }
    @Autowired
    private RecipeService recipeService;

    @GetMapping("/getMostPopularRecipes")
    public List<RecipeDTO> getMostPopularRecipes()
    {
        return recipeService.getMostPopularRecipes();
    }

     @GetMapping("/findRecipeDTOsByDietaryPreferences")
    public List<RecipeDTO> findRecipeDTOsByDietaryPreferences(@RequestBody DietaryPreferences dp)
    {
       return recipeService.findRecipeDTOsByDietaryPreferences(dp);
    }
    
    @GetMapping("/findRecipeDTOsByMealType")
    public List<RecipeDTO> findRecipeDTOsByMealType(@RequestBody MealType dp)
    {
       return recipeService.findRecipeDTOsByMealType(dp);
    }
    
}
