package com.FYP18.HealthyRecipe.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
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
    private ResponseEntity addAllergies(@RequestBody List<Allergies> allergies) throws Exception
    { 
        for(Allergies a : allergies)
        {
            categoryService.createNewAllergy(a);
        }
        // Allergies allergy = categoryService.createNewAllergy(allergies);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
