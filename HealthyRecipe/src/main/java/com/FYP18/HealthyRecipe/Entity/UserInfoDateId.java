package com.FYP18.HealthyRecipe.Entity;

import java.io.Serializable;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Embeddable 
public class UserInfoDateId implements Serializable  {

    @Column(name= "userId")
    private String userId;
 
    @Column(name= "date")
    private LocalDate date;
 

    @Override
    public String toString()
    {
        return "User ID: " + userId + ", Blog ID: " + date;
    }
} 