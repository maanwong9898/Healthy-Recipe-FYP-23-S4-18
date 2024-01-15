package com.FYP18.HealthyRecipe.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FYP18.HealthyRecipe.DTO.JWTResponseDTO;
import com.FYP18.HealthyRecipe.DTO.LoginRequestDTO;
import com.FYP18.HealthyRecipe.DTO.DashboardDTO;
import com.FYP18.HealthyRecipe.Entity.BusinessUser;
import com.FYP18.HealthyRecipe.Entity.Nutritionist;
import com.FYP18.HealthyRecipe.Entity.RegisteredUser;
import com.FYP18.HealthyRecipe.Entity.SystemAdmin;
import com.FYP18.HealthyRecipe.Entity.User;
import com.FYP18.HealthyRecipe.SecuringWeb.JwtUtil;
import com.FYP18.HealthyRecipe.Service.CustomUserDetailService;
import com.FYP18.HealthyRecipe.Service.LoginService; 
 
@RestController
@CrossOrigin()
@RequestMapping(value = "/register")
public class RegisterController { 

    public RegisterController(LoginService loginService)
    {
        this.loginService = loginService;
    }
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private  AuthenticationManager authenticationManager;
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

    // private CustomUserDetailService userDetailService;

    @PostMapping("/login")
    public JWTResponseDTO authenticateAndGetToken(@RequestBody LoginRequestDTO loginRequestDTO)
    {
        System.out.println("IN");
        Authentication auth = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(loginRequestDTO.getEmail(), loginRequestDTO.getPassword()));

        // System.out.println("AUTH :" +auth.getPrincipal()); 
         if(auth.isAuthenticated())
        {   
            User user = (User) auth.getPrincipal();
            System.out.println(user.toString());
            String token = jwtUtil.createToken(loginRequestDTO.getEmail(),//,
            user.getRole().toString(), user.getId());
            System.out.println("token: " + token);
            // RefreshToken refreshToken = refreshTokenService.createRefreshToken(authRequestDTO.getUsername());
           return JWTResponseDTO.builder() 
                .token(token).build(); 

        } else {
            throw new UsernameNotFoundException("invalid user request..!!");
        }  
    }
    
    @GetMapping("/dashboard/{id}")
    public DashboardDTO getDTO(@PathVariable("id") String id)
    {   
       return loginService.GetDashboardInfo(id);
    }
    @PostMapping("/dashboardSet")
    public DashboardDTO setDTO(@RequestBody DashboardDTO dashboard)
    {   
       return loginService.SetDashboardInfo(dashboard);
    }
    

}
