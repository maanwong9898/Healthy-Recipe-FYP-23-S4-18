package com.FYP18.HealthyRecipe.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.ObjectToMapConverter;
import com.FYP18.HealthyRecipe.DTO.UserInfoDTO;
import com.FYP18.HealthyRecipe.Entity.Blog;
import com.FYP18.HealthyRecipe.Entity.BlogReviewRating;
import com.FYP18.HealthyRecipe.Entity.BlogReviewRatingId;
import com.FYP18.HealthyRecipe.Entity.Categories.BlogPostCategory;
import com.FYP18.HealthyRecipe.Repository.BlogRepository;
import com.FYP18.HealthyRecipe.Repository.BlogReviewRatingRepository;
import com.FYP18.HealthyRecipe.Repository.UserRepository;
import com.FYP18.HealthyRecipe.Repository.Categories.BlogPostCategoryRepo;

// import org.springframework.transaction.annotation.Transactional;
// import jakarta.transaction.Transactional;
 

@Transactional
@Service 
public class BlogService {

    @Autowired
    private BlogRepository blogRepository;

    @Autowired
    private BlogReviewRatingRepository blogReviewRatingRepository;

    @Autowired
    private BlogPostCategoryRepo blogTypeRepo;
    // create, read all, read 1, update, delete for blogReviewRating
 
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
        Optional<BlogPostCategory> blogType = blogTypeRepo.findById(blog.getBlogTypeId());

        blog.setBlogTypeId(!blogType.isPresent() ? null :blogType.get().getId());
         // automatically sets the last updated time
        blog.setLastUpdatedDateTime(LocalDateTime.now());
        return blogRepository.save(blog);
    }

    public Blog suspendBlog(Blog _blog)
    {
        Blog blog = blogRepository.findById(_blog.getId()).get();
        blog.setActive(_blog.getActive());
        return blogRepository.save(blog);
    }

    public List<Blog> getAllBlogs()
    {
        return blogRepository.findAll();
    }

    public List<Blog> findBlogsByKeyword(String keyword)
    {
        return blogRepository.findByKeyword(keyword);
    }
    public Blog findBlogById(long blogId)
    {
        return blogRepository.findById(blogId)
            .orElseThrow(()->  new RuntimeException("Blog Id: "+ blogId + "is not found"));
    }
    

      public Map<String, String> findBlogBy(long id)
      {
        Map<String,String> kvp = new HashMap<>(),
        blogMap = new HashMap<>();

        Blog blog = blogRepository.findById(id)
        .orElseThrow(()->  new RuntimeException("Blog Id: "+ id + "is not found")); 
        
       List<BlogReviewRating> rrs =  blogReviewRatingRepository.findByBlogId(blog.getId());
       System.out.println("CAUSED BYY: " + rrs);
        blogMap = ObjectToMapConverter.convertObjectToMap(blog);
        if(rrs != null && !rrs.isEmpty() )
        {
            kvp = ObjectToMapConverter.convertObjectToMap(rrs);
            blogMap.putAll(kvp); 

        }

        return blogMap;
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

        // i had to include ondelete cascade
        // and also ManyToOne from blogreviewrating -> blog

        // when i also include OneToMany from blog -> blogReviewRating,
        // it ends up in an infinite loop when i call get

        // i need time to research about how to include blogreviewrating
        // insided blog, without creating those sqls columns 
    }

    public List<BlogReviewRating> getAllRatings()
    {
        return blogReviewRatingRepository.findAll();
    }

    public List<BlogReviewRating> getAllRatingsOfUserId(String userId)
    {
        return blogReviewRatingRepository.findByUserID(userId);
    }
    @Autowired
    private UserRepository userRepo;
    public List<BlogReviewRating> getAllRatingsOfBlogId(Long blogId)
    {
        List<BlogReviewRating> toReturn = blogReviewRatingRepository.findByBlogId(blogId);
       for(BlogReviewRating b: toReturn)
       {
        
        UserInfoDTO dto = userRepo.getUserInfoDTO(b.getBlogReviewRatingId().UserID);
        b.setUserDTO(dto);
       }
        return toReturn;
    }
    // create, find, edit, delete rating
    public BlogReviewRating createRating(BlogReviewRating blogReviewRating)
    {
        blogReviewRating.setCreatedDateTime(LocalDateTime.now());
        return blogReviewRatingRepository.save(blogReviewRating);
    }
    public BlogReviewRating updateRating(BlogReviewRating blogReviewRating)
    {
        blogReviewRating.setLastUpdatedDateTime(LocalDateTime.now()); 
        return blogReviewRatingRepository.save(blogReviewRating);
    }
    public void deleteRating(BlogReviewRating blogReviewRating)
    {
        blogReviewRatingRepository.delete(blogReviewRating); 
    }
    public void deleteRatingByBlogId(BlogReviewRatingId id)
    {
        blogReviewRatingRepository.deleteByBlogId(id.UserID, id.blogID);
    } 
}
