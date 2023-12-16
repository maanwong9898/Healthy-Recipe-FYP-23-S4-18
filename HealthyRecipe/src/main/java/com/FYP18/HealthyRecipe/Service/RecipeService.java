package com.FYP18.HealthyRecipe.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import javax.management.RuntimeErrorException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
import org.springframework.stereotype.Service;
 
import com.FYP18.HealthyRecipe.Entity.Recipe;
import com.FYP18.HealthyRecipe.Entity.RecipeReviewRating;
import com.FYP18.HealthyRecipe.Entity.RecipeReviewRatingId;
import com.FYP18.HealthyRecipe.Repository.RecipeRepository;
import com.FYP18.HealthyRecipe.Repository.RecipeReviewRatingRepository;

@Service  
public class RecipeService {
    
    @Autowired
    private RecipeRepository recipeRepository;
    
    @Autowired
    private RecipeReviewRatingRepository recipeReviewRatingRepository;
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


    // this is limited to system admin and also the owner of the recipe
    public Recipe updateRecipeActivity(Recipe recipe)
    {
        // hence the parameter should give in user's role + id of the recipe
        
        // .. or i should check for the roles in controllers idk..?
        Recipe toUpdate = recipeRepository.findById(recipe.getId())

        .orElseThrow(()->  new RuntimeException("Recipe Id: "+ recipe.getId() + " is not found"));  

        toUpdate.setActive(recipe.getActive());

        return recipeRepository.save(toUpdate);
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
        recipeRepository.deleteByRecipeId(id);
    }
 
    //- rating's Create, Update, Read, Delete
    
    public RecipeReviewRating createRating(RecipeReviewRating recipeReviewRating)
    {   
        recipeReviewRating.setCreatedDateTime(LocalDateTime.now());
        return recipeReviewRatingRepository.save(recipeReviewRating);
    }
 
     public RecipeReviewRating updateRating(RecipeReviewRating recipeReviewRating)
    {  
        // RecipeReviewRating toUpdate = recipeReviewRatingRepository.findById(recipeReviewRating.getRecipeReviewRatingId()).get();
        recipeReviewRating.setLastUpdatedDateTime(LocalDateTime.now());
        return recipeReviewRatingRepository.save(recipeReviewRating);
    }
      
    public List<RecipeReviewRating> getAllRecipeReviewRatingOfUserId(String userId)
    {   
        return recipeReviewRatingRepository.findByUserID(userId);
    }
    
    public List<RecipeReviewRating> getAllRecipeReviewRating()
    {   
        return recipeReviewRatingRepository.findAll();
    }
    public void deleteReviewById(RecipeReviewRatingId id)
    {
        recipeReviewRatingRepository.deleteById(id);
    }

    
    
}
