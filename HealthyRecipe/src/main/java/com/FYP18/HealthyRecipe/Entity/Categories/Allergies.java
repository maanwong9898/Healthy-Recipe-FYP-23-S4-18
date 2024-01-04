package com.FYP18.HealthyRecipe.Entity.Categories;

import org.springframework.beans.factory.annotation.Value;

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
@Table(name= "Allergies")
public class Allergies {

    // all 8 according to the HPB
    
    // Tree nuts, ground nuts, dairy, milk,
    //  egg, soy, shellfish, fish, gluten
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;
     
    // shouldn't be empty la
    @Column(name = "subcategoryName", nullable = false) 
    private String subcategoryName;
}
