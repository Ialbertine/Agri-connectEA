# Agri-Connect East Africa (EA) Web Application

# Overview

**Agri-Connect East Africa (EA)** is a platform designed to empower agricultural farmers or cooperative 
in East Africa by improving market access, linking them with buyers, and 
facilitating information exchange on modern and sustainable farming practices.

# Features
 - **User Registration:** Users can register as buyers or cooperatives (which can also be farmers)
 - **Product Showcase:** Farmers or cooperatives can showcase their agricultural products.
 - Order Placement: Buyers can place orders for products listed by farmers and cooperatives.
 - **Third-Party Notifications:** Delivery companies are notified via email when an order or payment is placed.
 - **Advertising:** Targeted advertising and marketing opportunities for agricultural products.
 - **News and Updates:** Agricultural news, updates, and publications

# technologies Used

- **Front-end:** React, Tailwind CSS
- **API Integrations:** Backend functionalities are provided through Integrated APIs

## Getting Started with

- Node.js
- Git

## Installation
 ### 1. Clone the Repository
  - git clone https://github.com/Ialbertine/Agri-connectEA.git
  - cd Agri-connectEA
  ### 2. install dependencies
  - npm install
  ### 3. Run the front-end server
  - npm start

# Usage

 ## 1. Registration
  - go to the registration page via sign in page and choose to register as a buyer or cooperative(farmer)
  - fill in the required details and submit the form 
  - once you submited the form you will be directed to the OTP page to fill out the otp that have sent to your email

## 2. Sign-IN
  - use the credentials you used when you create the account
  - if you are a buyer, you will be directed to the buyer dashboard etc

## 3. Showcasing Products:
  - Cooperative or farmer can log in and add their agricultural products to the platform.

## 4. Placing orders
  - Buyers can browse the products listed by cooperative or farmers
  - Select a product, specify the Quantity and place the order

## 5. Third-Party Notification
  - When the Order or Payment is placed, delivery campanies are notified via email with the order details

# API Integration

The platform relies on external APIs for Backend Functionalities and ensure that the API base URL is correctly. you can integrate through different services such as:
  
  - User Authentication: APIs for registering and authenticating users
  - Product Management: APIs for Adding, updating and deleting products
  - Order Management: APIs for placing and tracking Orders
  - Email Notifications: APIs for sending email notifications to the third parties
