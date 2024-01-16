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
import com.FYP18.HealthyRecipe.Entity.EducationalContent;
import com.FYP18.HealthyRecipe.Entity.EducationalContentReviewRating;
import com.FYP18.HealthyRecipe.Entity.EducationalContentReviewRatingId;
import com.FYP18.HealthyRecipe.Entity.Recipe;
import com.FYP18.HealthyRecipe.Entity.User;
import com.FYP18.HealthyRecipe.Repository.EducationalContentRepository;
import com.FYP18.HealthyRecipe.Repository.EducationalContentReviewRatingRepository;
import com.FYP18.HealthyRecipe.Service.EducationalContentService;

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
@RequestMapping(value = "/educationalContent")
public class EducationalContentController { 

    private final EducationalContentService educationalContentService;

    public EducationalContentController(EducationalContentService educationalContentService)
    {
        this.educationalContentService = educationalContentService;
    }

    @GetMapping ("/get")
    public ResponseEntity<List<EducationalContent>> getAllEducationalContents()  
    { 
        List<EducationalContent> toReturn = educationalContentService.getAllEducationalContents();
        // System.out.println("VEEEE : " +toReturn.get(0).getEducationalContentType().getSubcategoryName());
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }
    @GetMapping("/get/{id}")
    public ResponseEntity<EducationalContent> getEducationalContentById(@PathVariable Long id)
    {
        EducationalContent toReturn = educationalContentService.findEducationalContentById(id);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }

    //  @GetMapping("/get/{id}")
    // public ResponseEntity<Map<String,String>> getEducationalContentById(@PathVariable Long id)
    // {
    //     // EducationalContent toReturn = educationalContentService.findEducationalContentById(id);
    //     Map<String,String> toReturn = educationalContentService.findEducationalContentBy(id);
    //     return new ResponseEntity<>(toReturn, HttpStatus.OK);
    // }


    @GetMapping ("/find")
    public ResponseEntity<List<EducationalContent>> findByKeyword(@RequestParam String keyword)
    { 
        List<EducationalContent> toReturn = educationalContentService.findEducationalContentsByKeyword(keyword);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }

    @GetMapping ("/findByUserId/{id}")
    public ResponseEntity<List<EducationalContent>> findByUserId(@PathVariable String id)
    { 
        List<EducationalContent> toReturn = educationalContentService.findEducationalContentByUserId(id);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }
    

    @PostMapping("/add")
    public ResponseEntity<EducationalContent> addEducationalContent(@RequestBody EducationalContent educationalContent)  
    { 
        EducationalContent toReturn = educationalContentService.createEducationalContent(educationalContent); 
        return new ResponseEntity<>(toReturn, HttpStatus.CREATED);
    }

     
    @PutMapping("/edit")
    public ResponseEntity<EducationalContent> editEducationalContent(@RequestBody EducationalContent educationalContent)  
    { 
        EducationalContent toReturn = educationalContentService.updateEducationalContent(educationalContent);  
        return new ResponseEntity<>(toReturn, HttpStatus.OK);   
    }
    
     @PutMapping("/suspend")
    public ResponseEntity<EducationalContent> suspendEducationalContent(@RequestBody EducationalContent educationalContent)  
    { 
        EducationalContent toReturn = educationalContentService.suspendEducationalContent(educationalContent); 
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }
    @PatchMapping("/update")
    public ResponseEntity<EducationalContent> updateEducationalContent(@RequestBody EducationalContent educationalContent)  
    { 
       EducationalContent toReturn = educationalContentService.updateEducationalContent(educationalContent); 
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEducationalContent(@PathVariable("id") long id )
    {  
        educationalContentService.deleteEducationalContent(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @GetMapping("/getAverage/{educationalContentId}") 
    public ReviewRatingDTO getAvgAndTotalNum(@PathVariable Long educationalContentId)
    {
        return educationalContentService.findAvgByEducationalContentId(educationalContentId);
    }
 
    
    // if its empty, get everything(probably removing it)
    // if its not empty, try to get the userId of 
    @GetMapping("/rating/get")
    public ResponseEntity<List<EducationalContentReviewRating>> getAllEducationalContentReviewRatingOfUserId
                (@RequestParam(required = false) String userId)  
    { 
       List<EducationalContentReviewRating> toReturn = userId ==null ? educationalContentService.getAllRatings():
                                 educationalContentService.getAllRatingsOfUserId(userId);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }
    @GetMapping("/rating/getEducationalContent")
    public ResponseEntity<List<EducationalContentReviewRating>> getAllEducationalContentReviewRatingOfUserId
                (@RequestParam Long educationalContentId)  
    { 
       List<EducationalContentReviewRating> toReturn =   educationalContentService.getAllRatingsOfEducationalContentId(educationalContentId);
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }
    
    @PostMapping("/rating/add")
    public ResponseEntity<EducationalContentReviewRating> addEducationalContentReviewRating(@RequestBody EducationalContentReviewRating educationalContent)  
    { 
       EducationalContentReviewRating toReturn = educationalContentService.createRating(educationalContent); 
        return new ResponseEntity<>(toReturn, HttpStatus.CREATED);
    }
    

    @PutMapping("/rating/edit")
    public ResponseEntity<EducationalContentReviewRating> editEducationalContentReviewRating(@RequestBody EducationalContentReviewRating educationalContent)  
    { 
       EducationalContentReviewRating toReturn = educationalContentService.updateRating(educationalContent); 
        return new ResponseEntity<>(toReturn, HttpStatus.OK);
    }
       
    @DeleteMapping("/rating/delete")
    public ResponseEntity<?> deleteEducationalContentReviewRating(@RequestBody EducationalContentReviewRatingId id )
    {  
        educationalContentService.deleteRatingByEducationalContentId(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}

