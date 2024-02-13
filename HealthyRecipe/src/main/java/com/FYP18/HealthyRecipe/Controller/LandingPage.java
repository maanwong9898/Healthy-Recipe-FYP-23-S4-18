package com.FYP18.HealthyRecipe.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.FYP18.HealthyRecipe.DTO.BlogDTO;
import com.FYP18.HealthyRecipe.DTO.EduCoDTO;
import com.FYP18.HealthyRecipe.DTO.MealPlanDTO;
import com.FYP18.HealthyRecipe.DTO.PopularReviewRatingDTO;
import com.FYP18.HealthyRecipe.DTO.RecipeDTO;
import com.FYP18.HealthyRecipe.DTO.RoleCountRequest;
import com.FYP18.HealthyRecipe.Entity.Blog;
import com.FYP18.HealthyRecipe.Entity.EducationalContent;
import com.FYP18.HealthyRecipe.Entity.Recipe;
import com.FYP18.HealthyRecipe.Entity.Categories.BlogPostCategory;
import com.FYP18.HealthyRecipe.Entity.Categories.DietaryPreferences;
import com.FYP18.HealthyRecipe.Entity.Categories.MealType;
import com.FYP18.HealthyRecipe.Repository.MealPlanRepository;
import com.FYP18.HealthyRecipe.Repository.MealPlanReviewRatingRepository;
import com.FYP18.HealthyRecipe.Repository.RecipeRepository;
import com.FYP18.HealthyRecipe.Service.BlogService;
import com.FYP18.HealthyRecipe.Service.EducationalContentService;
import com.FYP18.HealthyRecipe.Service.LandingPageService; 
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
        return service.getMostPopularMealPlans();
    }
    

    @GetMapping("/getRoleCount")
    public List<RoleCountRequest> getRoleCount()
    {
        return service.getRoleCount();
    }

    // @Autowired 
    // private EducationalContentService educationalContentService;

    @GetMapping("/getMostPopularEducationalContents")
    public List<EduCoDTO> getMostPopularEducationalContents()
    {
        return service.getMostPopularEducationalContents();
    }
 
    @Autowired
    private BlogService blogService;
    
    @GetMapping("/getMostPopularBlogs")
    public List<BlogDTO> getMostPopularBlogs()
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
     
    @GetMapping("/getPage")
    public Page<RecipeDTO> findRecipePages(@RequestParam(defaultValue = "0") int page, 
                                        @RequestParam(defaultValue = "20") int size)
    {    
        return recipeService.findRecipePages(page, size);
    }

}
