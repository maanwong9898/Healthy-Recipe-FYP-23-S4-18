package com.FYP18.HealthyRecipe.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FYP18.HealthyRecipe.Entity.SystemAdmin;
import com.FYP18.HealthyRecipe.Repository.SystemAdminRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin()
@RequestMapping(value = "/systemAdmin")
public class SystemAdminController {
    
    @Autowired
    private SystemAdminRepository repo;

    @GetMapping("/get")
    public List<SystemAdmin> GetAllSystemAdmins()
    {
        return repo.findAll();
    } 
    
}
