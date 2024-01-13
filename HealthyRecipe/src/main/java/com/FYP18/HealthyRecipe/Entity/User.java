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
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

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
public class User implements UserDetails
{
    //<T extends Enum<T>>
    
    @Id
    @GeneratedValue(strategy= GenerationType.UUID)
    @Column(name = "id", updatable = false, nullable = false)
    public String id;

    @Column(name="role",nullable = false)
    @Enumerated(EnumType.STRING)
    private Role role;

    public enum Role
    {
        ADMIN,
        REGISTERED_USER,
        BUSINESS_USER,
        NUTRITIONIST
    }
 
    @Column(name="password")
    private String password;
    
    
    @Column(name="username")
    private String username; 


    @Column(name="email", unique = true)
    private String email; 

    @Column(name="Full_Name")
    private String fullName;

    @Column(name="enabled",columnDefinition ="boolean default false")
    private Boolean enabled = false; 

    @Column
    private LocalDate createdDate;
    // @Column(name="expired",columnDefinition ="boolean default false")
    // private Boolean expired = false; 

    // @Column(name="locked",columnDefinition ="boolean default false")
    // private Boolean locked = false;
 

    //     public List<SimpleGrantedAuthority> getAuthorities() {
    // var authorities = getPermissions()
    //         .stream()
    //         .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
    //         .collect(Collectors.toList());
    // authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
    // return authorities;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() { 
        List<SimpleGrantedAuthority> c = new ArrayList<>();
        c.add(new SimpleGrantedAuthority("ROLE_"  + role));

        // c.add(new SimpleGrantedAuthority(role.toString()));
        return c; 
    }


    // probably set false by default, then after verified them trn to true
    @Override
    public boolean isEnabled() {
        return true;
    } 
 

    // these are not implemented, just return default values

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; 
    }
}
