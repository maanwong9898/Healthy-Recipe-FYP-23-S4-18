package com.FYP18.HealthyRecipe.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.FYP18.HealthyRecipe.DTO.ReviewRatingDTO;
import com.FYP18.HealthyRecipe.Entity.Blog;
import com.FYP18.HealthyRecipe.Entity.BlogReviewRating;
import com.FYP18.HealthyRecipe.Entity.BlogReviewRatingId;
import com.FYP18.HealthyRecipe.Entity.Recipe;
import com.FYP18.HealthyRecipe.Entity.User;
import com.FYP18.HealthyRecipe.Repository.BlogRepository;
import com.FYP18.HealthyRecipe.Repository.BlogReviewRatingRepository;
import com.FYP18.HealthyRecipe.Service.BlogService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;

// import org.springframework.web.bind.annotation.RequestParam;
import java.util.List;
import java.util.Map;

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
        // System.out.println("VEEEE : " +toReturn.get(0).getBlogType().getSubcategoryName());
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }
    @GetMapping("/get/{id}")
    public ResponseEntity<Blog> getBlogById(@PathVariable Long id)
    {
        Blog toReturn = blogService.findBlogById(id);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }

    //  @GetMapping("/get/{id}")
    // public ResponseEntity<Map<String,String>> getBlogById(@PathVariable Long id)
    // {
    //     // Blog toReturn = blogService.findBlogById(id);
    //     Map<String,String> toReturn = blogService.findBlogBy(id);
    //     return new ResponseEntity<>(toReturn, HttpStatus.OK);
    // }


    @GetMapping ("/find")
    public ResponseEntity<List<Blog>> findByKeyword(@RequestParam String keyword)
    { 
        List<Blog> toReturn = blogService.findBlogsByKeyword(keyword);
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
    
     @PutMapping("/suspend")
    public ResponseEntity<Blog> suspendBlog(@RequestBody Blog blog)  
    { 
        Blog toReturn = blogService.suspendBlog(blog); 
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


    @GetMapping("/getAverage/{blogId}") 
    public ReviewRatingDTO getAvgAndTotalNum(@PathVariable Long blogId)
    {
        return blogService.findAvgByBlogId(blogId);
    }
 
    
    // if its empty, get everything(probably removing it)
    // if its not empty, try to get the userId of 
    @GetMapping("/rating/get")
    public ResponseEntity<List<BlogReviewRating>> getAllBlogReviewRatingOfUserId
                (@RequestParam(required = false) String userId)  
    { 
       List<BlogReviewRating> toReturn = userId ==null ? blogService.getAllRatings():
                                 blogService.getAllRatingsOfUserId(userId);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }
    @GetMapping("/rating/getBlog")
    public ResponseEntity<List<BlogReviewRating>> getAllBlogReviewRatingOfUserId
                (@RequestParam Long blogId)  
    { 
       List<BlogReviewRating> toReturn =   blogService.getAllRatingsOfBlogId(blogId);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }
    
    @PostMapping("/rating/add")
    public ResponseEntity<BlogReviewRating> addBlogReviewRating(@RequestBody BlogReviewRating blog)  
    { 
       BlogReviewRating toReturn = blogService.createRating(blog); 
        return new ResponseEntity<>(toReturn, HttpStatus.CREATED);
    }
    

    @PutMapping("/rating/edit")
    public ResponseEntity<BlogReviewRating> editBlogReviewRating(@RequestBody BlogReviewRating blog)  
    { 
       BlogReviewRating toReturn = blogService.updateRating(blog); 
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }
       
    @DeleteMapping("/rating/delete")
    public ResponseEntity<?> deleteBlogReviewRating(@RequestBody BlogReviewRatingId id )
    {  
        blogService.deleteRatingByBlogId(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}

