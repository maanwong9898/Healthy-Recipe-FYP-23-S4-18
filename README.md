# FYP-23-S4-18

java version "17.0.1" 2021-10-19 LTS
Java(TM) SE Runtime Environment (build 17.0.1+12-LTS-39)

mysql  Ver 8.2.0 for macos13.5 on arm64 (Homebrew)

Frontend:
	cd into frontend folder and run 'npm i' command in terminal to download all of the required modules

	run 'npm run dev' command  in terminal to turnon frontend locally, it'd points to the port, usually http://localhost:3000

Prerequisites to setup backend:
	made sure MySQL is running and create a database 'fyp'

	Then once we run the java file it should automatically create database tables

	Then we execute sqls/fill.sql to populate the database and run postfill.sql

		As we were trying to make sure the allergies and useraccounts' password to be hashed, the user account thats created via SQL would have plain text passwords, which is something that needs to be overwritten using postfill.sql, that applies to allergies as well.

 
