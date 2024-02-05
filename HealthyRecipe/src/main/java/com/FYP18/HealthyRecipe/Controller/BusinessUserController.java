package com.FYP18.HealthyRecipe.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
 
import com.FYP18.HealthyRecipe.Entity.BusinessUser; 
import com.FYP18.HealthyRecipe.Repository.BusinessUserRepository;
import com.FYP18.HealthyRecipe.Service.BusinessUserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List; 


@RestController
@CrossOrigin()
@RequestMapping(value = "/businessUser")
public class BusinessUserController {
    @Autowired
    private BusinessUserRepository repo;

    @Autowired
    private BusinessUserService service;

    @GetMapping("/findRecipeCountById/{userId}")
    public Integer findRecipeCountById(@PathVariable("userId") String userId)
    {
        return service.findRecipeCountById(userId);
    }

    @GetMapping("/findBlogCountById/{userId}")
    public Integer findBlogCountById(@PathVariable("userId") String userId)
    {
        return service.findBlogCountById(userId);
    }
    
    @GetMapping("/findEduCountById/{userId}")
    public Integer findEduCountById(@PathVariable("userId") String userId)
    {
        return service.findEduCountById(userId);
    }

    @GetMapping ("/get")
    public List<BusinessUser> GetAllBusinessUsers()
    {
        List<BusinessUser> controllers = repo.findAll(); 
        return controllers;
    } 



}
