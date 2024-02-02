package com.FYP18.HealthyRecipe.Entity;

import jakarta.persistence.OneToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Nutritionist")
public class Nutritionist extends User {

    @Column(name = "filePath")
    private List<String> filePath = new ArrayList<>();

    @Column(name = "companyName")
    private String companyName;

    @Column(name = "companyAddress")
    private String companyAddress;

    @Column(name = "postalCode")
    private String postalCode;

    @Column
    private String contactNumber;
    
    @Column(columnDefinition="bit(1) default b'0'")
    private Boolean verified = false;

    @Lob
    @Column(name = "imgBlob", columnDefinition="MEDIUMBLOB")
    private byte[] imgBlob;

    @PrePersist
    public void prePersist() {
        setRole(Role.NUTRITIONIST);
    }
}
