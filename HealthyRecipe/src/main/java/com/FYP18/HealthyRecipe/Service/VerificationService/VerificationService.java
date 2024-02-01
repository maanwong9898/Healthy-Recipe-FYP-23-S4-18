package com.FYP18.HealthyRecipe.Service.VerificationService;

import java.time.LocalDateTime;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.FYP18.HealthyRecipe.Entity.RegisteredUser;
import com.FYP18.HealthyRecipe.Entity.User;
import com.FYP18.HealthyRecipe.Repository.RegisteredUserRepository;
import com.FYP18.HealthyRecipe.Repository.UserRepository;

@Transactional
@Service
public class VerificationService {
    
    @Autowired
    private VerificationTokenRepo repo;

    @Autowired
    private RegisteredUserRepository userRepo;

    public Boolean tokenExist(String email)
    {
        VerificationToken vToken = repo.findByEmail(email);
        if(vToken == null)
        {
            return false;
        }
        // if it alrd expired
        if(vToken.getExpiration().isBefore(LocalDateTime.now()))
        {   
            repo.delete(vToken);
            return false;
        }
        return true;
    }
    public String confirmToken(String token)
    {
        VerificationToken vToken = repo.findByToken(token);

        if(vToken == null)
        {
            return "Such token doesn't exist";
        }
        if(vToken.getExpiration().isBefore(LocalDateTime.now()))
        {
            repo.delete(vToken);
            return "Its too late";
        }

        RegisteredUser user = userRepo.findByEmail(vToken.getEmail());
        user.setVerified(true);
        userRepo.save(user);
        repo.delete(vToken);
        return "User " + user.getUsername() + " is now verified! You may proceed to login.";
    }
 

    public VerificationToken createAndSaveToken(String email)
    { 
        VerificationToken token = new VerificationToken();
        token.setEmail(email);
        token.setToken(UUID.randomUUID().toString());
        token.setExpiration(LocalDateTime.now().plusMinutes(15));
 
        return repo.save(token);
    }
     
}
