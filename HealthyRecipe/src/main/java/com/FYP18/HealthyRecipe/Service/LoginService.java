package com.FYP18.HealthyRecipe.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FYP18.HealthyRecipe.DTO.DashboardDTO;
import com.FYP18.HealthyRecipe.DTO.DeleteUserRequest;
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
        user.setCreatedDate(LocalDate.now());
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
        user.setCreatedDate(LocalDate.now()); 
        return systemAdminRepository.save(user); 
    }

    public RegisteredUser CreateNewRegisterUser(RegisteredUser user)throws Exception
    {
        CheckForUsername(user.getUsername());
        CheckForEmail(user.getEmail());
        user.setCreatedDate(LocalDate.now());
        return registeredUserRepository.save(user);
    }

    public Nutritionist CreateNewNutritionist(Nutritionist user)throws Exception
    {
        CheckForUsername(user.getUsername());
        CheckForEmail(user.getEmail());
        user.setCreatedDate(LocalDate.now());
        return nutritionistRepository.save(user);
    }
      
    public DashboardDTO SetDashboardInfo(DashboardDTO dto)
    {  
        User user = userRepository.findById(dto.getId()).get();
        Role role =  user.getRole(); 
        user.setUsername(dto.getUsername());
        user.setFullName(dto.getFullName());
        user.setEmail(dto.getEmail()); 

        userRepository.save(user);
        switch(role)
        {
            case BUSINESS_USER:
                BusinessUser b = businessUserRepository.findById(user.getId()).get();
                b.setContactNumber(dto.getContactNumber());
                b.setCompanyName(dto.getCompanyName());
                b.setCompanyAddress(dto.getCompanyAddress());
                b.setUEN(dto.getUEN());
                b.setPostalCode(dto.getPostalCode());  

                businessUserRepository.save(b);
                break;
            case NUTRITIONIST:
                Nutritionist n = nutritionistRepository.findById(user.getId()).get();
                n.setContactNumber(dto.getContactNumber());
                n.setCompanyName(dto.getCompanyName());
                n.setCompanyAddress(dto.getCompanyAddress());
                n.setPostalCode(dto.getPostalCode());

                nutritionistRepository.save(n);
                break; 

            case REGISTERED_USER:
                RegisteredUser rUser = registeredUserRepository.findById(user.getId()).get();
                rUser.setDob(dto.getDob());
                rUser.setAllergies(dto.getAllergies());
                rUser.setDietaryPreferencesId(dto.getDietaryPreferences().getId());
                rUser.setHealthGoalId(dto.getHealthGoal().getId());
                registeredUserRepository.save(rUser);
            break;
            default:
                SystemAdmin admin = systemAdminRepository.findById(user.getId()).get();
                admin.setDOB(dto.getDob());
                systemAdminRepository.save(admin);
                
            break;
       }
       return dto;
    }

    public DashboardDTO GetDashboardInfo(String id)
    {
        DashboardDTO dto = new DashboardDTO();
        User user = userRepository.findById(id).get();
        Role role =  user.getRole();

       dto.setUsername(user.getUsername());
       dto.setFullName(user.getFullName());
       dto.setEmail(user.getEmail());
       dto.setId(user.getId()); 
   
       switch(role)
       {
            case BUSINESS_USER:
                BusinessUser b = businessUserRepository.findById(user.getId()).get();
                dto.setContactNumber(b.getContactNumber());
                dto.setCompanyName(b.getCompanyName());
                dto.setCompanyAddress(b.getCompanyAddress());
                dto.setUEN(b.getUEN());  
                dto.setPostalCode(b.getPostalCode());
                break;
            case NUTRITIONIST:
                Nutritionist n = nutritionistRepository.findById(user.getId()).get();
                dto.setContactNumber(n.getContactNumber());
                dto.setCompanyName(n.getCompanyName());
                dto.setCompanyAddress(n.getCompanyAddress());
                dto.setPostalCode(n.getPostalCode());
                break; 

            case REGISTERED_USER:
                RegisteredUser registeredUser =  registeredUserRepository.findById(user.getId()).get();
                // registeredUser.
                dto.setAllergies(registeredUser.getAllergies());
                dto.setHealthGoal(registeredUser.getHealthGoal());
                dto.setDietaryPreferences(registeredUser.getDietaryPreferences());
                dto.setDob(registeredUser.getDob());
                break;
            default:
                LocalDate date = systemAdminRepository.findById(user.getId()).get().getDOB();

              dto.setDob(date); 
            break;
        }   
        return dto;
    }

    public List<Nutritionist> getUnverifiedNutritionists()
    {
        List<Nutritionist> toReturn = nutritionistRepository.findUnverifiedUsers();

        for(Nutritionist n :toReturn)
        {
            n.setPassword("");
        }
        return toReturn;
    }
    public List<BusinessUser> getUnverifiedBusinessUser()
    {
        List<BusinessUser> toReturn = businessUserRepository.findUnverifiedUsers();

        for(BusinessUser b: toReturn)
        {
            b.setPassword("");
        }
        return toReturn;
    }

    public void verifyUser(String userId)
    {
        User user = userRepository.findById(userId).get();
        user.setEnabled(true);
        userRepository.save(user);
        // return "Verified";
    }
    public void deleteUser(DeleteUserRequest request )
    {
        if(request.getRole().equals(Role.BUSINESS_USER))
        {
            businessUserRepository.deleteById(request.getId());
        }
        else
        {
            nutritionistRepository.deleteById(request.getId());
        }
        userRepository.deleteById(request.getId());
    }
    // public DashboardDTO verifyUser(String userId)
    // {
    //     User user = userRepository.findById(userId).get();

        
    // }
}
