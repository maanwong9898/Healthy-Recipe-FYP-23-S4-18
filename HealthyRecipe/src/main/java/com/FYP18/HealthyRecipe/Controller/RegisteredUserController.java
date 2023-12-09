package com.FYP18.HealthyRecipe.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FYP18.HealthyRecipe.Entity.RegisteredUser; 
import com.FYP18.HealthyRecipe.Repository.RegisteredUserRepository;
import org.springframework.web.bind.annotation.GetMapping; 
import java.util.List;

@RestController
@CrossOrigin()
@RequestMapping(value = "/registeredUsers")
public class RegisteredUserController {
    @Autowired
    private RegisteredUserRepository repo;

    @GetMapping ("/get")
    public List<RegisteredUser> GetAllRecipes()
    {
        List<RegisteredUser> controllers = repo.findAll(); 
        return controllers;
    }
}
