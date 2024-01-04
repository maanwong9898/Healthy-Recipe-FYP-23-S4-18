// package com.FYP18.HealthyRecipe.SecuringWeb;

// import java.io.IOException;

// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.stereotype.Component;
// import org.springframework.web.filter.OncePerRequestFilter;

// import jakarta.servlet.FilterChain;
// import jakarta.servlet.ServletException;
// import jakarta.servlet.http.HttpServletRequest;
// import jakarta.servlet.http.HttpServletResponse;

// @Component
// public class JWTAuthenticationFilter extends OncePerRequestFilter{

//     // private final UserDetailsService userDetailsService; 
//     @Override
//     protected void doFilterInternal(HttpServletRequest request, 
//                                     HttpServletResponse response, 
//                                     FilterChain filterChain)
//                                     throws ServletException, IOException {

//         String usrName = request.getHeader("userName");
//         logger.info("Successfully authenticated user  " +
//             usrName);
//         filterChain.doFilter(request, response);
        
//         // String authHeader = request.getHeader("Authorization");

//         // if(authHeader ==null || !authHeader.startsWith("Bearer "))
//         // {
//         //     filterChain.doFilter(request, response);
//         //     return;
//         // }

//         // String jwt = authHeader.substring(7);
//         // String subject =    j
//         // UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDetails, filterChain)
//         // SecurityContextHolder.getContext().setAuthentication(authenticationToken);;
//     }
    
//     @Override
//     protected boolean shouldNotFilterAsyncDispatch() {
//         return false;
//     }

//     @Override
//     protected boolean shouldNotFilterErrorDispatch() {
//         return false;
//     }


// }
