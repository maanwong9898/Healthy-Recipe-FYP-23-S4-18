package com.FYP18.HealthyRecipe.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
 
import com.FYP18.HealthyRecipe.Entity.Categories.*;
import com.FYP18.HealthyRecipe.Service.CategoryService;

@RestController
@CrossOrigin()
@RequestMapping(value = "/category")  
public class CategoryController {
    
    @Autowired
    public CategoryService categoryService;

    @PostMapping("/allergy")
    private ResponseEntity<Allergies> addAllergy(@RequestBody Allergies allergies) throws Exception
    { 
        Allergies allergy = categoryService.createNewAllergy(allergies);
        return new ResponseEntity<>(allergy, HttpStatus.CREATED);
    }

     @PostMapping("/allergies")
    private ResponseEntity<List<Allergies>> addAllergies(@RequestBody List<Allergies> allergies) throws Exception
    { 
        for(Allergies a : allergies)
        {
            categoryService.createNewAllergy(a);
        }
        // Allergies allergy = categoryService.createNewAllergy(allergies);
        return new ResponseEntity<>(allergies, HttpStatus.CREATED);
    }

//   @PostMapping("/allergy")
//     private ResponseEntity<Allergies> addAllergy(@RequestBody Allergies allergies) throws Exception
//     { 
//         Allergies allergy = categoryService.createNewAllergy(allergies);
//         return new ResponseEntity<>(allergy, HttpStatus.CREATED);
//     }



    // all these are for 
    @GetMapping("/getAllAllergies")
    private ResponseEntity<List<Allergies>> getAllAllergies()
    {
        return new ResponseEntity<>(categoryService.getAllAllergies(), HttpStatus.OK);
    }    
    @GetMapping("/getAllBlogPostCategories")
    private ResponseEntity<List<BlogPostCategory>> getAllBlogPostCategories()
    {
        return new ResponseEntity<>(categoryService.getAllBlogPostCategories(), HttpStatus.OK);
    }   
    @GetMapping("/getAllDietaryPreferences")
    private ResponseEntity<List<DietaryPreferences>> getAllDietaryPreferences()
    {
        return new ResponseEntity<>(categoryService.getAllDietaryPreferences(), HttpStatus.OK);
    }   
    @GetMapping("/getAllEducationalContentCategories")
    private ResponseEntity<List<EducationalContentCategory>> getAllEducationalContentCategories()
    {
        return new ResponseEntity<>(categoryService.getAllEducationalContentCategories(), HttpStatus.OK);
    }   
    @GetMapping("/getAllHealthGoals")
    private ResponseEntity<List<HealthGoal>> getAllHealthGoals()
    {
        return new ResponseEntity<>(categoryService.getAllHealthGoals(), HttpStatus.OK);
    }   
}
