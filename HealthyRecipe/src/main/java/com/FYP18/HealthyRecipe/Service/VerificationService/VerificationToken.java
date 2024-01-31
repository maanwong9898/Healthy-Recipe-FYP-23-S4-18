package com.FYP18.HealthyRecipe.Service.VerificationService;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor 
@NoArgsConstructor
@Entity
@Table(name = "VerificationToken")  
public class VerificationToken {
    
    private String token;
    private LocalDateTime expiration;
    
    @Id 
    @GeneratedValue
    @Column(name = "ID", updatable = false)
    private Long id;
    
    private String email;  
}
