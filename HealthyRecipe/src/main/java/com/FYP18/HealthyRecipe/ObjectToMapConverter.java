package com.FYP18.HealthyRecipe;
import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;


public class ObjectToMapConverter {
      public static Map<String, String> convertObjectToMap(Object obj) {
        Map<String, String> resultMap = new HashMap<>();

        // Get all fields of the class, including private and inherited fields
        Field[] fields = obj.getClass().getDeclaredFields();

        for (Field field : fields) {
            try {
                // Make the field accessible if it's not public
                field.setAccessible(true);

                // Convert the field value to a string and put it in the map
                Object value = field.get(obj);
                if (value != null) {
                    resultMap.put(field.getName(), value.toString());
                }
            } catch (IllegalAccessException e) {
                e.printStackTrace(); // Handle the exception as needed
            }
        }

        return resultMap;
    }

} 