package com.FYP18.HealthyRecipe.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.DTO.MealPlanDTO;
import com.FYP18.HealthyRecipe.DTO.ReviewRatingDTO;
import com.FYP18.HealthyRecipe.DTO.UserInfoDTO;
import com.FYP18.HealthyRecipe.Entity.MealPlan;
import com.FYP18.HealthyRecipe.Entity.MealPlanReviewRating;
import com.FYP18.HealthyRecipe.Entity.Recipe;
import com.FYP18.HealthyRecipe.Entity.RecipeReviewRating;
import com.FYP18.HealthyRecipe.Entity.RecipeReviewRatingId;
import com.FYP18.HealthyRecipe.Repository.MealPlanRepository;
import com.FYP18.HealthyRecipe.Repository.RecipeRepository;
import com.FYP18.HealthyRecipe.Repository.RecipeReviewRatingRepository;
import com.FYP18.HealthyRecipe.Repository.UserRepository;
import com.FYP18.HealthyRecipe.Repository.MealPlanReviewRatingRepository;
import com.FYP18.HealthyRecipe.Entity.MealPlanReviewRatingId;

@Transactional
@Service  
public class MealPlanService {

    @Autowired
    private MealPlanRepository repo;

    @Autowired
    private MealPlanReviewRatingRepository mealPlanReviewRatingRepository;

    public MealPlan createMealPlan(MealPlan mealPlan)
    {   

        Set<Recipe> toUpdate = new HashSet<>();

        for(Recipe r : mealPlan.getRecipes())
        {
            // we doing this so it doesnt accidentally update the recipe on accident.
            Optional<Recipe> recipe =  recipeRepository.findById(r.getId());
            if(recipe.isPresent())
                toUpdate.add(recipe.get());
        }
        mealPlan.setRecipes(toUpdate);
        mealPlan.setCreatedDT(LocalDate.now());
        mealPlan.setActive(true);
        return repo.save(mealPlan);
    }
 

    public List<MealPlan> findAllMealPlan()
    {
        return repo.findAll();
    }
       
    public void deleteMealPlanById(long id)
    {
        repo.deleteByMealPlanId(id);
    }
    @Autowired
    private RecipeRepository recipeRepository;

    public MealPlan updateMealPlan(MealPlan mealPlan)
    {  
        mealPlan.setLastUpdatedDT(LocalDate.now());

        Set<Recipe> toUpdate = new HashSet<>();

        for(Recipe r : mealPlan.getRecipes())
        {
            // we doing this so it doesnt accidentally update the recipe on accident.
            Recipe recipe =  recipeRepository.findById(r.getId()).get();
            toUpdate.add(recipe);
        }
        mealPlan.setRecipes(toUpdate);
        return repo.save(mealPlan);
    }
 
    public MealPlan updateMealPlanActivity(MealPlan mealPlan)
    { 
        MealPlan toUpdate = repo.findById(mealPlan.getId()) 
                            .orElseThrow(()->  new RuntimeException("MealPlan Id: "+ mealPlan.getId() + " is not found"));  
        
        toUpdate.setActive(mealPlan.getActive());

        return repo.save(toUpdate);
    }
    
    public List<MealPlan> getAllMealPlans()
    {
        return repo.findAll();
    } 

    public List<MealPlan> getKeywordsOfMealPlan(String keyword)
    {
        return repo.findByKeyword(keyword);
    }
   
    public List<MealPlan> getMealPlansByUserId(String userId)
    {   
        return repo.findByUserID(userId);
    }

    public MealPlan getMealPlanById(long id)
    {
        return repo.findById(id)
                .orElseThrow(()->  new RuntimeException("MealPlan Id: "+ id + " is not found"));  
    }

    public List<MealPlanDTO> getMealPlanDTOs(String keyword)
    {
        return repo.findMealPlanDTOsWithKeyword(keyword);
    }
    
    public List<MealPlanDTO> getAllMealPlanDTOs()
    {
        return repo.findMealPlanDTOs();
    }
    
    //- rating's Create, Update, Read, Delete
    
    public MealPlanReviewRating createRating(MealPlanReviewRating mealPlanReviewRating)
    {   
        mealPlanReviewRating.setCreatedDateTime(LocalDateTime.now());
        return mealPlanReviewRatingRepository.save(mealPlanReviewRating);
    }
 

    public MealPlanReviewRating updateRating(MealPlanReviewRating mealPlanReviewRating)
    {  
        MealPlanReviewRating toUpdate = mealPlanReviewRatingRepository.findById(mealPlanReviewRating.getMealPlanReviewRatingId()).get();
        toUpdate.setRating(mealPlanReviewRating.getRating());
        toUpdate.setLastUpdatedDateTime(LocalDateTime.now());
        return mealPlanReviewRatingRepository.save(toUpdate);
    }

    public List<MealPlanReviewRating> getAllMealPlanReviewRatingOfUserId(String userId)
    {   
        return mealPlanReviewRatingRepository.findByUserID(userId);
    }

      @Autowired
    private UserRepository userRepo;

    public List<MealPlanReviewRating> getAllRatingsOfMealPlanId(Long mealPlanId)
    {   
        List<MealPlanReviewRating> toReturn = mealPlanReviewRatingRepository.findByMealPlanId(mealPlanId);
        for(MealPlanReviewRating r: toReturn)
        {

            UserInfoDTO dto = userRepo.getUserInfoDTO(r.getMealPlanReviewRatingId().UserID);
            r.setUserDTO(dto);
        }
        return toReturn;
    }
    
    public ReviewRatingDTO findAvgByMealPlanId(Long mealPlanId)
    {
        return mealPlanReviewRatingRepository.findAverageDTOByMealPlanId(mealPlanId);
    }

    public List<MealPlanReviewRating> getAllMealPlanReviewRating()
    {   
        return mealPlanReviewRatingRepository.findAll();
    }

    public void deleteReviewById(MealPlanReviewRatingId id)
    {
        mealPlanReviewRatingRepository.deleteById(id);
    }
 
}
