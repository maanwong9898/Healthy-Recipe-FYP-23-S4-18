package com.FYP18.HealthyRecipe.SecuringWeb;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.io.InputStream;

@Configuration
public class FirebaseConfig {

    @Bean
    public FirebaseApp initializeFirebase() throws IOException {
        InputStream serviceAccount = getClass().getResourceAsStream
        ("healthy-recipe-fe8f5-firebase-adminsdk-3i4ga-509c39804d.json");

        FirebaseOptions options  = FirebaseOptions.builder() 
                                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                                    // .setProjectId("healthy-recipe-fe8f5")
                                    .setStorageBucket("healthy-recipe-fe8f5.appspot.com")
                                    // .setServiceAccountId("my-client-id@my-project-id.iam.gserviceaccount.com")
                                    .build();

                            // .setCredentials(GoogleCredentials.getApplicationDefault())
                            // .setDatabaseUrl("https://<DATABASE_NAME>.firebaseio.com/")
                            // .build();  
        return FirebaseApp.initializeApp(options);
    }
}
