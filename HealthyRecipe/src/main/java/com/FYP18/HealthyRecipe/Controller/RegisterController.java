package com.FYP18.HealthyRecipe.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FYP18.HealthyRecipe.Entity.BusinessUser;
import com.FYP18.HealthyRecipe.Entity.Nutritionist;
import com.FYP18.HealthyRecipe.Entity.RegisteredUser;
import com.FYP18.HealthyRecipe.Entity.SystemAdmin;
import com.FYP18.HealthyRecipe.Service.LoginService; 
 
@RestController
@CrossOrigin()
@RequestMapping(value = "/register")
public class RegisterController { 

    public RegisterController(LoginService loginService)
    {
        this.loginService = loginService;
    }
    // @Autowired
    private final LoginService loginService;
 
    @PostMapping("/admin")
    private ResponseEntity<SystemAdmin> registerSystemAdmin(@RequestBody SystemAdmin user) throws Exception
    {
        SystemAdmin admin = loginService.CreateNewSystemAdmin(user);

        return new ResponseEntity<>(admin, HttpStatus.CREATED);
    }
 
    @PostMapping("/bUser")
    private ResponseEntity<BusinessUser> registerBusinessUser(@RequestBody BusinessUser user) throws Exception
    {
        BusinessUser admin = loginService.CreateNewBusinessUser(user);

        return new ResponseEntity<>(admin, HttpStatus.CREATED);
    }

    @PostMapping("/user")
    private ResponseEntity<RegisteredUser> registerUser(@RequestBody RegisteredUser user) throws Exception
    {
        RegisteredUser admin = loginService.CreateNewRegisterUser(user);

        return new ResponseEntity<>(admin, HttpStatus.CREATED);
    }

    @PostMapping("/nut")
    private ResponseEntity<Nutritionist> registerNutritionist(@RequestBody Nutritionist user) throws Exception
    {
        Nutritionist admin = loginService.CreateNewNutritionist(user);

        return new ResponseEntity<>(admin, HttpStatus.CREATED);
    }
}
