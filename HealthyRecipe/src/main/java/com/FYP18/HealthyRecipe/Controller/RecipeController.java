package com.FYP18.HealthyRecipe.Controller;
 
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.FYP18.HealthyRecipe.DTO.RecipeDTO;
import com.FYP18.HealthyRecipe.DTO.ReviewRatingDTO;
import com.FYP18.HealthyRecipe.Entity.BlogReviewRating;
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

    @GetMapping ("/get/{id}")
    public ResponseEntity<Recipe> getRecipeById(@PathVariable long id)
    { 
        Recipe toReturn = recipeService.getRecipeById(id);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }


    @GetMapping("/getAverage/{recipeId}")
    public ReviewRatingDTO getAvgAndTotalNum(@PathVariable Long recipeId)
    {
        return recipeService.findAvgByRecipeId(recipeId);
    }

    @GetMapping("/rating/getRecipe")
    public ResponseEntity<List<RecipeReviewRating>> getAllRecipeReviewRatingOfUserId
                (@RequestParam Long recipeId)  
    { 
       List<RecipeReviewRating> toReturn =   recipeService.getAllRatingsOfRecipeId(recipeId);
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
        List<Recipe> toReturn = recipeService.findRecipesByTitle(keyword);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }

    @GetMapping ("/findByIngredients")
    public ResponseEntity<List<Recipe>> findByIngredients(@RequestParam String keyword)
    { 
        List<Recipe> toReturn = recipeService.findRecipesByIngredients(keyword);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }

    @GetMapping ("/findDTO")
    public ResponseEntity<List<RecipeDTO>> getRecipeDTOs(@RequestParam String keyword)
    { 
        List<RecipeDTO> toReturn = recipeService.getRecipeDTOs(keyword);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Recipe> addRecipe(@RequestBody Recipe recipe)  
    { 
       Recipe toReturn = recipeService.createRecipe(recipe); 
        return new ResponseEntity<>(toReturn, HttpStatus.CREATED);
    }
    @PostMapping("/addImage")
    public ResponseEntity<Recipe> addRecipeImage(@RequestParam("file") MultipartFile file, @RequestParam("id") Long id)
    { 
       Recipe toReturn = recipeService.updateWithFile(id, file);
        return new ResponseEntity<>(toReturn, HttpStatus.CREATED);
    }

    // this is how i test at least it works
    @GetMapping("/{recipeId}/image")
    public ResponseEntity<byte[]> getRecipeImage(@PathVariable Long recipeId) {
        byte[] imageData = recipeService.getRecipeById(recipeId).getImgBlob();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG); // Set the appropriate content type

        return new ResponseEntity<>(imageData, headers, HttpStatus.OK);
    }
    // @PutMapping("/edit")
    // public ResponseEntity<Recipe> editBlog(@RequestBody Recipe blog)  
    // { 
    //    Recipe toReturn = recipeService.updateRecipe(blog); 
    //     return new ResponseEntity<>(toReturn, HttpStatus.OK);
    // }
    
    @PutMapping("/update")
    public ResponseEntity<Recipe> updateBlog(@RequestBody Recipe recipe)  
    { 
       Recipe toReturn = recipeService.updateRecipe(recipe); 
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }

    @PutMapping("/updateActivity")
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
