// package com.FYP18.HealthyRecipe.SecuringWeb;

// import org.springframework.context.annotation.Bean;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.web.SecurityFilterChain;

// public class SecurityFilterChainConfig {

//     // private final AuthenticationProvider authenticationProvider;
//     // private final JWTAuthenticationFilter 

//     // @Override
//     // protected void configure(HttpSecurity http) throws Exception {
//     //     http
//     //         .authorizeRequests()
//     //             .antMatchers("/public/**").permitAll() // Specify public URLs
//     //             .anyRequest().authenticated()
//     //             .and()
//     //         .formLogin()
//     //             .loginPage("/login")
//     //             .permitAll()
//     //             .and()
//     //         .logout()
//     //             .permitAll();
//     // }

//     @Bean
//     SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception
//     { 
        
//         http.authorizeHttpRequests().requestMatchers("/**").hasRole("USER").and().formLogin();
        
// // http
// // .csrf().disable()
// // .authorizeHttpRequests()
// // .requestMatchers(HttpMethod.POST)
// // .permitAll()
// // .authenticated()
// // .and()
// // .authenticationProvider(authenticationProvider)
// // .addFilterBefore(
// //     jwtAuthenticationFiller,

// // )

//         return http.build(); 
//     }
// }
