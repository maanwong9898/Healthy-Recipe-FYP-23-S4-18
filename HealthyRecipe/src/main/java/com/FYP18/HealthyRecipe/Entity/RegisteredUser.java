package com.FYP18.HealthyRecipe.Entity;
  
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column; 
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor; 
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.FYP18.HealthyRecipe.Entity.Categories.*; 

 
 
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Setter
@Table(name = "RegisteredUser")
public class RegisteredUser extends User  {

    @Column(name= "dob")
    public LocalDate dob ;
   
    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name="dietaryPreference", insertable = false, updatable = false)  
    public DietaryPreferences dietaryPreferences;
    
    @Column(name = "dietaryPreference", nullable = true)
    private Long dietaryPreferencesId;

    // can have many allergies
    @ManyToMany
    @JoinTable(
        name = "user_allergies",
        joinColumns = @JoinColumn(name = "id"),
        inverseJoinColumns = @JoinColumn(name = "allergy_id"))
    private Set<Allergies> allergies = new HashSet<>();
     
    // many users to one health goal
    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name = "healthGoal", insertable = false, updatable = false)
    public HealthGoal healthGoal;

    @Column(name = "healthGoal", nullable = true)
    private Long healthGoalId;
 
    @PrePersist
    public void prePersist()
    {
        setRole(Role.REGISTERED_USER);
    }
}
