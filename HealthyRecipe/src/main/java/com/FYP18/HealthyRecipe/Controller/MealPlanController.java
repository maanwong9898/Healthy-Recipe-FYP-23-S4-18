package com.FYP18.HealthyRecipe.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.FYP18.HealthyRecipe.DTO.MealPlanDTO;
import com.FYP18.HealthyRecipe.DTO.ReviewRatingDTO;
import com.FYP18.HealthyRecipe.Entity.MealPlan;
import com.FYP18.HealthyRecipe.Entity.RecipeReviewRating;
import com.FYP18.HealthyRecipe.Entity.RecipeReviewRatingId;
import com.FYP18.HealthyRecipe.Service.MealPlanService;
import com.FYP18.HealthyRecipe.Entity.MealPlanReviewRating;
import com.FYP18.HealthyRecipe.Entity.MealPlanReviewRatingId;


@RestController
@CrossOrigin()
@RequestMapping(value = "/mealPlan") 
public class MealPlanController {
    
    private final MealPlanService mealPlanService;

    public MealPlanController(MealPlanService mealPlanService)
    {
        this.mealPlanService = mealPlanService;
    }
   @GetMapping ("/get")
    public ResponseEntity<List<MealPlan>> getAllMealPlans()  
    { 
        List<MealPlan> toReturn = mealPlanService.getAllMealPlans();
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }

    @GetMapping ("/get/{id}")
    public ResponseEntity<MealPlan> getMealPlanById(@PathVariable long id)
    { 
        MealPlan toReturn = mealPlanService.getMealPlanById(id);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }


    // @GetMapping("/getAverage/{mealPlanId}")
    // public ReviewRatingDTO getAvgAndTotalNum(@PathVariable Long mealPlanId)
    // {
    //     return mealPlanService.findAvgByMealPlanId(mealPlanId);
    // }
 
 
    @GetMapping ("/findByUserId/{id}")
    public ResponseEntity<List<MealPlan>> findByUserId(@PathVariable String id)
    { 
        List<MealPlan> toReturn = mealPlanService.getMealPlansByUserId(id);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }
 
    @GetMapping ("/find")
    public ResponseEntity<List<MealPlan>> findByKeyword(@RequestParam String keyword)
    { 
        List<MealPlan> toReturn = mealPlanService.getKeywordsOfMealPlan(keyword);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }

    @GetMapping ("/findDTO")
    public ResponseEntity<List<MealPlanDTO>> getMealPlanDTOs(@RequestParam(required = false) String keyword)
    { 

        List<MealPlanDTO> toReturn = keyword == null?   mealPlanService.getAllMealPlanDTOs():
                                                        mealPlanService.getMealPlanDTOs(keyword);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<MealPlan> addMealPlan(@RequestBody MealPlan mealPlan)  
    { 
       MealPlan toReturn = mealPlanService.createMealPlan(mealPlan); 
        return new ResponseEntity<>(toReturn, HttpStatus.CREATED);
    }
     
    @PutMapping("/update")
    public ResponseEntity<MealPlan> updateBlog(@RequestBody MealPlan mealPlan)  
    { 
       MealPlan toReturn = mealPlanService.updateMealPlan(mealPlan); 
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }

    @PutMapping("/updateActivity")
    public ResponseEntity<MealPlan> updateMealPlanActivity(@RequestBody MealPlan mealPlan)
    {
        MealPlan toReturn  = mealPlanService.updateMealPlanActivity(mealPlan);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBlog(@PathVariable("id") long id )
    {  
        mealPlanService.deleteMealPlanById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }



    @GetMapping("/getAverage/{mealPlanId}")
    public ReviewRatingDTO getAvgAndTotalNum(@PathVariable Long mealPlanId)
    {
        return mealPlanService.findAvgByMealPlanId(mealPlanId);
    }

    @GetMapping("/rating/getMealPlan")
    public ResponseEntity<List<MealPlanReviewRating>> getAllMealPlanReviewRatingOfUserId
                (@RequestParam Long mealPlanId)  
    { 
       List<MealPlanReviewRating> toReturn =   mealPlanService.getAllRatingsOfMealPlanId(mealPlanId);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }


    @GetMapping("/rating/get")
    public ResponseEntity<List<MealPlanReviewRating>> getAllMealPlanReviewRatingOfUserId
                (@RequestParam(required = false) String userId)  
    { 
       List<MealPlanReviewRating> toReturn = userId ==null ? mealPlanService.getAllMealPlanReviewRating():
                                                                mealPlanService.getAllMealPlanReviewRatingOfUserId(userId);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }

    @PostMapping("/rating/add")
    public ResponseEntity<MealPlanReviewRating> addMealPlanReviewRating(@RequestBody MealPlanReviewRating mealPlan)  
    { 
       MealPlanReviewRating toReturn = mealPlanService.createRating(mealPlan); 
        return new ResponseEntity<>(toReturn, HttpStatus.CREATED);
    }

    @PutMapping("/rating/edit")
    public ResponseEntity<MealPlanReviewRating> editMealPlanReviewRating(@RequestBody MealPlanReviewRating mealPlan)  
    { 
       MealPlanReviewRating toReturn = mealPlanService.updateRating(mealPlan); 
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }

    @DeleteMapping("/rating/delete")
    public ResponseEntity<?> deleteMealPlanReviewRating(@RequestBody MealPlanReviewRatingId id )
    {  
        mealPlanService.deleteReviewById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
