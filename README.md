# FYP-23-S4-18

This app was developed using Java version 17.0.1 (LTS) released on October 19, 2021, and the Java(TM) SE Runtime Environment is built with version 17.0.1+12-LTS-39. The MySQL version employed is 8.2.0 for macOS 13.5 on arm64 architecture, installed via Homebrew.
 
For setting up the frontend:  
1. Navigate to the 'frontend' folder using the 'cd' command and execute 'npm i' in the terminal to download all the required modules. 
2. Run 'npm run dev' in the terminal to locally activate the frontend, typically accessible at http://localhost:3000.

For configuring the backend: 
1. Ensure that MySQL is running and create a database named 'fyp.' 
2. Upon executing the Java file, it should automatically generate the necessary database tables. 
3. Execute 'sqls/fill.sql' to populate the database and run 'postfill.sql.'

Note: To address the security concern of plain text passwords in user accounts and unhashed allergies, use 'postfill.sql' to overwrite these values, especially applicable to user accounts and allergies created through SQL, ensuring passwords are hashed.
