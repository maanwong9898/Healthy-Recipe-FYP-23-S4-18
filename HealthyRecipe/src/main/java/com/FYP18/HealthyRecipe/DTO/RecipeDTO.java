package com.FYP18.HealthyRecipe.DTO;

// these are meant for  popping up in the homepage 
// or showing meal plan
public interface RecipeDTO {
    
    String getTitle();
    String getDescription();
    String getFilePath();
    
    Float getCalories();
    Float getCarbs();
    Float getProtein();
    Float getFat();
    Float getFibre();
    Float getSodium(); 
    // private String filePath;
    // private String description;
    // private String title;
}
//     private Float calories;
//     private Float carbs;
//     private Float protein;
//     private Float fat;
//     private Float fibre;
//     private Float sodium;
// }
