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
import com.FYP18.HealthyRecipe.DTO.ReviewRatingDTO;
import com.FYP18.HealthyRecipe.DTO.UserInfoDTO;
import com.FYP18.HealthyRecipe.Entity.EducationalContent;
import com.FYP18.HealthyRecipe.Entity.EducationalContentReviewRating;
import com.FYP18.HealthyRecipe.Entity.EducationalContentReviewRatingId;
import com.FYP18.HealthyRecipe.Entity.Categories.EducationalContentCategory;
import com.FYP18.HealthyRecipe.Entity.Categories.EducationalContentCategory;
import com.FYP18.HealthyRecipe.Repository.EducationalContentRepository;
import com.FYP18.HealthyRecipe.Repository.EducationalContentReviewRatingRepository;
import com.FYP18.HealthyRecipe.Repository.UserRepository;
import com.FYP18.HealthyRecipe.Repository.Categories.EducationalContentCategoryRepo;
import com.FYP18.HealthyRecipe.Repository.Categories.EducationalContentCategoryRepo;
 
// import org.springframework.transaction.annotation.Transactional;
// import jakarta.transaction.Transactional;
 

@Transactional
@Service 
public class EducationalContentService {

    @Autowired
    private EducationalContentRepository educationalContentRepository;

    @Autowired
    private EducationalContentReviewRatingRepository educationalContentReviewRatingRepository;

    @Autowired
    private EducationalContentCategoryRepo educationalContentTypeRepo;
 
    // create, read all, read 1, update, delete for educationalContentReviewRating
     
    public EducationalContent createEducationalContent(EducationalContent educationalContent)
    {
        educationalContent.setCreatedDateTime(LocalDateTime.now());
        educationalContent.setActive(true);
        if(educationalContent.getPublisher() == null)
        {  
            educationalContent.setPublisher(userRepo.findById(educationalContent.getUserID().getId()).get().getFullName());
        }

        Optional<EducationalContentCategory> educationalContentType = educationalContentTypeRepo.findById(educationalContent.getEducationalContentTypeId());
  
        educationalContent.setEducationalContentTypeId((educationalContentType.isPresent() ? educationalContentType.get().getId(): null));
        
     
        
        // for some reason, i thought when i set the defaults in the 
        // columnDefinition would work, but it doesnt, i have to set the default values
        // i want here..

        return educationalContentRepository.save(educationalContent);
    }

    // i need to specify a couple more functions
    // as my EducationalContent entity only allows modification of
    // a) Active status, by system admin // user of educationalContent's userId
    // b) Publisher // title // info, by user of educationalContent's userId nia
    // the rest of the field / column shouldn't be updatable by any users

    // but for now, all content thats specified in the argument would be used 
    // to overwrites all content
    public EducationalContent updateEducationalContent(EducationalContent educationalContent)
    {  
        Optional<EducationalContentCategory> educationalContentType = educationalContentTypeRepo.findById(educationalContent.getEducationalContentTypeId());
  
        educationalContent.setEducationalContentTypeId((educationalContentType.isPresent() ? educationalContentType.get().getId(): null));
        
     
        educationalContent.setLastUpdatedDateTime(LocalDateTime.now());
        return educationalContentRepository.save(educationalContent);
    }

    public EducationalContent suspendEducationalContent(EducationalContent _educationalContent)
    {
        EducationalContent educationalContent = educationalContentRepository.findById(_educationalContent.getId()).get();
        educationalContent.setActive(_educationalContent.getActive());
        return educationalContentRepository.save(educationalContent);
    }

    public List<EducationalContent> getAllEducationalContents()
    {  
        return educationalContentRepository.findAll() ;
    }

    public List<EducationalContent> findEducationalContentsByKeyword(String keyword)
    {
        return educationalContentRepository.findByKeyword(keyword);
    }
    public EducationalContent findEducationalContentById(long educationalContentId)
    {
        return educationalContentRepository.findById(educationalContentId)
            .orElseThrow(()->  new RuntimeException("EducationalContent Id: "+ educationalContentId + "is not found"));
    }
    

      public Map<String, String> findEducationalContentBy(long id)
      {
        Map<String,String> kvp = new HashMap<>(),
        educationalContentMap = new HashMap<>();

        EducationalContent educationalContent = educationalContentRepository.findById(id)
        .orElseThrow(()->  new RuntimeException("EducationalContent Id: "+ id + "is not found")); 
        
       List<EducationalContentReviewRating> rrs =  educationalContentReviewRatingRepository.findByEducationalContentId(educationalContent.getId());
       System.out.println("CAUSED BYY: " + rrs);
        educationalContentMap = ObjectToMapConverter.convertObjectToMap(educationalContent);
        if(rrs != null && !rrs.isEmpty() )
        {
            kvp = ObjectToMapConverter.convertObjectToMap(rrs);
            educationalContentMap.putAll(kvp); 

        }

        return educationalContentMap;
    }
    // this is a failure, i have spent too much time :)
    // public List<EducationalContent> findEducationalContentByUserId(User userId)
    // {
    //     return educationalContentRepository.findByUserID(userId);
    // }
 
    public List<EducationalContent> findEducationalContentByUserId(String userId)
    {
        return educationalContentRepository.findByUserID(userId);
    }
    public ReviewRatingDTO findAvgByEducationalContentId(Long educationalContentId)
    {
        return educationalContentReviewRatingRepository.findAverageDTOByEducationalContentId(educationalContentId);
    }
    public void deleteEducationalContent(long id)
    {
        // educationalContentReviewRatingRepository.deleteByEducationalContentId(id);
        educationalContentRepository.deleteByEducationalContentId(id); 
        // apparently once i set the relationship accordingly, there's no need for me 
        // to delete educationalContentReviewRatings myself

        // i had to include ondelete cascade
        // and also ManyToOne from educationalContentreviewrating -> educationalContent

        // when i also include OneToMany from educationalContent -> educationalContentReviewRating,
        // it ends up in an infinite loop when i call get

        // i need time to research about how to include educationalContentreviewrating
        // insided educationalContent, without creating those sqls columns 
    }

    public List<EducationalContentReviewRating> getAllRatings()
    {
        return educationalContentReviewRatingRepository.findAll();
    }

    public List<EducationalContentReviewRating> getAllRatingsOfUserId(String userId)
    {
        return educationalContentReviewRatingRepository.findByUserID(userId);
    }
    @Autowired
    private UserRepository userRepo;
    public List<EducationalContentReviewRating> getAllRatingsOfEducationalContentId(Long educationalContentId)
    {
        List<EducationalContentReviewRating> toReturn = educationalContentReviewRatingRepository.findByEducationalContentId(educationalContentId);
       for(EducationalContentReviewRating b: toReturn)
       {
        
        UserInfoDTO dto = userRepo.getUserInfoDTO(b.getEducationalContentReviewRatingId().UserID);
        b.setUserDTO(dto);
       }
        return toReturn;
    }
    // create, find, edit, delete rating
    public EducationalContentReviewRating createRating(EducationalContentReviewRating educationalContentReviewRating)
    {
        educationalContentReviewRating.setCreatedDateTime(LocalDateTime.now());
        return educationalContentReviewRatingRepository.save(educationalContentReviewRating);
    }
    public EducationalContentReviewRating updateRating(EducationalContentReviewRating educationalContentReviewRating)
    {
        educationalContentReviewRating.setLastUpdatedDateTime(LocalDateTime.now()); 
        return educationalContentReviewRatingRepository.save(educationalContentReviewRating);
    }
    public void deleteRating(EducationalContentReviewRating educationalContentReviewRating)
    {
        educationalContentReviewRatingRepository.delete(educationalContentReviewRating); 
    }
    public void deleteRatingByEducationalContentId(EducationalContentReviewRatingId id)
    {
        educationalContentReviewRatingRepository.deleteByEducationalContentId(id.UserID, id.educationalContentID);
    } 
}
