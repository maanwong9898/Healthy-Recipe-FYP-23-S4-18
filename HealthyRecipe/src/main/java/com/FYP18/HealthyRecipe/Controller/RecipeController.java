package com.FYP18.HealthyRecipe.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.FYP18.HealthyRecipe.Entity.Blog;
import com.FYP18.HealthyRecipe.Entity.Recipe;
import com.FYP18.HealthyRecipe.Entity.RecipeReviewRating;
import com.FYP18.HealthyRecipe.Repository.RecipeRepository;
import com.FYP18.HealthyRecipe.Repository.RecipeReviewRatingRepository;
import com.FYP18.HealthyRecipe.Service.BlogService;
import com.FYP18.HealthyRecipe.Service.RecipeService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

// import org.springframework.web.bind.annotation.RequestParam;
import java.util.List;


@RestController
@CrossOrigin()
@RequestMapping(value = "/recipe")
public class RecipeController { 

    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService)
    {
        this.recipeService = recipeService;
    }

    @GetMapping ("/get")
    public ResponseEntity<List<Recipe>> getAllRecipes()  
    { 
        List<Recipe> toReturn = recipeService.getAllRecipes();
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }

   @GetMapping ("/findByUserId/{id}")
    public ResponseEntity<List<Recipe>> findByUserId(@PathVariable String id)
    { 
        List<Recipe> toReturn = recipeService.getRecipesByUserId(id);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }


   @GetMapping ("/find")
    public ResponseEntity<List<Recipe>> findByKeyword(@RequestParam String keyword)
    { 
        List<Recipe> toReturn = recipeService.getKeywordsOfRecipe(keyword);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Recipe> addBlog(@RequestBody Recipe blog)  
    { 
       Recipe toReturn = recipeService.createRecipe(blog); 
        return new ResponseEntity<>(toReturn, HttpStatus.CREATED);
    }
    

    // @PutMapping("/edit")
    // public ResponseEntity<Recipe> editBlog(@RequestBody Recipe blog)  
    // { 
    //    Recipe toReturn = recipeService.updateRecipe(blog); 
    //     return new ResponseEntity<>(toReturn, HttpStatus.OK);
    // }
    
    @PatchMapping("/update")
    public ResponseEntity<Recipe> updateBlog(@RequestBody Recipe blog)  
    { 
       Recipe toReturn = recipeService.updateRecipe(blog); 
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBlog(@PathVariable("id") long id )
    {  
        recipeService.deleteRecipeById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
