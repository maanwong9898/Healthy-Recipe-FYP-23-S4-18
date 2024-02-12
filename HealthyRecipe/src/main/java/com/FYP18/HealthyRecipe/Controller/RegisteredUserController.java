package com.FYP18.HealthyRecipe.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FYP18.HealthyRecipe.DTO.AgeGroupRequest;
import com.FYP18.HealthyRecipe.DTO.DietaryPreferenceDemographic;
import com.FYP18.HealthyRecipe.DTO.MealPlanDTO;
import com.FYP18.HealthyRecipe.DTO.RecipeDTO;
import com.FYP18.HealthyRecipe.DTO.WeightDTO;
import com.FYP18.HealthyRecipe.Entity.MealPlan;
import com.FYP18.HealthyRecipe.Entity.RegisteredUser;
import com.FYP18.HealthyRecipe.Entity.UserInfoOverTime;
import com.FYP18.HealthyRecipe.Entity.Categories.Allergies;
import com.FYP18.HealthyRecipe.Repository.RegisteredUserRepository;
import com.FYP18.HealthyRecipe.Repository.UserInfoRepository;
import com.FYP18.HealthyRecipe.Service.RecipeService;
import com.FYP18.HealthyRecipe.Service.RegisteredUserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.security.Principal;
import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin()
@RequestMapping(value = "/registeredUsers")
public class RegisteredUserController {
    @Autowired
    private RegisteredUserRepository repo;

    @Autowired
    private UserInfoRepository infoRepo;

    @Autowired
    private RegisteredUserService service;

    @Autowired
    private RecipeService recipeService;
    //   @DeleteMapping("/delete/{id}")
    // public ResponseEntity<?> deleteBlog(@PathVariable("id") long id )
  
    @GetMapping("/getWeights/{id}")
    public List<WeightDTO> getWeights(@PathVariable("id") String id)
    {
        return service.getWeights(id);
    }

    @DeleteMapping("/deleteWeight")
    public void deleteWeight(@RequestBody UserInfoOverTime info)
    {
        service.deleteSpecificWeight(info);
    }
    @PostMapping("/setWeight")
    public UserInfoOverTime setWeight(@RequestBody UserInfoOverTime info)
    {    
        return service.setWeight(info);
    }
    
    @GetMapping ("/get")
    public List<RegisteredUser> GetAllUsers()
    {
        List<RegisteredUser> controllers = repo.findAll(); 
        List<UserInfoOverTime> infos = infoRepo.findAll();

        for(RegisteredUser info : controllers)
        {
            System.out.println(info.toString());
        }
        return controllers;
    }

    @GetMapping ("/getAgeGroup")
    public List<AgeGroupRequest> GetAgeGroup()
    { 
        return service.getAgeGroup();
    }

    @GetMapping ("/getDemo")
    public List<DietaryPreferenceDemographic> GetDemo()
    { 
        return service.getDemo();
    }

    @GetMapping("/getMealPlans/{healthGoalId}")
    public List<MealPlan> getMealPlans(@PathVariable Long healthGoalId)
    {
        return service.getMealPlans(healthGoalId);
    }
     
    
    @GetMapping("/findRecipeDTOsByAllergiesAndDP/{userId}")
    public List<RecipeDTO> findRecipeDTOsByAllergiesAndDP(@PathVariable String userId)
    {
        return recipeService.findRecipeDTOsByAllergiesAndDP(userId);
    }

    @GetMapping("/findRecipeDTOsByAllergiesAndDP/{userId}/{count}")
    public List<RecipeDTO> findRecipeDTOsByAllergiesAndDP(@PathVariable String userId, 
                                                            @PathVariable Integer count)
    {
        return recipeService.findRecipeDTOsByAllergiesAndDP(userId, count);
    }
}
