package com.FYP18.HealthyRecipe.SecuringWeb;

import java.beans.Customizer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.FYP18.HealthyRecipe.Repository.UserRepository;
import com.FYP18.HealthyRecipe.Service.CustomUserDetailService;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

    // passwordEncoder -> securityFilterChain -> configure -> filterChain ->
    // authenticationManager
    // @Bean
    // public SecurityFilterChain securityFilterChain(HttpSecurity http) throws
    // Exception
    // {
    // System.out.println("securityFilterChain");
    // http
    // .authorizeHttpRequests((authorize) -> authorize

    // // .requestMatchers("/login").permitAll()
    // .anyRequest().authenticated()
    // );

    // return http.build();
    // }
    // private final CustomUserDetailService userDetailsService;
    // private final JwtAuthorizationFilter jwtAuthorizationFilter;

    // public WebSecurityConfig(CustomUserDetailService customUserDetailsService)
    // //, JwtAuthorizationFilter jwtAuthorizationFilter)
    // {
    // this.userDetailsService = customUserDetailsService;
    // // this.jwtAuthorizationFilter = jwtAuthorizationFilter;
    // }

    // @Autowired
    // public UserRepository userRepository;

    // @Bean
    // public CustomUserDetailService userDetailService()
    // {
    // return new CustomUserDetailService(userRepository);
    // }

    @Bean
    @SuppressWarnings("deprecation")
    public PasswordEncoder passwordEncoder() {

        System.out.println("passwordEncoder");
        return (NoOpPasswordEncoder) NoOpPasswordEncoder.getInstance();
        // return new BCryptPasswordEncoder(); //
        // PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(UserDetailsService userDetailsService,
            PasswordEncoder passwordEncoder) {

        System.out.println("authenticationManager");

        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(userDetailsService);
        authenticationProvider.setPasswordEncoder(passwordEncoder);
        return new ProviderManager(authenticationProvider);
    }

    // @Bean
    // public SecurityFilterChain configure (HttpSecurity http) throws Exception
    // {
    // System.out.println("configure");
    // http
    // .csrf(csrf-> csrf.disable())
    // .sessionManagement(x->
    // x.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
    // .authorizeHttpRequests((authz)->
    // authz
    // .anyRequest()
    // // .requestMatchers("/public")
    // .permitAll()
    // // .anyRequest()
    // // .authenticated()
    // );

    // return http.build();
    // }
    // @Bean
    // public UserDetailsService users()
    // {
    // UserDetails admin = User.builder()
    // .username("admin")
    // .password("pw")
    // .roles("ADMIN")
    // .build();
    // UserDetails user = User.builder()
    // .username("user")
    // .password("pw")
    // .roles("USER")
    // .build();
    // return new InMemoryUserDetailsManager(admin, user);
    // }

    // @Bean
    // public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

    // System.out.println("filterChain");

    // http.authorizeHttpRequests(req->
    // req.anyRequest().authenticated());

    // // http
    // // .csrf()
    // // .formLogin()
    // // .and()
    // // .headers().disable()
    // // .csrf().disable()
    // // .antMatcher("/**")
    // // .authorizeRequests()
    // // .antMatchers("/public").permitAll()
    // // .antMatchers("/h2-console/**").permitAll()
    // // //...
    // // .anyRequest()
    // // .authenticated();
    // return http.build();
    // }
    @Autowired
    public JwtAuthorizationFilter jwtAuthorizationFilter;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        System.out.println("FilterChain");
        http
                .csrf(csrf -> csrf.disable())
                // Disabling CSRF protection means that Spring Security won't generate and
                // validate these tokens.
                // While this solves the issue for now, it's important to understand that
                // disabling CSRF protection
                // can expose your application to CSRF attacks. It's generally recommended to
                // keep CSRF protection
                // enabled and properly configure your frontend code to include and send the
                // CSRF token with each request.

                .authorizeHttpRequests((authz) -> authz
                        // .anyRequest().permitAll()
                        // .requestMatchers("/login").permitAll()
                        // .requestMatchers("/test/admin").hasRole("ADMIN")
                        // .requestMatchers("/test/business").hasRole("BUSINESS_USER")
                        // .requestMatchers("/test/nut").hasRole("NUTRITIONIST")
                        // .requestMatchers("/test/user").hasRole("REGISTERED_USER")
                        // .requestMatchers("/test/userAndAdmin").hasAnyRole("ADMIN", "USER")
                        // .requestMatchers("/register/**").permitAll()
                        .anyRequest().permitAll())

                .sessionManagement(x -> x.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .addFilterBefore(jwtAuthorizationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
