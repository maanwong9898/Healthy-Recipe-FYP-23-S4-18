package com.FYP18.HealthyRecipe.Service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.FYP18.HealthyRecipe.Entity.Blog;
import com.FYP18.HealthyRecipe.Entity.BlogReviewRatingId;
import com.FYP18.HealthyRecipe.Entity.User;
import com.FYP18.HealthyRecipe.Repository.BlogRepository;
import com.FYP18.HealthyRecipe.Repository.BlogReviewRatingRepository;

import jakarta.transaction.Transactional;


@Service 
public class BlogService {

    @Autowired
    private BlogRepository blogRepository;

    @Autowired
    private BlogReviewRatingRepository blogReviewRatingRepository;

    // create, read all, read 1, update, delete
    
    public Blog createBlog(Blog blog)
    {
        blog.setCreatedDateTime(LocalDateTime.now());
        blog.setActive(true);
        // for some reason, i thought when i set the defaults in the 
        // columnDefinition would work, but it doesnt, i have to set the default values
        // i want here..

        return blogRepository.save(blog);
    }

    // i need to specify a couple more functions
    // as my Blog entity only allows modification of
    // a) Active status, by system admin // user of blog's userId
    // b) Publisher // title // info, by user of blog's userId nia
    // the rest of the field / column shouldn't be updatable by any users

    // but for now, all content thats specified in the argument would be used 
    // to overwrites all content
    public Blog updateBlog(Blog blog)
    {
        // automatically sets the last updated time
        blog.setLastUpdatedDateTime(LocalDateTime.now());
        return blogRepository.save(blog);
    }

    public List<Blog> getAllBlogs()
    {
        return blogRepository.findAll();
    }

    public Blog findBlogById(long blogId)
    {
        return blogRepository.findById(blogId)
            .orElseThrow(()->  new RuntimeException("Blog Id: "+ blogId + "is not found"));
    }
    
    // this is a failure, i have spent too much time :)
    // public List<Blog> findBlogByUserId(User userId)
    // {
    //     return blogRepository.findByUserID(userId);
    // }
 
    public List<Blog> findBlogByUserId(String userId)
    {
        return blogRepository.findByUserID(userId);
    }
 
    public void deleteBlog(long id)
    {
        // blogReviewRatingRepository.deleteByBlogId(id);
        blogRepository.deleteByBlogId(id); 
        // apparently once i set the relationship accordingly, there's no need for me 
        // to delete blogReviewRatings myself
    }

}
