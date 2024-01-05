package com.FYP18.HealthyRecipe.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FYP18.HealthyRecipe.Entity.BlogReviewRating;
import com.FYP18.HealthyRecipe.Entity.Categories.*;
import com.FYP18.HealthyRecipe.Service.CategoryService;

@RestController
@CrossOrigin()
@RequestMapping(value = "/category")  
public class CategoryController {
    
    //Create, Update, Delete for System admin only

    //Read can be done by everyone else
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
        return new ResponseEntity<>(allergies, HttpStatus.CREATED);
    }

    @PostMapping("/blogPost")
    private ResponseEntity<BlogPostCategory> addBlogPostCategory(@RequestBody BlogPostCategory allergies) throws Exception
    { 
        BlogPostCategory allergy = categoryService.createNewBlogPostCategory(allergies);
        return new ResponseEntity<>(allergy, HttpStatus.CREATED);
    }
    @PostMapping("/dietaryPreference")
    private ResponseEntity<DietaryPreferences> addDietaryPreference(@RequestBody DietaryPreferences dps) throws Exception
    { 
        DietaryPreferences dp = categoryService.createNewDietaryPreferences(dps);
        return new ResponseEntity<>(dp, HttpStatus.CREATED);
    }

    @PostMapping("/educational")
    private ResponseEntity<EducationalContentCategory> addEducationalContent(@RequestBody EducationalContentCategory allergies) throws Exception
    { 
        EducationalContentCategory allergy = categoryService.createNewEducationalContentCategory(allergies);
        return new ResponseEntity<>(allergy, HttpStatus.CREATED);
    }

    @PostMapping("/healthGoal")
    private ResponseEntity<HealthGoal> addHealthGoal(@RequestBody HealthGoal allergies) throws Exception
    { 
        HealthGoal allergy = categoryService.createNewHealthGoal(allergies);
        return new ResponseEntity<>(allergy, HttpStatus.CREATED);
    }
 
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
 
    @DeleteMapping("/deleteAllergy/{id}")
    public ResponseEntity<?> deleteAllergy(@PathVariable("id") long id )
    {  
        categoryService.deleteAllergy(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/deleteBlogPostCategory/{id}")
    public ResponseEntity<?> deleteBlogPostCategory(@PathVariable("id") long id )
    {  
        categoryService.deleteBlogPostCategory(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/deleteDietaryPreference/{id}")
    public ResponseEntity<?> deleteDietaryPreference(@PathVariable("id") long id )
    {  
        categoryService.deleteDietaryPreference(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/deleteEducationalContent/{id}")
    public ResponseEntity<?> deleteEducationalContent(@PathVariable("id") long id )
    {  
        categoryService.deleteEducationalContent(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/deleteHealthGoal/{id}")
    public ResponseEntity<?> deleteHealthGoal(@PathVariable("id") long id )
    {  
        categoryService.deleteHealthGoal(id);
        return new ResponseEntity<>(HttpStatus.OK);
    } 

    // editting: 
    @PutMapping("/allergy/edit")
    public ResponseEntity<Allergies> editAllergy(@RequestBody Allergies allergy)  throws Exception
    { 
        Allergies toReturn = categoryService.updateNewAllergy(allergy);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }
        
    @PutMapping("/blogPostCategory/edit")
    public ResponseEntity<BlogPostCategory> editBlogPostCategory(@RequestBody BlogPostCategory allergy)  throws Exception
    { 
        BlogPostCategory toReturn = categoryService.updateBlogPostCategory(allergy);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }
    @PutMapping("/dietaryPreferences/edit")
    public ResponseEntity<DietaryPreferences> editDietaryPreferences(@RequestBody DietaryPreferences allergy)  throws Exception
    { 
        DietaryPreferences toReturn = categoryService.updateDietaryPreferences(allergy);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }
    @PutMapping("/educationalContentCategory/edit")
    public ResponseEntity<EducationalContentCategory> editEducationalContentCategory(@RequestBody EducationalContentCategory allergy)  throws Exception
    { 
        EducationalContentCategory toReturn = categoryService.updateEducationalContentCategory(allergy);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }
    @PutMapping("/healthGoal/edit")
    public ResponseEntity<HealthGoal> editHealthGoal(@RequestBody HealthGoal allergy)  throws Exception
    { 
        HealthGoal toReturn = categoryService.updateHealthGoal(allergy);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }
}
