package com.FYP18.HealthyRecipe.SecuringWeb;
  
import com.FYP18.HealthyRecipe.Service.CustomUserDetailService; 
import com.fasterxml.jackson.databind.ObjectMapper;
// import com.google.firebase.auth.FirebaseAuth;
// import com.google.firebase.auth.FirebaseAuthException;
// import com.google.firebase.auth.FirebaseToken;


import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;  
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType; 
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails; 
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException; 
import java.util.HashMap; 
import java.util.Map; 
 
@Component
public class JwtAuthorizationFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;
    private final ObjectMapper mapper;
    private final CustomUserDetailService userDetailService;

    public JwtAuthorizationFilter(JwtUtil jwtUtil, 
                                    ObjectMapper mapper,
                                    CustomUserDetailService userDetailService    ) 
                                {
        this.jwtUtil = jwtUtil;
        this.mapper = mapper;
        this.userDetailService = userDetailService;
    }
     

    @Override
    protected void doFilterInternal(HttpServletRequest request, 
                                    HttpServletResponse response, 
                                    FilterChain filterChain) throws ServletException, IOException
                                     {
          
        Map<String, Object> errorDetails = new HashMap<>();
         try { 
            String accessToken = jwtUtil.resolveToken(request);  

            if (accessToken == null ) {
                filterChain.doFilter(request, response);
                return;
            }   

            Claims claims = jwtUtil.resolveClaims(request);
            Boolean validate= jwtUtil.validateClaims(claims);
 
            if(claims != null & validate){ 
                String email = claims.getSubject();
                 UserDetails user = userDetailService.loadUserByUsername(email);
                 
                Authentication authentication =
                        new UsernamePasswordAuthenticationToken(email,null,
                        user.getAuthorities()); 
                 
                SecurityContextHolder.getContext().setAuthentication(authentication);
 
            }

        }catch (Exception e){ 
            errorDetails.put("details",e.getMessage()); 
            e.printStackTrace();
            response.setStatus(HttpStatus.FORBIDDEN.value());
            response.setContentType(MediaType.APPLICATION_JSON_VALUE);

            mapper.writeValue(response.getWriter(), errorDetails);

        }
        filterChain.doFilter(request, response);
    }
}
