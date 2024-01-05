package com.FYP18.HealthyRecipe.Service;
   
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.FYP18.HealthyRecipe.Entity.User;
import com.FYP18.HealthyRecipe.Repository.UserRepository;
 

@Service
public class CustomUserDetailService implements UserDetailsService {
    private final UserRepository userRepository;
    public CustomUserDetailService(UserRepository userRepository) { 
        this.userRepository = userRepository;
    }
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        User user = userRepository.findByEmail(email); 
        if(user == null)
        {
            throw new UsernameNotFoundException("User " + email + " not found!");
        } 
        UserDetails userDetails =
                org.springframework.security.core.userdetails.User.builder()
                        .username(user.getEmail())
                        .password(user.getPassword())
                        .roles(user.getRole().toString())
                        // .authorities(authorities)
                        // .roles(role)
                        .build();

        // System.out.println(userDetails.toString() + " SSTRING");
        return userDetails;
    }
}
 
