package com.FYP18.HealthyRecipe.SecuringWeb;
  
import com.FYP18.HealthyRecipe.Service.CustomUserDetailService; 
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map; 

@Component
public class JwtAuthorizationFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;
    private final ObjectMapper mapper;

    public JwtAuthorizationFilter(JwtUtil jwtUtil, 
                                    ObjectMapper mapper,
                                    CustomUserDetailService userDetailService    ) 
                                {
        this.jwtUtil = jwtUtil;
        this.mapper = mapper;
        this.userDetailService = userDetailService;
    }
    
    // @Autowired
    private final 
    // public 
    CustomUserDetailService userDetailService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, 
                                    HttpServletResponse response, 
                                    FilterChain filterChain) throws ServletException, IOException {
         
                                        
        Map<String, Object> errorDetails = new HashMap<>();
        // Add debug statements
         
        // try { 
            String accessToken = jwtUtil.resolveToken(request);  
            if (accessToken == null ) {
                filterChain.doFilter(request, response);
                return;
            } 
            Claims claims = jwtUtil.resolveClaims(request);
            Boolean validate= jwtUtil.validateClaims(claims);
            // System.out.println("AMMMM" + claims + " " + validate);
            System.out.println("AUTH:" +SecurityContextHolder.getContext().getAuthentication());
            System.out.println(claims.getExpiration() + " EXPIRED: " +claims.getExpiration().before(new Date()));
            if(claims != null & validate){ 
                String email = claims.getSubject();
                // System.out.println("EMAIL: " +email);
                UserDetails user = userDetailService.loadUserByUsername(email);
                 
                Authentication authentication =
                        new UsernamePasswordAuthenticationToken(email,null,
                        user.getAuthorities()); 
                System.out.println("getAuthorities: " + authentication.getAuthorities());
                
                SecurityContextHolder.getContext().setAuthentication(authentication);
                System.out.println("AUTH2:" +SecurityContextHolder.getContext().getAuthentication());

            }

        // }catch (Exception e){
        //     errorDetails.put("message", "LAuthentication Error");
        //     errorDetails.put("details",e.getMessage());
        //     response.setStatus(HttpStatus.FORBIDDEN.value());
        //     response.setContentType(MediaType.APPLICATION_JSON_VALUE);

        //     mapper.writeValue(response.getWriter(), errorDetails);

        // }
        filterChain.doFilter(request, response);
    }
}
