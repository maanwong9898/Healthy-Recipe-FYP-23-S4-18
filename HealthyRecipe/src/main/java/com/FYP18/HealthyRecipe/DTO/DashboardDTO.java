package com.FYP18.HealthyRecipe.DTO;
import java.time.LocalDate;
import java.util.List;
import java.util.Set;

import com.FYP18.HealthyRecipe.Entity.Categories.Allergies;
import com.FYP18.HealthyRecipe.Entity.Categories.DietaryPreferences;
import com.FYP18.HealthyRecipe.Entity.Categories.HealthGoal;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
// this is the info on dashboard

public class DashboardDTO {
    private String fullName;
    private String username;
    private String email;
    private String id;
    private LocalDate dob; //this only applies to registered user + System admin

    private String contactNumber;
    private String companyName;
    private String companyAddress;
    private String UEN;
    private String postalCode;


    private Set<Allergies> allergies;
    private DietaryPreferences dietaryPreferences;
    private HealthGoal healthGoal;
    // private List<String> allergies;
    // private String dietaryPreference;
    // private String 
    // private Long dietaryPreferenceId;
    // private List<
} 
 


// Registered user:
//         Update 
//                 full name
//                 email
//                 DOB

//         Change password

//         Update
//                 Dietary preference
//                 Allergy & restriction
//                 health goal

//         Load Weight history

// Business User:
//         full name
//         contact number
//         company name
//         company address
//         UEN

// dietitian
//         ;