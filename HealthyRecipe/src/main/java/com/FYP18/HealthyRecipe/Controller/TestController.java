package com.FYP18.HealthyRecipe.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.annotation.security.RolesAllowed;

import org.springframework.web.bind.annotation.GetMapping;


@RestController
@CrossOrigin()
@RequestMapping(value = "/test")  
public class TestController {
    // this is meant to test authorisation 
    @GetMapping("/admin") 
    public String adminTest()
    {
        return "Hello admin";
    }

    @GetMapping("/user") 
    public String userTest()
    {
        return "Hello user";
    }

    @GetMapping("/business") 
    public String businessTest()
    {
        return "Hello business";
    }

    @GetMapping("/nut") 
    public String nutritionistTest()
    {
        return "Hello nutritionistTest";
    }
      
    @GetMapping("/userAndAdmin")
     public String userAndAdminTest()
    {
        return "Hello user and admin";
    }
    
}
