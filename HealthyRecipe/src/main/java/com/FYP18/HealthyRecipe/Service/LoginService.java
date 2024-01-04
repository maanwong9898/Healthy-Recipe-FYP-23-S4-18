package com.FYP18.HealthyRecipe.Service;

import java.util.List;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FYP18.HealthyRecipe.Entity.BusinessUser;
import com.FYP18.HealthyRecipe.Entity.Nutritionist;
import com.FYP18.HealthyRecipe.Entity.RegisteredUser;
import com.FYP18.HealthyRecipe.Entity.SystemAdmin;
import com.FYP18.HealthyRecipe.Entity.User;
import com.FYP18.HealthyRecipe.Entity.User.Role;
import com.FYP18.HealthyRecipe.Repository.BusinessUserRepository;
import com.FYP18.HealthyRecipe.Repository.NutritionistRepository;
import com.FYP18.HealthyRecipe.Repository.RegisteredUserRepository;
import com.FYP18.HealthyRecipe.Repository.SystemAdminRepository;
import com.FYP18.HealthyRecipe.Repository.UserRepository;

@Service
public class LoginService {
    
    @Autowired
    private BusinessUserRepository businessUserRepository;

    @Autowired
    private SystemAdminRepository systemAdminRepository;

    @Autowired
    private RegisteredUserRepository registeredUserRepository;

 
    @Autowired
    private NutritionistRepository nutritionistRepository;
    

    @Autowired
    private UserRepository userRepository;
 
    public List<User> GetAllUsers()
    {
        return userRepository.findAll();
    }
    private static final String EMAIL_REGEX =
            "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";

    private static final Pattern pattern = Pattern.compile(EMAIL_REGEX);
    
    private static String USERNAME_REGEX  = "^[a-zA-Z0-9]+$";
 
    private static final Pattern usernamePattern = Pattern.compile(USERNAME_REGEX);

    void CheckForUsername(String username) throws Exception
    {
        if(!usernamePattern.matcher(username).matches())
        {
            throw new Exception("Username is not in valid format.");
        }
    }
    
    void CheckForEmail(String email) throws Exception
    {
        if(!pattern.matcher(email).matches())
        {
            throw new Exception("This is not a valid email");
        }
        User exists = userRepository.findByEmail(email);
        if(exists != null)
        { 
            throw new Exception("Email is already used");
        } 
    }

    public BusinessUser CreateNewBusinessUser(BusinessUser user) throws Exception
    {
        CheckForUsername(user.getUsername());
        CheckForEmail(user.getEmail());
       
        if(user.getUEN() == null || user.getUEN().isEmpty())
        {
            throw new Exception("UEN IS EMPTY");

        }
        BusinessUser businessUser = businessUserRepository.findByUEN(user.getUEN());
 
        if(businessUser != null)
        {
            throw new Exception("UEN already exist");
        }
        return businessUserRepository.save(user); 
    }

     
    public SystemAdmin CreateNewSystemAdmin(SystemAdmin user) throws Exception
    { 
        CheckForUsername(user.getUsername());
        CheckForEmail(user.getEmail());
        user.setRole(Role.ADMIN);
        // user.setRole("ADMIN");
        return systemAdminRepository.save(user); 
    }

    public RegisteredUser CreateNewRegisterUser(RegisteredUser user)throws Exception
    {
        CheckForUsername(user.getUsername());
        CheckForEmail(user.getEmail());
        return registeredUserRepository.save(user);
    }

    public Nutritionist CreateNewNutritionist(Nutritionist user)throws Exception
    {
        CheckForUsername(user.getUsername());
        CheckForEmail(user.getEmail());
        return nutritionistRepository.save(user);
    }
    
 
}
