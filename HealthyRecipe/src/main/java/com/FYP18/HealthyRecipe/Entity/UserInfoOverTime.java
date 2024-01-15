package com.FYP18.HealthyRecipe.Entity;

import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder 
@NoArgsConstructor
@AllArgsConstructor
@Entity 
public class UserInfoOverTime {
  
    @EmbeddedId
    private UserInfoDateId id;
  
    @Column(name= "weight")
    private double weight;
 
   
    @Override
    public String toString()
    {
        return id.toString() + " "+ weight;
    }
}

 