package com.FYP18.HealthyRecipe.Entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "SystemAdmin") 
public class SystemAdmin extends User  {
    
    @PrePersist
    public void prePersist()
    {
        setRole(Role.ADMIN);
    }
    @Column(name= "DOB")
    private LocalDate DOB;
}
