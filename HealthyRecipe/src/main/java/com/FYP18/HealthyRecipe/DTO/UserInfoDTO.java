package com.FYP18.HealthyRecipe.DTO;

import java.time.LocalDate;

public interface UserInfoDTO {
    String getUsername(); 
    String getId(); 
    String getRole();
    String getEmail();
    LocalDate getCreatedDate();
    Boolean getEnabled();
}
