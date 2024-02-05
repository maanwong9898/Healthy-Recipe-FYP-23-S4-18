package com.FYP18.HealthyRecipe.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.Entity.Recipe;
import com.FYP18.HealthyRecipe.Repository.MealPlanRepository;
import com.FYP18.HealthyRecipe.Repository.NutritionistRepository;
import com.FYP18.HealthyRecipe.Repository.RecipeRepository;


@Transactional
@Service   
public class NutritionistService {
    
    @Autowired
    private NutritionistRepository repo;

    @Autowired
    private MealPlanRepository mealPlanRepo;
    
    public Integer findMealPlanCountById(String userId)
    {
        return mealPlanRepo.findCountById(userId);
    }

    @Autowired
    private RecipeRepository recipeRepo;

    public Integer findAllActiveRecipesCount()
    {
        return recipeRepo.findAllActiveRecipesCount();
    }
    public List<Recipe> findAllActiveRecipes()
    {
        return recipeRepo.findAllActiveRecipes();
    }
 
 
}
