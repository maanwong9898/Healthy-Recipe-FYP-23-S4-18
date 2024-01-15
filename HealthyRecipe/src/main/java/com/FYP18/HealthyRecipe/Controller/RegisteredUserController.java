package com.FYP18.HealthyRecipe.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FYP18.HealthyRecipe.DTO.WeightDTO;
import com.FYP18.HealthyRecipe.Entity.RegisteredUser;
import com.FYP18.HealthyRecipe.Entity.UserInfoOverTime;
import com.FYP18.HealthyRecipe.Repository.RegisteredUserRepository;
import com.FYP18.HealthyRecipe.Repository.UserInfoRepository;
import com.FYP18.HealthyRecipe.Service.RegisteredUserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.security.Principal;
import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin()
@RequestMapping(value = "/registeredUsers")
public class RegisteredUserController {
    @Autowired
    private RegisteredUserRepository repo;

    @Autowired
    private UserInfoRepository infoRepo;

    @Autowired
    private RegisteredUserService service;

    //   @DeleteMapping("/delete/{id}")
    // public ResponseEntity<?> deleteBlog(@PathVariable("id") long id )
  
    @GetMapping("/getWeights/{id}")
    public List<WeightDTO> getWeights(@PathVariable("id") String id)
    {
        return service.getWeights(id);
    }

    @DeleteMapping("/deleteWeight")
    public void deleteWeight(@RequestBody UserInfoOverTime info)
    {
        service.deleteSpecificWeight(info);
    }
    @PostMapping("/setWeight")
    public UserInfoOverTime setWeight(@RequestBody UserInfoOverTime info)
    {    
        return service.setWeight(info);
    }
    
    @GetMapping ("/get")
    public List<UserInfoOverTime> GetAllUsers()
    {
        List<RegisteredUser> controllers = repo.findAll(); 
        List<UserInfoOverTime> infos = infoRepo.findAll();

        for(UserInfoOverTime info : infos)
        {
            System.out.println(info.toString());
        }
        return infos;
    }
}
