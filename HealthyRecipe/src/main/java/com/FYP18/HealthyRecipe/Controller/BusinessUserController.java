package com.FYP18.HealthyRecipe.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FYP18.HealthyRecipe.Entity.BusinessUser; 
import com.FYP18.HealthyRecipe.Repository.BusinessUserRepository;
import org.springframework.web.bind.annotation.GetMapping; 
import java.util.List;

@RestController
@CrossOrigin()
@RequestMapping(value = "/businessUser")
public class BusinessUserController {
    @Autowired
    private BusinessUserRepository repo;

    @GetMapping ("/get")
    public List<BusinessUser> GetAllRecipes()
    {
        List<BusinessUser> controllers = repo.findAll(); 
        return controllers;
    }
}
