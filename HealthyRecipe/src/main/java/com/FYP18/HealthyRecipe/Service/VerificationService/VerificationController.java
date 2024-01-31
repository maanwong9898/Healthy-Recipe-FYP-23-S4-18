package com.FYP18.HealthyRecipe.Service.VerificationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
 

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin()
@RequestMapping(value = "/verify") 
public class VerificationController {

    @Autowired 
    private VerificationService verifyService;

    @GetMapping("confirm")
    public String verify(@RequestParam("token") String token)
    {
        return verifyService.confirmToken(token);
    }
}
