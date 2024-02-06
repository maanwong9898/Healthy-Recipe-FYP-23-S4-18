package com.FYP18.HealthyRecipe.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional; 

import com.FYP18.HealthyRecipe.DTO.UserInfoDTO;
import com.FYP18.HealthyRecipe.Entity.SystemAdmin;
import com.FYP18.HealthyRecipe.Entity.User;
import com.FYP18.HealthyRecipe.Repository.BlogRepository;
import com.FYP18.HealthyRecipe.Repository.EducationalContentRepository;
import com.FYP18.HealthyRecipe.Repository.MealPlanRepository;
import com.FYP18.HealthyRecipe.Repository.RecipeRepository;
import com.FYP18.HealthyRecipe.Repository.SystemAdminRepository;
import com.FYP18.HealthyRecipe.Repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

@Service
@Transactional
public class SystemAdminService {
    
    @Autowired
    private RecipeRepository recipeRepo;

    @Autowired 
    private BlogRepository blogRepo;

    @Autowired
    private EducationalContentRepository eduConRepo;

    @Autowired
    private MealPlanRepository mealPlanRepo;


    public Integer findTotalRecipeCount()
    {
        return recipeRepo.findTotalRecipeCount();
    }
    public Integer findTotalBlogCount()
    {
        return blogRepo.findTotalBlogCount();
    }
    public Integer findTotalMealPlanCount()
    {
        return mealPlanRepo.findTotalMealPlanCount();
    }
    public Integer findTotalEducationalContentCount()
    {
        return eduConRepo.findTotalEducationalContentCount();
    }


    @Autowired
    private SystemAdminRepository repo;

    @Autowired
    private UserRepository userRepo;

     
    public List<SystemAdmin> GetAllSystemAdmins()
    {
        return repo.findAll();
    } 
     
    public List<UserInfoDTO> getDTOs()
    {     
        return userRepo.getUsersDTO();
    }
 
    public UserInfoDTO getUser( String id)
    {
        return userRepo.getUserInfoDTO(id);
    } 

    public void suspendUser( User dto)
    {
        User user = userRepo.findById(dto.getId()).get();
        user.setEnabled(dto.getEnabled());
        userRepo.save(user); 
    }
 
    public String getUserInfo(String id)
    {
        try{
            User user = userRepo.findById(id).get();
            user.setPassword("");
            ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
            String json = ow.writeValueAsString(user);
            return json;
        }
        catch(Exception e)
        {
            e.printStackTrace();
            return "";
        }
    }

}
