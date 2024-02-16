package com.FYP18.HealthyRecipe.Controller;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.UUID;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.FYP18.HealthyRecipe.DTO.JWTResponseDTO;
import com.FYP18.HealthyRecipe.DTO.LoginRequestDTO;
import com.FYP18.HealthyRecipe.DTO.DashboardDTO;
import com.FYP18.HealthyRecipe.Entity.BusinessUser;
import com.FYP18.HealthyRecipe.Entity.Nutritionist;
import com.FYP18.HealthyRecipe.Entity.RegisteredUser;
import com.FYP18.HealthyRecipe.Entity.SystemAdmin;
import com.FYP18.HealthyRecipe.Entity.User;
import com.FYP18.HealthyRecipe.Entity.User.Role;
import com.FYP18.HealthyRecipe.SecuringWeb.JwtUtil;
import com.FYP18.HealthyRecipe.Service.CustomUserDetailService;
// import com.FYP18.HealthyRecipe.Service.FirebaseStorageService; 
import com.FYP18.HealthyRecipe.Service.LoginService;
import com.FYP18.HealthyRecipe.Service.VerificationService.VerificationService;
import com.FYP18.HealthyRecipe.Service.VerificationService.VerificationToken; 
 
@RestController
@CrossOrigin()
@RequestMapping(value = "/register")
public class RegisterController { 

    // public RegisterController(LoginService loginService)
    // {
    //     this.loginService = loginService;
    // }
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private  AuthenticationManager authenticationManager;
    
    @Autowired
    private  LoginService loginService;

    @Autowired
    private  VerificationService verificationService;
 
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
    public JWTResponseDTO authenticateAndGetToken(@RequestBody LoginRequestDTO loginRequestDTO) throws UsernameNotFoundException
    { 
        try{
            Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken
                                                (loginRequestDTO.getEmail(), loginRequestDTO.getPassword()));
         
            if(auth.isAuthenticated())
            {   
                User user = (User) auth.getPrincipal(); 
                Role role = user.getRole(); 
                if(!user.getEnabled())
                {
                    return JWTResponseDTO.builder()
                    .error("User is currently suspended. ").build();
                }

                if (role != Role.ADMIN)
                {
                    switch (role)
                    { 
                        case REGISTERED_USER:
                            RegisteredUser rUser = loginService.getRegisteredUser(user.getEmail());

                            if(!rUser.getVerified())
                            { 
                                if(!verificationService.tokenExist(rUser.getEmail()))
                                {    
                                    // if token doesnt exist, create and save 1, and send the email again.
                                    VerificationToken token =  verificationService.createAndSaveToken(rUser.getEmail());
                                    loginService.sendEmail(token); 
                                }  
                                return JWTResponseDTO.builder()
                                        .error("User is not verified yet, please check your email").build();
                            } 
                            break;
                        case BUSINESS_USER:
                            BusinessUser bUser = loginService.getBusinessUser(user.getEmail());

                            if(!bUser.getVerified())
                            {
                                return JWTResponseDTO.builder()
                                        .error("User is not verified yet, please wait for 3-5 business days.").build();
                            }
                            break;
                        case NUTRITIONIST:
                            Nutritionist nUser = loginService.getNutritionist(user.getEmail());
                            if(!nUser.getVerified())
                            {
                                return JWTResponseDTO.builder()
                                        .error("User is not verified yet, please wait for 3-5 business days.").build();
                            }  
                            break;
                    }
                }
                    String token =  jwtUtil.createToken(loginRequestDTO.getEmail(),
                                    user.getRole().toString(), user.getId()); 

                    return JWTResponseDTO.builder().token(token).build();  
                }
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
        return JWTResponseDTO.builder()
                            .error("User credentials are invalid.").build();
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
    

    @PostMapping("/test")
    public void Test(@RequestParam("nutriCert") MultipartFile file)
    {
        System.out.println(file.getOriginalFilename());
    }

    //  @Autowired
    // private FirebaseStorageService service;
    // @PostMapping("/upload") 
	// public String handleFileUpload(@RequestParam("nutriCert") MultipartFile file
	// 		// RedirectAttributes redirectAttributes
    //         ) throws IOException {
 

    //     if(file.isEmpty()) return "EMPTY";
    //     String uploaded = service.uploadFile(file);
	// 	// redirectAttributes.addFlashAttribute("message",
	// 	// 		"You successfully uploaded " + file.getOriginalFilename() + "!");

	// 	return uploaded;
	// }
}
