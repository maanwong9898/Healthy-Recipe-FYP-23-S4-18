package com.FYP18.HealthyRecipe.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.DTO.MealPlanDTO;
import com.FYP18.HealthyRecipe.DTO.PopularReviewRatingDTO;
import com.FYP18.HealthyRecipe.DTO.RoleCountRequest;
import com.FYP18.HealthyRecipe.Repository.MealPlanRepository;
import com.FYP18.HealthyRecipe.Repository.MealPlanReviewRatingRepository;
import com.FYP18.HealthyRecipe.Repository.UserRepository;


@Transactional
@Service  
public class LandingPageService {

    @Autowired
    private MealPlanReviewRatingRepository mealPlanRRRepo;

    @Autowired 
    private MealPlanRepository mealPlanRepo;

    @Autowired
    private UserRepository userRepository;
     
    public List<MealPlanDTO> getPopularMealPlans()
    {
        List<PopularReviewRatingDTO> rr = mealPlanRRRepo.getMostPopularMealPlans();

        List<Long> ids = new ArrayList<>();
        for(PopularReviewRatingDTO dto: rr)
        {
            ids.add(dto.getId());
        }
        // if lesser than 3 then should get latest
        return mealPlanRepo.findMealPlanDTOsByIds(ids);
         
    }


    public List<RoleCountRequest> getRoleCount()
    {
        return userRepository.getRoleCount();
    }
}
