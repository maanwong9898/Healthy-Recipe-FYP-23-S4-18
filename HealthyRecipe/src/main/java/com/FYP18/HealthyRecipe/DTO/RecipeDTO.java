package com.FYP18.HealthyRecipe.DTO;

// these are meant for  popping up in the homepage 
// or showing meal plan
public interface RecipeDTO {

    Long getId();

    String getTitle();

    String getDescription();

    String getImg();

    String getPublisher();

    Float getCalories();

    Float getCarbs();

    Float getProtein();

    Float getFat();

    Float getFibre();

    Float getSodium();
}