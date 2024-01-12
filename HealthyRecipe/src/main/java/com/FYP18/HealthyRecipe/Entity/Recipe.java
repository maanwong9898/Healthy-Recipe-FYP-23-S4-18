package com.FYP18.HealthyRecipe.Entity;

import lombok.*;

import java.time.LocalDate;

import org.hibernate.Length;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Getter
@Setter
@Builder
@AllArgsConstructor 
@NoArgsConstructor
@Entity
@Table(name = "RECIPE")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", updatable = false)
    private Long id;
 
    @Column(nullable = false, columnDefinition="TEXT")
    @Lob 
    private String steps;

    @Column(name = "Active", nullable = false,columnDefinition="bit(1) default b'1'")
    private Boolean active;

    @Column(name = "Title", nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition="TEXT", length = Length.LONG32)
    @Lob 
    private String description;

    @Column(name = "Info", nullable = false)
    private String info;

    @Column 
    private Float calories;

    @Column 
    private Float protein;

    @Column 
    private Float fat;

    @Column 
    private Float fibre;

    @Column 
    private Float sodium;

    @Column 
    private Float carbs;
    
    @Column 
    private Integer servingSize;

    private LocalDate createdDT;

    private LocalDate lastUpdatedDT;

    @Column(nullable = false, columnDefinition="TEXT")
    @Lob
    private String ingredients;

    private String img;
    // yes the userId can be null, credit may land on existing business 
    // users or saved inside info column
    @ManyToOne
    @JoinColumn(name = "UserID", referencedColumnName = "id")
    private User userID;
 
}

