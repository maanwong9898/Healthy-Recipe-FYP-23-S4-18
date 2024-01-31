package com.FYP18.HealthyRecipe.Service.VerificationService;

import java.time.LocalDateTime;

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
    public VerificationToken saveToken(VerificationToken token)
    {
        return repo.save(token);
    }
     
}
