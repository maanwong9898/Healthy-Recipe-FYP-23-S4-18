package com.FYP18.HealthyRecipe.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FYP18.HealthyRecipe.DTO.DeleteUserRequest;
import com.FYP18.HealthyRecipe.DTO.PasswordChangeRequest;
import com.FYP18.HealthyRecipe.DTO.RoleCountRequest;
import com.FYP18.HealthyRecipe.Entity.BusinessUser;
import com.FYP18.HealthyRecipe.Entity.Nutritionist;
import com.FYP18.HealthyRecipe.Entity.User;
import com.FYP18.HealthyRecipe.Service.LoginService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@CrossOrigin()
@RequestMapping(value = "/allUsers") 
public class UserAccountController {
    
    @Autowired
    public LoginService loginService;

    @GetMapping(value= "/all")
    public List<User> GetAllUsers()
    {
        return loginService.GetAllUsers();
    }
   
    @GetMapping("/getAllUnverifiedBusinessUser")
    public List<BusinessUser> getBusinessUsers()
    {
         return loginService.getUnverifiedBusinessUser();
    }

    @GetMapping("/getAllUnverifiedNutritionists")
    public List<Nutritionist> getNutritionist()
    {
         return loginService.getUnverifiedNutritionists();
    }

    @PostMapping("/verifyUser/{userId}")
    public void verifyUser(@PathVariable String userId)
    {
        loginService.verifyUser(userId);
    }
    
    @DeleteMapping("/rejectUser")
    public void deleteUser(@RequestBody DeleteUserRequest req)
    {
        loginService.deleteUser(req);
    }

    @PostMapping("/changePassword")
    public ResponseEntity<String> changePassword(@RequestBody PasswordChangeRequest entity) 
    {   
        String answer = loginService.updatePassword(entity);
        HttpStatus status = answer.equals("Password Updated!") ? HttpStatus.OK :
         HttpStatus.NOT_ACCEPTABLE; 
        return  new ResponseEntity<>(answer, status); 

    }
    
}
