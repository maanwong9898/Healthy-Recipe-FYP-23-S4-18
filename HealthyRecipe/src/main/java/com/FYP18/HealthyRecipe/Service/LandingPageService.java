package com.FYP18.HealthyRecipe.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.DTO.EduCoDTO;
import com.FYP18.HealthyRecipe.DTO.MealPlanDTO;
import com.FYP18.HealthyRecipe.DTO.PopularReviewRatingDTO;
import com.FYP18.HealthyRecipe.DTO.RoleCountRequest;
import com.FYP18.HealthyRecipe.Repository.EducationalContentRepository;
import com.FYP18.HealthyRecipe.Repository.EducationalContentReviewRatingRepository;
import com.FYP18.HealthyRecipe.Repository.MealPlanRepository;
import com.FYP18.HealthyRecipe.Repository.MealPlanReviewRatingRepository;
import com.FYP18.HealthyRecipe.Repository.UserRepository;
import com.FYP18.HealthyRecipe.Repository.Categories.EducationalContentCategoryRepo;


@Transactional
@Service  
public class LandingPageService {

    @Autowired
    private MealPlanReviewRatingRepository mealPlanRRRepo;

    @Autowired 
    private MealPlanRepository mealPlanRepo;

    @Autowired
    private UserRepository userRepository;
     
    //this is called on default, and its returning 3 on default
    // should have a controller that check if there's number included
    public List<MealPlanDTO> getMostPopularMealPlans()
    { 
        return getMostPopularMealPlans(3);
    }

      
    public List<MealPlanDTO> getMostPopularMealPlans(Integer count)
    {
        List<PopularReviewRatingDTO> dto = mealPlanRRRepo.getMostPopularMealPlans(count);
        List<Long> ids = new ArrayList<>();

        for(PopularReviewRatingDTO id : dto)
        {
            ids.add(id.getId());
        } 

        List<MealPlanDTO> toReturn = mealPlanRepo.findMealPlanDTOsByIds(ids);
        int missing = count - ids.size();

        // if its actually lesser than 3
        if(missing > 0)
        { 
            List<MealPlanDTO> addOn = missing == count ? mealPlanRepo.findLatestMealPlanDTO(count):
                                                        mealPlanRepo.findLatestMealPlanDTO(ids, missing);

            toReturn.addAll(addOn);
        }
        
        return toReturn;
    }


    
    public List<RoleCountRequest> getRoleCount()
    {
        return userRepository.getRoleCount();
    }


    @Autowired 
    private EducationalContentRepository eduCoRepo;
    
    @Autowired 
    private EducationalContentReviewRatingRepository eduCoRRRepo;

    public List<EduCoDTO> getMostPopularEducationalContents()
    { 
        return getMostPopularEducationalContents(3);
    }


    public List<EduCoDTO> getMostPopularEducationalContents(Integer count)
    {
        List<PopularReviewRatingDTO> dto = eduCoRRRepo.getMostPopularEducationalContents(count);
        List<Long> ids = new ArrayList<>();
        for(PopularReviewRatingDTO id : dto)
        {
            ids.add(id.getId());
        } 

        List<EduCoDTO> toReturn = eduCoRepo.findEduCoDTOsByIds(ids);
        int missing = count - ids.size();

        // if its actually lesser than 3
        if(missing > 0)
        { 
            List<EduCoDTO> addOn = missing == count ? eduCoRepo.findLatestEduCoDTO(count):
                                                eduCoRepo.findLatestEduCoDTO(ids, missing);

            toReturn.addAll(addOn);
        }
        
        return toReturn;
    }
}
