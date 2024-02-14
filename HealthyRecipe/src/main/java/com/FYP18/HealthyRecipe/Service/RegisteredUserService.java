package com.FYP18.HealthyRecipe.Service;

import java.time.LocalDate; 
import java.util.List; 
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.DTO.AgeGroupRequest;
import com.FYP18.HealthyRecipe.DTO.DietaryPreferenceDemographic;
import com.FYP18.HealthyRecipe.DTO.MealPlanDTO;
import com.FYP18.HealthyRecipe.DTO.WeightDTO;
import com.FYP18.HealthyRecipe.Entity.MealPlan;
import com.FYP18.HealthyRecipe.Entity.UserInfoOverTime;
import com.FYP18.HealthyRecipe.Repository.MealPlanRepository;
import com.FYP18.HealthyRecipe.Repository.MealPlanReviewRatingRepository;
import com.FYP18.HealthyRecipe.Repository.RegisteredUserRepository;
import com.FYP18.HealthyRecipe.Repository.UserInfoRepository; 


@Transactional
@Service 
public class RegisteredUserService {
    
    @Autowired
    private UserInfoRepository userInfoRepository;

    @Autowired
    private RegisteredUserRepository repo;


    @Autowired 
    private MealPlanRepository mealPlanRepo;

    @Autowired
    private MealPlanReviewRatingRepository mealPlanRRRepo;
     
    public List<WeightDTO> getWeights(String id)
    { 
        return userInfoRepository.getWeights(id);
    }

    public UserInfoOverTime setWeight(UserInfoOverTime info)
    { 
        if(info.getId().getDate() == null)
        {
            info.getId().setDate(LocalDate.now());
        }
        return userInfoRepository.save(info);
    }
    public void deleteSpecificWeight(UserInfoOverTime info)
    {
        UserInfoOverTime _info = userInfoRepository.findById(info.getId()).get();
        userInfoRepository.delete(_info);
    }

    public List<AgeGroupRequest> getAgeGroup()
    {
        return repo.getAgeGroup();
    }

    public List<DietaryPreferenceDemographic> getDemo()
    {
        return repo.getDemo();
    }
  
    public List<MealPlanDTO> getMealPlans(Long healthCategoryId)
    {
        return mealPlanRepo.getMealPlansWithHealthGoal(healthCategoryId);
    } 
 
}
