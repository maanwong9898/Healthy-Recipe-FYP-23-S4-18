package com.FYP18.HealthyRecipe.Service;
 

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.FYP18.HealthyRecipe.DTO.PopularReviewRatingDTO;
import com.FYP18.HealthyRecipe.DTO.RecipeDTO;
import com.FYP18.HealthyRecipe.DTO.ReviewRatingDTO;
import com.FYP18.HealthyRecipe.DTO.UserInfoDTO; 
import com.FYP18.HealthyRecipe.Entity.Recipe;
import com.FYP18.HealthyRecipe.Entity.RecipeReviewRating;
import com.FYP18.HealthyRecipe.Entity.RecipeReviewRatingId;
import com.FYP18.HealthyRecipe.Entity.RegisteredUser;
import com.FYP18.HealthyRecipe.Entity.Categories.Allergies;
import com.FYP18.HealthyRecipe.Entity.Categories.DietaryPreferences;
import com.FYP18.HealthyRecipe.Entity.Categories.HealthGoal;
import com.FYP18.HealthyRecipe.Entity.Categories.MealType;
import com.FYP18.HealthyRecipe.Repository.RecipeRepository;
import com.FYP18.HealthyRecipe.Repository.RecipeReviewRatingRepository;
import com.FYP18.HealthyRecipe.Repository.RegisteredUserRepository;
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

    // this is called on default    
    public List<RecipeDTO> getMostPopularRecipes()
    {
        List<PopularReviewRatingDTO> dto = recipeReviewRatingRepository.getMostPopularRecipes(3);
        List<Long> ids = new ArrayList<>();
        for(PopularReviewRatingDTO id : dto)
        {
            ids.add(id.getId());
        } 

        List<RecipeDTO> toReturn = recipeRepository.findRecipeDTOsByIds(ids);
        int missing = 3 - ids.size();

        // if its actually lesser than 3
        if(missing > 0)
        { 
            List<RecipeDTO> addOn = missing == 3 ? recipeRepository.findLatestRecipe(3):
                                                recipeRepository.findLatestRecipe(ids, missing);

            toReturn.addAll(addOn);
        }
        
        return toReturn;
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
    public Page<RecipeDTO> findRecipePages(int page, int size)
    {   
        Pageable pageable = PageRequest.of(page, size);
        return recipeRepository.findRecipesOfPage(pageable);
    }
    public List<RecipeDTO> findRecipeDTOsByDietaryPreferences( DietaryPreferences dp)
    {
       return recipeRepository.findRecipeDTOsByDietaryPreferences(dp.getId());
    }
     
    public List<RecipeDTO> findRecipeDTOsByMealType( MealType dp)
    {
       return recipeRepository.findRecipeDTOsByMealType(dp.getId());
    }
    
    @Autowired 
    private RegisteredUserRepository ruRepo;

 
    // use in Registered User's Landing page ( limit to 3) and Registered's user's Recipe page, (no limitation as of now)
    public List<RecipeDTO> findRecipeDTOsByAllergiesAndDP(String userId, Integer num) 
    { 
        RegisteredUser ru = ruRepo.findById(userId).get();
        Set<Allergies> allergies = ru.getAllergies();
        DietaryPreferences dp = ru.getDietaryPreferences();
        Set<Long> ids = allergies.stream()
                        .map(Allergies::getId)
                        .collect(Collectors.toSet());
 
        List<RecipeDTO> toReturn; 
        if(ids.size() == 0)
        {
            toReturn = dp == null ? recipeRepository.findLatestRecipe(num):
                                    recipeRepository.findRecipeDTOsByDietaryPreferences(dp.getId());
        }
        else
        {
           toReturn = dp == null ? recipeRepository.findRecipeDTOsByAllergies(ids) : 
                                    recipeRepository.findRecipeDTOsByAllergiesAndDP(ids, dp.getId());
        }

        if(toReturn.size()  < num)
        {
            int count  = num - toReturn.size();
            List<Long> checked = new ArrayList<>() ;
            for(RecipeDTO r :toReturn)
            {
                checked.add(r.getId());
            }
            List<RecipeDTO> addOn = count == num ? recipeRepository.findLatestRecipe(count) :
                                         recipeRepository.findLatestRecipe(checked, count);
            toReturn.addAll(addOn); 
        }
        HealthGoal hg = ru.getHealthGoal();
        if(hg != null)
        {
            if(hg.getId() == 1)
            {
                toReturn = toReturn.stream()
                .sorted(Comparator
                .comparing((RecipeDTO dto) -> dto.getCarbs() == null ? 0 : dto.getCarbs(), Comparator.reverseOrder())
                .thenComparing((RecipeDTO dto) -> dto.getProtein() == null ? 0 : dto.getProtein(), Comparator.reverseOrder()))
                .collect(Collectors.toList());
            }

            else if (hg.getId() == 3)
            {
                toReturn = toReturn.stream()
                .sorted(Comparator
                    .comparing((RecipeDTO dto) ->  dto.getFibre() == null? 0 : dto.getFibre(), Comparator.reverseOrder()))
                .collect(Collectors.toList());
            }   
        }
        return toReturn;
    }


    // this returns 3 everytime, for now it returns random recipe if everything dont fit  
    public List<RecipeDTO> findRecipeDTOsByAllergiesAndDP(String userId) 
    { 
        return findRecipeDTOsByAllergiesAndDP(userId, 3);
    }



}
