# Next.js Auth App

Click here to visit: [Next.js Auth App](https://next-js-auth-app-eight.vercel.app/login)
## Overview

This is a full-stack authentication app built with Next.js for both the frontend and backend. It leverages various libraries and tools to implement authentication features, including JWT, Bcrypt, and more. The app uses MongoDB as the database and integrates with Mailtrap and Nodemailer for sending verification emails.

## Features

- **Login:** Access the login page at `/login` to authenticate users.
- **Signup:** Navigate to `/signup` to create a new account.
- **Profile:** Visit `/profile` to view user profiles after successful login.
- **Email Verification:** Use the `/verifyemail?token=...` route to verify email after signup.
- **Forgot Password:** Access `/forgotpassword` to initiate the process of resetting the password.
- **Change Password:** Use the `/changepassword?token=...` route to set a new password after the reset.

## Technologies Used

- **Frontend:** Next.js
- **Backend:** Next.js API routes
- **Database:** MongoDB
- **Authentication:** JWT, Bcrypt
- **Email:** Mailtrap, Nodemailer

## Things I've Learned

- **Building a Full-Stack Application:** This project involved creating both frontend and backend components using Next.js, providing a comprehensive understanding of full-stack development.

- **Authentication Techniques:** Implementing JWT for user authentication and Bcrypt for password hashing improved my understanding of secure authentication practices.

- **Email Integration:** Integrating with Mailtrap and Nodemailer to send verification emails broadened my knowledge of email services in web applications.

- **Database Management:** Utilizing MongoDB as the database introduced me to NoSQL databases and enhanced my skills in data storage and retrieval.

- **Error Handling:** Dealing with various scenarios, such as forgot password requests and email verification, strengthened my error-handling skills.


Just a heads up – the frontend of this app might not win any design awards. I swear it's not a bug; it's a feature! 😄 I built this solely to learn, so please forgive any quirks in the user interface.


