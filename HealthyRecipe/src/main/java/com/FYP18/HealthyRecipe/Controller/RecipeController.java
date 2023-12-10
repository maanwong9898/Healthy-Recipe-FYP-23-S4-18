package com.FYP18.HealthyRecipe.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FYP18.HealthyRecipe.Entity.Recipe;
import com.FYP18.HealthyRecipe.Entity.RecipeReviewRating;
import com.FYP18.HealthyRecipe.Repository.RecipeRepository;
import com.FYP18.HealthyRecipe.Repository.RecipeReviewRatingRepository;

import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestParam;
import java.util.List;


@RestController
@CrossOrigin()
@RequestMapping(value = "/recipe")
public class RecipeController {
    @Autowired
    private RecipeRepository repo;

    @Autowired
    private RecipeReviewRatingRepository rrrepo;
    
    @GetMapping ("/get")
    public List<Recipe> GetAllRecipes()
    {
        List<Recipe> controllers = repo.findAll();
        List<RecipeReviewRating> rrr = rrrepo.findAll();
        for(RecipeReviewRating r : rrr)
        {
            System.out.println(r);
        }
        return controllers;
    }
}
