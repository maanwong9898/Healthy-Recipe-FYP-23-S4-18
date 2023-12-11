package com.FYP18.HealthyRecipe.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FYP18.HealthyRecipe.Entity.Blog;
import com.FYP18.HealthyRecipe.Entity.BlogReviewRating;
import com.FYP18.HealthyRecipe.Entity.User;
import com.FYP18.HealthyRecipe.Repository.BlogRepository;
import com.FYP18.HealthyRecipe.Repository.BlogReviewRatingRepository;
import com.FYP18.HealthyRecipe.Service.BlogService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;

// import org.springframework.web.bind.annotation.RequestParam;
import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@CrossOrigin()
@RequestMapping(value = "/blog")
public class BlogController { 

    private final BlogService blogService;

    public BlogController(BlogService blogService)
    {
        this.blogService = blogService;
    }

    @GetMapping ("/get")
    public ResponseEntity<List<Blog>> getAllBlogs()  
    { 
        List<Blog> toReturn = blogService.getAllBlogs();
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }
 
    @GetMapping ("/findByUserId/{id}")
    public ResponseEntity<List<Blog>> findByUserId(@PathVariable String id)
    { 
        List<Blog> toReturn = blogService.findBlogByUserId(id);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Blog> addBlog(@RequestBody Blog blog)  
    { 
       Blog toReturn = blogService.createBlog(blog); 
        return new ResponseEntity<>(toReturn, HttpStatus.CREATED);
    }
    

    @PutMapping("/edit")
    public ResponseEntity<Blog> editBlog(@RequestBody Blog blog)  
    { 
       Blog toReturn = blogService.updateBlog(blog); 
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }
    
    @PatchMapping("/update")
    public ResponseEntity<Blog> updateBlog(@RequestBody Blog blog)  
    { 
       Blog toReturn = blogService.updateBlog(blog); 
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBlog(@PathVariable("id") long id )
    {  
        blogService.deleteBlog(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

