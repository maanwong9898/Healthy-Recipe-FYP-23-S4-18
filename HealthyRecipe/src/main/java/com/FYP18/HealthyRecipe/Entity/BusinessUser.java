package com.FYP18.HealthyRecipe.Entity;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Collection;
import java.util.Iterator;


@Data 
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "BusinessUser")
public class BusinessUser extends User  {

    @Column(name= "Company_Name")
    private String companyName ;

    // if itsa dietitan, then UEN can be license number
    @Column(name= "UEN")
    private String UEN;
    
    @Column(name="Dietitan_Account", updatable = false)
    private Boolean dietitanAccount;
}
