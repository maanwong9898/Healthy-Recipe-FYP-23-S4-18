package com.FYP18.HealthyRecipe.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FYP18.HealthyRecipe.DTO.MealPlanDTO;
import com.FYP18.HealthyRecipe.DTO.PopularReviewRatingDTO;
import com.FYP18.HealthyRecipe.DTO.RoleCountRequest;
import com.FYP18.HealthyRecipe.Repository.MealPlanRepository;
import com.FYP18.HealthyRecipe.Repository.MealPlanReviewRatingRepository;
import com.FYP18.HealthyRecipe.Service.LandingPageService;
 
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
}
