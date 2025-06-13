LingoMate
An interactive platform where language learners can find tutors, book sessions, and track their tutorials—built with modern authentication, JWT security, and dynamic content filtering.

Live Site
https://lingomate-49136.web.app/


Features

Authentication System
Users can sign up, log in (email/password or Google), and log out. 

Language Categories
All available language categories are fetched dynamically and shown on the homepage with clean, responsive cards.

Find Tutors
Browse tutors by language category or view all tutors. Each tutor card includes image, name, language, price, and review.

Add Tutorials
Logged-in users can add tutorials with title, language, description, image, and price.

My Tutorials
Users can view, update, or delete only their own tutorials through a secure private dashboard.

Book a Tutor
Learners can book a tutor only once. Duplicate booking attempts are blocked with an error.

Dark / Light Theme
Toggle theme directly from the navbar, and it applies across the whole app.

JWT Integration
Upon login (email/password or Google), a JWT token is issued and stored as a secure HTTP-only cookie. 


Real-time Review
Users can increment a tutor's review count on the details page. Updates reflected instantly.

Used NPM Packages
Package	Purpose
react-router	
react-toastify	
sweetalert2	
firebase	
daisyui	
tailwindcss	
jsonwebtoken	
cookie-parser	
express	
mongodb	

Tech Stack

Frontend: React, Tailwind CSS, DaisyUI

Routing: React Router 

Authentication: Firebase

Token Auth: JWT (JSON Web Token)

Backend: Node.js + Express

Database: MongoDB (Atlas)

