package com.FYP18.HealthyRecipe.Entity;
  
import jakarta.persistence.Column; 
import jakarta.persistence.Entity;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor; 
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate; 

 
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "RegisteredUser")
public class RegisteredUser extends User  {

    @Column(name= "dob")
    public LocalDate dob ;

    @Column(name= "dietaryPreference")
    public String dietaryPreference;
     
    @PrePersist
    public void prePersist()
    {
        setRole(Role.REGISTERED_USER);
    }
}
