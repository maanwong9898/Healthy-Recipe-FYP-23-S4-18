package com.FYP18.HealthyRecipe.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder 
public class PasswordChangeRequest {
    private String id, 
                    oldPassword,
                    newPassword; 
}
