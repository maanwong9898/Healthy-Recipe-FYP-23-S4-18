// package com.FYP18.HealthyRecipe.Service;

// import com.google.auth.oauth2.GoogleCredentials;
// import com.google.cloud.storage.Blob;
// import com.google.cloud.storage.BlobId;
// import com.google.cloud.storage.BlobInfo;
// import com.google.cloud.storage.Bucket;
// import com.google.cloud.storage.Storage;
// import com.google.cloud.storage.StorageOptions;
// import com.google.firebase.cloud.StorageClient;

// import org.springframework.security.crypto.codec.Utf8;
// import org.springframework.stereotype.Service;
// import org.springframework.web.multipart.MultipartFile;

// import java.io.File;
// import java.io.FileInputStream;
// import java.io.FileOutputStream;
// import java.io.IOException;
// import java.nio.charset.StandardCharsets;
// import java.nio.file.Path;
// import java.util.UUID;

// @Service
// public class FirebaseStorageService {

//     private final Storage storage;

//     private final String recipeFolder = "Recipes/";    
//     private final String nutritionistFolder = "Recipes/";
//     private final String blogs = "Blogs/";
 
//     // Type -> userid -> 
//     public FirebaseStorageService() {
//         this.storage = StorageOptions.getDefaultInstance().getService();
//     }
//     private final String bucketName = "healthy-recipe-fe8f5.appspot.com";
 
//     public String uploadFile(MultipartFile file) throws IOException {  
 
//         Bucket bucket = StorageClient.getInstance().bucket();

//         Blob  blob = bucket.create("Nutritionists/" +file.getOriginalFilename(), file.getBytes(), file.getContentType());

//         return blob.getMediaLink();
//     }

//     public String uploadRecipeImages(MultipartFile file, String userId, String recipeId) throws IOException {  
 
//         Bucket bucket = StorageClient.getInstance().bucket();

//         Blob blob = bucket.create(recipeFolder + userId + recipeId, file.getBytes(), file.getContentType());

//         return blob.getMediaLink();
//     }
    
 
//     public void downloadFile(String fileName, Path destinationPath) throws IOException {
 
//         BlobId blobId = BlobId.of(bucketName, fileName);
//         Blob blob = storage.get(blobId);

//         blob.downloadTo(destinationPath);
//     }
// }
