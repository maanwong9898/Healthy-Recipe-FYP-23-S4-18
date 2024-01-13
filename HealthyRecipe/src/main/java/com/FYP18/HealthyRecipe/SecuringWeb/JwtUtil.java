package com.FYP18.HealthyRecipe.SecuringWeb; 
  
import jakarta.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties.Jwt;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

import com.FYP18.HealthyRecipe.Entity.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.JwtParser;
// import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.security.Key;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

@Component
public class JwtUtil {


    private final String secret_key = "mysecretkey";  
    
 
    private final JwtParser jwtParser;
    public JwtUtil(){ 
        
        this.jwtParser = Jwts.parser().setSigningKey(secret_key.getBytes()); 
    } 

    public String createToken(String email
    , String role, String id
    ) {
        Date tokenCreateTime = new Date();
                                // this timing + 10 minutes
        Date tokenValidity = new Date(tokenCreateTime.getTime() 
                            + TimeUnit.DAYS.toMillis(10));

        Claims claims = Jwts.claims()
                        .setSubject(email)
                        .setIssuedAt(tokenCreateTime);

        claims.put("role", role);
        claims.put("id", id);
        String toReturn = Jwts.builder()
                .setClaims(claims)
                .setExpiration(tokenValidity)
                .signWith(SignatureAlgorithm.HS256, secret_key.getBytes())
                .compact(); 
        return  toReturn;
    }
  
    // at this part i can get expiredJWTException
    private Claims parseJwtClaims(String token) {
 
        Jws<Claims> j = jwtParser
        // Jwts.parser().setSigningKey(secret_key.getBytes())
        // .parseClaimsJws(token)
        .parseClaimsJws(token); 
        return j.getBody();
    }

    public Claims resolveClaims(HttpServletRequest req) {
        try {
            String token = resolveToken(req);
            if (token != null) {
                return parseJwtClaims(token);
            }
            return null;
        } catch (ExpiredJwtException ex) {
            req.setAttribute("expired", ex.getMessage());
            throw ex;
        } catch (Exception ex) {
            req.setAttribute("invalid", ex.getMessage());
            throw ex;
        }
    }

    public String resolveToken(HttpServletRequest request) { 
        final String TOKEN_HEADER = "Authorization";
        String bearerToken = request.getHeader(TOKEN_HEADER);
        final String TOKEN_PREFIX = "Bearer "; 
        if (bearerToken != null && bearerToken.startsWith(TOKEN_PREFIX)) {
            return bearerToken.substring(TOKEN_PREFIX.length());
        }
        return null;
    }

    public boolean validateClaims(Claims claims) throws AuthenticationException {
        try {
            return claims.getExpiration().after(new Date());
        } catch (Exception e) {
            throw e;
        }
    }

    public String getEmail(Claims claims) {
        return claims.getSubject();
    }
 


}