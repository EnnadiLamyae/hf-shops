# Spring Boot, MongoDB, Angular Restful API

	Hidden Founders Web Coding Challenge :  implement an app that lists shops nearby.
	
# Requirements

	1.Java - 1.8.x

	2.Maven - 3.3.9 .

	3.MongoDB - 2.6.10 .

	4.Node - 8.7.0 .

# Steps to Setup

1. Clone the application

		# git clone https://github.com/EnnadiLamyae/hf-shops.git
		# cd hf-shops/
		
2. Build and run the backend app using maven
		
		# cd server/ 
		# mvn clean install
		# mvn spring-boot:run

	P.S if port 8080 already in use then 

		# fuser -k 8080/tcp

	The backend server will start at http://localhost:8080.
	
3. Run the frontend app using npm
	
		# cd ../client/
		# npm install
		# npm start
		
	The frontend server will run on http://localhost:4200
	
