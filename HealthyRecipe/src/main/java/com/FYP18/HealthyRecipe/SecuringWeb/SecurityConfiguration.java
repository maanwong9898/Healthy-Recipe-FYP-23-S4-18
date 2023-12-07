// package com.FYP18.HealthyRecipe.SecuringWeb;
 
// import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration; 
// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.authentication.AuthenticationProvider;
// import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
// import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService; 
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.provisioning.InMemoryUserDetailsManager; 

// import java.util.List;
// import java.util.ArrayList;
// @EnableWebSecurity
// @Configuration
// public class SecurityConfiguration {
 
//     @Bean
//     PasswordEncoder passwordEncoder()
//     {
//         return new BCryptPasswordEncoder();
//     }

//     @Bean
//     AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception
//     {
//         return config.getAuthenticationManager();
//     }

//     @Bean
//     AuthenticationProvider authenticationProvider(UserDetailsService userDetailsService, PasswordEncoder passwordEncoder)
//     {
//         DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
//         daoAuthenticationProvider.setPasswordEncoder(passwordEncoder);
//         daoAuthenticationProvider.setUserDetailsService(userDetailsService);
//         return daoAuthenticationProvider;
//     }

      
//     @Bean
//     UserDetailsService userDetailsService() 
//     {
//         InMemoryUserDetailsManager userDetailsService = new InMemoryUserDetailsManager();
//         // User user = new User();
//         // user.setName("rand");
//         // user.setPassword(passwordEncoder().encode("sadge"));
//         // List<String> randomRoles = new ArrayList<>();
//         // randomRoles.add("random");
//         // user.setRoles(randomRoles); 
//         return userDetailsService;
//     }
// }

