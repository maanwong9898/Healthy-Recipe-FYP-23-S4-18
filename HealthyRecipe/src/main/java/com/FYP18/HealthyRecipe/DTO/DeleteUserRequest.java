package com.FYP18.HealthyRecipe.DTO;

import com.FYP18.HealthyRecipe.Entity.User.Role;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DeleteUserRequest {
    // Role getRole();
    // String getId();
    private Role role;
    private String id;
}
