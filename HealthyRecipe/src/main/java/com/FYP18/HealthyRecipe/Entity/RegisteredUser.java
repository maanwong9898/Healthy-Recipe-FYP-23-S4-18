package com.FYP18.HealthyRecipe.Entity;
 
// import org.apache.catalina.User; 

import jakarta.persistence.OneToOne;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Collection;
import java.util.Iterator;

@Data 
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "RegisteredUser")
public class RegisteredUser  {

    public LocalDate dateOfBirth ;

    public String DietaryPreference;
  
    @Id
    @OneToOne
    public User user;
}
