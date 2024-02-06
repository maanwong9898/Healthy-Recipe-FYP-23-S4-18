package com.FYP18.HealthyRecipe.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
 

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

import com.FYP18.HealthyRecipe.DTO.PopularReviewRatingDTO;
import com.FYP18.HealthyRecipe.DTO.RecipeDTO;
import com.FYP18.HealthyRecipe.DTO.ReviewRatingDTO;
import com.FYP18.HealthyRecipe.DTO.UserInfoDTO; 
import com.FYP18.HealthyRecipe.Entity.Recipe;
import com.FYP18.HealthyRecipe.Entity.RecipeReviewRating;
import com.FYP18.HealthyRecipe.Entity.RecipeReviewRatingId;
import com.FYP18.HealthyRecipe.Entity.Categories.DietaryPreferences;
import com.FYP18.HealthyRecipe.Entity.Categories.MealType;
import com.FYP18.HealthyRecipe.Repository.RecipeRepository;
import com.FYP18.HealthyRecipe.Repository.RecipeReviewRatingRepository;
import com.FYP18.HealthyRecipe.Repository.UserRepository;

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
        recipe.setCreatedDT(LocalDate.now());
        recipe.setActive(true);
        if(recipe.getPublisher() == null)
        {  
            recipe.setPublisher(userRepo.findById(recipe.getUserID().getId()).get().getFullName());
        }
        return recipeRepository.save(recipe);
    }
  
    // i know its the same, i'm just separating in case
    public Recipe updateRecipe(Recipe recipe)
    {  

        if(recipe.getPublisher() == null)
        {  
            recipe.setPublisher(userRepo.findById(recipe.getUserID().getId()).get().getFullName());
        }

        recipe.setLastUpdatedDT(LocalDate.now());

        return recipeRepository.save(recipe);
    }

    public Recipe updateWithFile(Long id, MultipartFile file)
    {
       Recipe recipe = recipeRepository.findById(id).get();
       try{
            recipe.setImgBlob(file.getBytes());
       }
       catch(Exception e)
       {
            e.printStackTrace();
       }
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
    public List<Recipe> findRecipesByTitle(String keyword)
    {
        return recipeRepository.findRecipesByTitle(keyword);
    }
   
    public List<Recipe> findRecipesByIngredients(String keyword)
    {
        return recipeRepository.findRecipesByIngredients(keyword);
    }

    public List<Recipe> getRecipesByUserId(String userId)
    {   
        return recipeRepository.findByUserID(userId);
    }

    public Recipe getRecipeById(long id)
    {
        return recipeRepository.findById(id)
        .orElseThrow(()->  new RuntimeException("Recipe Id: "+ id + " is not found"));  
    }

    public List<RecipeDTO> getRecipeDTOs(String keyword)
    {
        return recipeRepository.findRecipeDTOsByKeyword(keyword);
    }
    
    public void deleteRecipeById(long id)
    {
        recipeRepository.deleteByRecipeId(id);
    }

    public List<RecipeDTO> getMostPopularRecipes()
    {
        List<PopularReviewRatingDTO> dto = recipeReviewRatingRepository.getMostPopularRecipes();
        List<Long> ids = new ArrayList<>();
        for(PopularReviewRatingDTO id : dto)
        {
            ids.add(id.getId());
        } 
        return recipeRepository.findRecipeDTOsByIds(ids);
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

    // public List<BlogReviewRating> getAllRatingsOfBlogId(Long blogId)
    // {
    //     List<BlogReviewRating> toReturn = blogReviewRatingRepository.findByBlogId(blogId);
    //    for(BlogReviewRating b: toReturn)
    //    {
        
    //     UserInfoDTO dto = userRepo.getUserInfoDTO(b.getBlogReviewRatingId().UserID);
    //     b.setUserDTO(dto);
    //    }
    //     return toReturn;
    // }
    
     @Autowired
    private UserRepository userRepo;

    public List<RecipeReviewRating> getAllRatingsOfRecipeId(Long recipeId)
    {   
        List<RecipeReviewRating> toReturn = recipeReviewRatingRepository.findByRecipeId(recipeId);
        for(RecipeReviewRating r: toReturn)
        {

            UserInfoDTO dto = userRepo.getUserInfoDTO(r.getRecipeReviewRatingId().UserID);
            r.setUserDTO(dto);
        }
        return toReturn;
    }

    // public ReviewRatingDTO findAvgByBlogId(Long blogId)
    // {
    //     return blogReviewRatingRepository.findAverageDTOByBlogId(blogId);
    // }

    public ReviewRatingDTO findAvgByRecipeId(Long recipeId)
    {
        return recipeReviewRatingRepository.findAverageDTOByRecipeId(recipeId);
    }


    public List<RecipeReviewRating> getAllRecipeReviewRating()
    {   
        return recipeReviewRatingRepository.findAll();
    }
    public void deleteReviewById(RecipeReviewRatingId id)
    {
        recipeReviewRatingRepository.deleteById(id);
    }
  
    public List<RecipeDTO> findRecipeDTOsByDietaryPreferences( DietaryPreferences dp)
    {
       return recipeRepository.findRecipeDTOsByDietaryPreferences(dp.getId());
    }
     
    public List<RecipeDTO> findRecipeDTOsByMealType( MealType dp)
    {
       return recipeRepository.findRecipeDTOsByMealType(dp.getId());
    }
    
}
