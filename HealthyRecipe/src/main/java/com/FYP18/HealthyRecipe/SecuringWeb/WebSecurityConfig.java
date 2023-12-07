// package com.FYP18.HealthyRecipe.SecuringWeb;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
// import org.springframework.security.core.userdetails.User;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.provisioning.InMemoryUserDetailsManager;
// import org.springframework.security.web.SecurityFilterChain;

// @Configuration
// @EnableWebSecurity
// public class WebSecurityConfig {
//     @Bean
//     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception
//     {
//         http.addFilterBefore(null, null);
//         return http.build();
//     } 
    
//     @Bean
//     public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//         http
//             .authorizeHttpRequests((authz) -> authz
//                 .anyRequest().authenticated()
//             )
//             .httpBasic(withDefaults());
//         return http.build();
//     }

//         @Bean
//     public WebSecurityCustomizer webSecurityCustomizer() {
//         return (web) -> web.ignoring().antMatchers("/ignore1", "/ignore2");
//     }
 
// }
