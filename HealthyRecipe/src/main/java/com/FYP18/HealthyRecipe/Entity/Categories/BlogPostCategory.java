package com.FYP18.HealthyRecipe.Entity.Categories;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder 
@AllArgsConstructor 
@NoArgsConstructor   
@Entity
@Table(name= "BlogPostCategory")
public class BlogPostCategory {

    // Cookbook, Kitchenware
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;
     
    @Column(name = "subcategoryName", nullable = false)
    private String subcategoryName;

    public BlogPostCategory(Long id)
    {
        this.id = id;
    }
    @Override 
    public String toString() { 
        return subcategoryName;
    }
}
