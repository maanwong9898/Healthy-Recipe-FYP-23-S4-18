package com.FYP18.HealthyRecipe.Entity;

import lombok.*;

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

    // @Column(name = "STEPS", nullable = false, columnDefinition="TEXT")
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


    @Column(nullable = false, columnDefinition="TEXT")
    @Lob
    private String ingredients;

      
    // yes the userId can be null, credit may land on existing business 
    // users or saved inside info column
    @ManyToOne
    @JoinColumn(name = "UserID", referencedColumnName = "id")
    private User userID;
 
}

