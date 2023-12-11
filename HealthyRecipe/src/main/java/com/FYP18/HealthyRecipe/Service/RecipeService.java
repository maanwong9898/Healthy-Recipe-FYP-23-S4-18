package com.FYP18.HealthyRecipe.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FYP18.HealthyRecipe.Entity.Blog;
import com.FYP18.HealthyRecipe.Entity.Recipe;
import com.FYP18.HealthyRecipe.Repository.RecipeRepository;

@Service  
public class RecipeService {
    
    @Autowired
    public RecipeRepository recipeRepository;
    
    // create, read all, read 1, update, delete for Recipe and review Ratings

    public Recipe createRecipe(Recipe recipe)
    {  
        // create on default haiz
        recipe.setActive(true);
        return recipeRepository.save(recipe);
    }


    // i know its the same, i'm just separating in case
    public Recipe updateRecipe(Recipe recipe)
    {  
        return recipeRepository.save(recipe);
    }
    
    public List<Recipe> getAllRecipes()
    {
        return recipeRepository.findAll();
    }
    // in title nia, i might needa 
    public List<Recipe> getKeywordsOfRecipe(String keyword)
    {
        return recipeRepository.findByKeyword(keyword);
    }
   
    public List<Recipe> getRecipesByUserId(String userId)
    {   
        return recipeRepository.findByUserID(userId);
    }
    
    public void deleteRecipeById(long id)
    {
        recipeRepository.deleteById(id);
    }
}
