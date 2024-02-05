package com.FYP18.HealthyRecipe.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FYP18.HealthyRecipe.Entity.Recipe;
import com.FYP18.HealthyRecipe.Repository.MealPlanRepository;
import com.FYP18.HealthyRecipe.Repository.NutritionistRepository;
import com.FYP18.HealthyRecipe.Service.NutritionistService;
 
@RestController
@CrossOrigin()
@RequestMapping(value = "/nutritionist") 
public class NutritionistController {
    
  
    @Autowired 
    private NutritionistService service;

    @GetMapping("/findMealPlanCountById/{userId}")
    public Integer findMealPlanCountById(@PathVariable("userId") String userId)
    { 
        return service.findMealPlanCountById(userId);
    } 
    @GetMapping("/findRecipeCount")
    public Integer findRecipeCount()
    {
        return service.findAllActiveRecipesCount();
    }
    @GetMapping("/findAllActiveRecipes")
    public List<Recipe> findAllActiveRecipes()
    {
        return service.findAllActiveRecipes();
    }
    

}
