package com.FYP18.HealthyRecipe.Controller;
 
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
 
import com.FYP18.HealthyRecipe.Entity.Recipe;
import com.FYP18.HealthyRecipe.Entity.RecipeReviewRating;
import com.FYP18.HealthyRecipe.Entity.RecipeReviewRatingId; 
import com.FYP18.HealthyRecipe.Service.RecipeService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
 
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
    public ResponseEntity<Recipe> addRecipe(@RequestBody Recipe recipe)  
    { 
       Recipe toReturn = recipeService.createRecipe(recipe); 
        return new ResponseEntity<>(toReturn, HttpStatus.CREATED);
    }
    

    // @PutMapping("/edit")
    // public ResponseEntity<Recipe> editBlog(@RequestBody Recipe blog)  
    // { 
    //    Recipe toReturn = recipeService.updateRecipe(blog); 
    //     return new ResponseEntity<>(toReturn, HttpStatus.OK);
    // }
    
    @PatchMapping("/update")
    public ResponseEntity<Recipe> updateBlog(@RequestBody Recipe recipe)  
    { 
       Recipe toReturn = recipeService.updateRecipe(recipe); 
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }

    @PatchMapping("/updateActivity")
    public ResponseEntity<Recipe> updateRecipeActivity(@RequestBody Recipe recipe)
    {
        Recipe toReturn  = recipeService.updateRecipeActivity(recipe);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBlog(@PathVariable("id") long id )
    {  
        recipeService.deleteRecipeById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }



    @GetMapping("/rating/get")
    public ResponseEntity<List<RecipeReviewRating>> getAllBlogReviewRatingOfUserId
                (@RequestParam(required = false) String userId)  
    { 
       List<RecipeReviewRating> toReturn = userId ==null ? recipeService.getAllRecipeReviewRating():
                                                            recipeService.getAllRecipeReviewRatingOfUserId(userId);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }


    @PostMapping("/rating/add")
    public ResponseEntity<RecipeReviewRating> addBlogReviewRating(@RequestBody RecipeReviewRating recipe)  
    { 
       RecipeReviewRating toReturn = recipeService.createRating(recipe); 
        return new ResponseEntity<>(toReturn, HttpStatus.CREATED);
    }
    

    @PutMapping("/rating/edit")
    public ResponseEntity<RecipeReviewRating> editBlogReviewRating(@RequestBody RecipeReviewRating recipe)  
    { 
       RecipeReviewRating toReturn = recipeService.updateRating(recipe); 
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }
       
    @DeleteMapping("/rating/delete")
    public ResponseEntity<?> deleteBlogReviewRating(@RequestBody RecipeReviewRatingId id )
    {  
        recipeService.deleteReviewById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
