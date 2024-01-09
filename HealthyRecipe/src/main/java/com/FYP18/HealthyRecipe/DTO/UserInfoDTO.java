package com.FYP18.HealthyRecipe.DTO;
import java.time.LocalDate;

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

public class UserInfoDTO {
    private String fullName;
    private String username;
    private String email;
    
    private LocalDate dob; //this only applies to registered user + System admin

    private String contactNumber;
    private String companyName;
    private String companyAddress;
    private String UEN;

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