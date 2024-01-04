package com.FYP18.HealthyRecipe.Entity;
  
import jakarta.persistence.Column; 
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor; 
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.FYP18.HealthyRecipe.Entity.Categories.*; 

 
 
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "RegisteredUser")
public class RegisteredUser extends User  {

    @Column(name= "dob")
    public LocalDate dob ;
 
     
    @ManyToOne
    @JoinColumn(name = "currentDietaryPreference")
    // @Column(name= "dietaryPreferences")
    public DietaryPreferences dietaryPreferences;
 
    @ManyToMany
    @JoinTable(
        name = "user_allergies",
        joinColumns = @JoinColumn(name = "id"),
        inverseJoinColumns = @JoinColumn(name = "allergy_id"))
    private Set<Allergies> allergies = new HashSet<>();

    // @Column(name= "healthGoal")

    @ManyToOne
    @JoinColumn(name = "currentHealthGoal")
    public HealthGoal healthGoal;

    @PrePersist
    public void prePersist()
    {
        setRole(Role.REGISTERED_USER);
    }
}
