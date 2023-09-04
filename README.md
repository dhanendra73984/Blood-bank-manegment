
# Blood Bank App

A simple web application for managing a blood bank. The app delivers functionalities that makes it easy 
for managment of a blood bank.

![bloodbank live](resources/livedemobbms.png)

The Application was build using following technologies: 
- ReactJs
- JavaScript
- NodeJs
- MySQL

## Diagrams
<p align="center">
<img src = "resources/bbms%20relational%20schema.png" alt = "schema diagram" width = "350" /> <img src = "resources/bbms%20er%20diagram.png" alt = "ER diagram" width = "350" height = "322" />
</p>



## Features

The app incorportate following feature for different it twow categories of user: 

#### User
- Register & Login
- donate blood 
- request blood 

#### Employee
- Register & Login
- Update blood stocks
- update user health
- Handle blood request

#### General
- Search - based on blood group or location



## Run Locally

Clone the project



Open MySQL WorkBench and run the `database.sql` file. 

To start the server

```bash
  cd server             
  yarn install 
  yarn devStart          
```

To start the client

```bash
  cd client
  yarn install
  yarn start
```












<br/>
<br/>
