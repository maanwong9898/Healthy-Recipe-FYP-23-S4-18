package com.FYP18.HealthyRecipe.Entity;

import java.time.LocalDateTime;
import java.util.List;

import org.hibernate.Length;

import com.FYP18.HealthyRecipe.Entity.Categories.EducationalContentCategory;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import lombok.*;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PreRemove;
import jakarta.persistence.Table;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "EducationalContent")
public class EducationalContent {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", updatable = false)
    private Long id;

    @Column(name = "CreatedDT", columnDefinition = "DATETIME default (NOW())", updatable = false)
    private LocalDateTime createdDateTime;

    @Column(name = "LastUpdatedDT")
    private LocalDateTime lastUpdatedDateTime;

    @Column(name = "ACTIVE", columnDefinition = "bit(1) default b'1'")
    private Boolean active;

    @Column(name = "Publisher")
    private String publisher;

    @Column(name = "Title")
    private String title;

    @Column(name = "educationalContent_type_id", nullable = true)
    private Long educationalContentTypeId;

    @ManyToOne(fetch = FetchType.EAGER, cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH })
    @JoinColumn(name = "educationalContent_type_id", insertable = false, updatable = false)
    private EducationalContentCategory educationalContentType;

    // @Column(name= "Info")
    @Column(nullable = false, columnDefinition = "TEXT")
    @Lob
    private String info;

    private String img;

    private String imgTitle;

    // yes the userId can be null, credit may land on existing business
    // users or saved inside info column
    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "UserID", referencedColumnName = "id")
    private User userID;

}
