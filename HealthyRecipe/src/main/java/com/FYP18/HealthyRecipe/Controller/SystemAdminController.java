package com.FYP18.HealthyRecipe.Controller;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.mapping.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FYP18.HealthyRecipe.DTO.UserInfoDTO;
import com.FYP18.HealthyRecipe.Entity.SystemAdmin;
import com.FYP18.HealthyRecipe.Entity.User;
import com.FYP18.HealthyRecipe.Repository.SystemAdminRepository;
import com.FYP18.HealthyRecipe.Repository.UserRepository;
import com.FYP18.HealthyRecipe.Service.SystemAdminService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@CrossOrigin()
@RequestMapping(value = "/systemAdmin")
public class SystemAdminController {
    
    @Autowired
    private SystemAdminService service; 
    
    @GetMapping("/get")
    public List<SystemAdmin> GetAllSystemAdmins()
    {
        return service.GetAllSystemAdmins();
    } 
    
    @GetMapping("/getAllUsers")
    public List<UserInfoDTO> getDTOs()
    {     
        return service.getDTOs();
    }

    @GetMapping("/getUser/{id}")
    public UserInfoDTO getUser(@PathVariable String id)
    {
        return service.getUser(id);
    }

    @PutMapping("/suspend")
    public void suspendUser(@RequestBody User dto)
    {
        service.suspendUser(dto); 
    }

    @GetMapping("/getAllUserInfo/{id}")
    public String getUserInfo(@PathVariable String id)
    {
        return service.getUserInfo(id); 
    }

     
    @GetMapping("/findTotalRecipeCount")
    public Integer findTotalRecipeCount()
    {
        return service.findTotalRecipeCount();
    }
    @GetMapping("/findTotalBlogCount")
    public Integer findTotalBlogCount()
    {
        return service.findTotalBlogCount();
    }
    @GetMapping("/findTotalMealPlanCount")
    public Integer findTotalMealPlanCount()
    {
        return service.findTotalMealPlanCount();
    }
    @GetMapping("/findTotalEducationalContentCount")
    public Integer findTotalEducationalContentCount()
    {
        return service.findTotalEducationalContentCount();
    }
}
