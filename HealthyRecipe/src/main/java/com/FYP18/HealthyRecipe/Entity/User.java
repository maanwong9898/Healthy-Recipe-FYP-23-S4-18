package com.FYP18.HealthyRecipe.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Collection;

// import org.springframework.security.core.GrantedAuthority;
// import org.springframework.security.core.userdetails.UserDetails;
// @Data
// @Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity 
@Table(name = "USERACCOUNT")
@Inheritance(strategy = InheritanceType.JOINED)
public class User //implements UserDetails
{
    
    @Id
    @GeneratedValue(strategy= GenerationType.UUID)
    @Column(updatable = false)
    public String id;

    // @Enumerated(EnumType.STRING)
    // private Role role;

    // private enum Role
    // {
    //     ADMIN,
    //     REGISTERED_USER,
    //     BUSINESS_USER,
    //     DIETITIAN
    // }
 
    @Column(name="password")
    private String password;
    
    
    @Column(name="username")
    private String username; 


    @Column(name="Email")
    private String Email; 
    // private Boolean enabled; 
    // private Boolean expired; 
    // private Boolean locked;
     
    // @Override
    // public Collection<? extends GrantedAuthority> getAuthorities() {
    //     // TODO Auto-generated method stub
    //     throw new UnsupportedOperationException("Unimplemented method 'getAuthorities'");
    // }
    // @Override
    // public boolean isAccountNonExpired() {
    //     // TODO Auto-generated method stub
    //     throw new UnsupportedOperationException("Unimplemented method 'isAccountNonExpired'");
    // }

    // @Override
    // public boolean isAccountNonLocked() {
    //     return locked;
    // }

    // @Override
    // public boolean isCredentialsNonExpired() {
    //     return expired;
    // }

    // @Override
    // public boolean isEnabled() {
    //     return enabled;
    // }
}
