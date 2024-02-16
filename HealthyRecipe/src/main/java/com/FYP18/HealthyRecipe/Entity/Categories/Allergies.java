package com.FYP18.HealthyRecipe.Entity.Categories;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

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


    
    public void setSubcategoryName(String name) {
        String encryptedName = encodeString(name);
        this.subcategoryName = encryptedName;
    }

    public String getSubcategoryName() {
        String decryptedName = decodeString(subcategoryName);
        return decryptedName;
    }

    public String encodeString(String originalString) { 
        if(originalString == null || originalString.length() == 0)
        { 
            return "";
        }
        byte[] encodedBytes = Base64.getEncoder().encode(originalString.getBytes(StandardCharsets.UTF_8));
        return new String(encodedBytes, StandardCharsets.UTF_8);
    }

    public String decodeString(String encodedString) {
        if(encodedString == null || encodedString.length() == 0)
        { 
            return "";
        }
        byte[] decodedBytes = Base64.getDecoder().decode(encodedString.getBytes(StandardCharsets.UTF_8));
        return new String(decodedBytes, StandardCharsets.UTF_8);
    }
    
}
