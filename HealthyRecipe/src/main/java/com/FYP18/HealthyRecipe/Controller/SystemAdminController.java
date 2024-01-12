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
    private SystemAdminRepository repo;

    @Autowired
    private UserRepository userRepo;

    
    @GetMapping("/get")
    public List<SystemAdmin> GetAllSystemAdmins()
    {
        return repo.findAll();
    } 
    
    @GetMapping("/getAllUsers")
    public List<UserInfoDTO> getDTOs()
    {     
        return userRepo.getUsersDTO();
    }

    @GetMapping("/getUser/{id}")
    public UserInfoDTO getUser(@PathVariable String id)
    {
        return userRepo.getUserInfoDTO(id);
    }

    @PutMapping("/suspend")
    public void suspendUser(@RequestBody User dto)
    {
        User user = userRepo.findById(dto.getId()).get();
        user.setEnabled(dto.getEnabled());
        userRepo.save(user); 
    }

    @GetMapping("/getAllUserInfo/{id}")
    public String getUserInfo(@PathVariable String id)
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
