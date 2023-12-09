package com.FYP18.HealthyRecipe.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FYP18.HealthyRecipe.Entity.Blog;
import com.FYP18.HealthyRecipe.Entity.BlogReviewRating;
import com.FYP18.HealthyRecipe.Repository.BlogRepository;
import com.FYP18.HealthyRecipe.Repository.BlogReviewRatingRepository;

import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestParam;
import java.util.List;


@RestController
@CrossOrigin()
@RequestMapping(value = "/Blog")
public class BlogController {
    @Autowired
    private BlogRepository repo;

    @Autowired
    private BlogReviewRatingRepository blogRRRepo;

    @GetMapping ("/get")
    public List<Blog> GetAllBlog()
    {
        List<Blog> controllers = repo.findAll();
        List<BlogReviewRating> get = blogRRRepo.findAll();
        for(BlogReviewRating rr : get)
        {
            System.out.println(rr.toString());
        }
        return controllers;
    }
}

