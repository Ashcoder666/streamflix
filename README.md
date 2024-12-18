# Video Streaming Platform Backend (NestJS)

## Overview
This repository contains the backend API for a **Video Streaming Platform** built using **NestJS**. The platform allows users to register, watch and interact with videos, while content creators can upload videos, manage channels, and monetize their content. Administrators can manage users, content, ads, and more. The system is designed to be scalable, secure, and maintainable using modern backend technologies.

---

## Table of Contents

1. [Project Goals and Objectives](#project-goals-and-objectives)
2. [User Flow](#user-flow)
3. [Content Creator Flow](#content-creator-flow)
4. [Admin Panel Flow](#admin-panel-flow)
5. [Data Flow](#data-flow)
6. [Development Resources](#development-resources)
7. [API Endpoints](#api-endpoints)
8. [Milestones](#milestones)
9. [Modules](#modules)
10. [Setup and Installation](#setup-and-installation)
11. [Contributing](#contributing)

---

## Project Goals and Objectives

### **User Functionality:**
- **Registration and Profile Management**: Users can register with their basic information (email, name, password) and manage their profile.
- **Browse Categories and Channels**: Users can view video categories, browse channels, and view trending content.
- **Search and Filter Videos**: Users can search and filter videos by various criteria, such as most-watched, date, and duration.
- **Watch Videos**: Users can watch videos in a dedicated player with options to select different formats (e.g., 720p, 480p) and download the videos.
- **Interaction with Videos**: Users can like, comment, and view likes and comments from others.
- **Monetization via Ads**: To download videos, users must watch a 60-second ad.

### **Content Creator Functionality:**
- **Registration and Channel Creation**: Content creators can register, choose a category, and create a channel.
- **Video Upload**: Creators can upload videos, set titles, descriptions, and select monetization options (Adsense).
- **Analytics Dashboard**: Creators can track the number of subscribers, likes, comments, views, and revenue generated from ads.

### **Admin Functionality:**
- **User and Channel Management**: Admins can view, approve, or block users, and approve or reject channel creation requests.
- **Monetization and Ads Control**: Admins can manage ad settings and monitor ad revenue.
- **Report Management**: Admins can view reported issues and take necessary actions.
- **Platform-Wide Ads Control**: Admin can turn ads on or off across the entire platform.

---

## User Flow

### **1. User Registration and Login**
- The user first registers with their email, name, and password.
- Upon successful registration, the user is redirected to the homepage, where they can browse video categories and channels.

### **2. Browsing and Interacting with Videos**
- **Step 1**: Browse through various video categories and see trending videos based on user preferences.
- **Step 2**: Search for videos using search functionality.
- **Step 3**: Select a video to watch. The video will be played in a dedicated player.
- **Step 4**: The user can download videos in multiple formats (720p, 480p, mp4, mkv, etc.) after watching a compulsory 60-second ad.
- **Step 5**: Like and comment on videos, and see the total likes and comments from other users.

### **3. Content Creator Flow**
- **Step 1**: Content creators start as users, then can choose to create a channel by selecting a category.
- **Step 2**: Creators upload videos to their channels and opt for monetization through Adsense.
- **Step 3**: Content creators can view analytics, including number of subscribers, likes, comments, and revenue generated.

### **4. Admin Panel Flow**
- **Step 1**: Admins log into the control panel to manage users, channels, and other platform resources.
- **Step 2**: Admins can manage reported issues, approve or reject channel creation requests, and control ads across the platform.

---

## Content Creator Flow

### **Content Creator Actions:**
- **Step 1**: Content creators register and create a channel by selecting a category.
- **Step 2**: They upload videos with titles, descriptions, and metadata.
- **Step 3**: Content creators opt for monetization and Adsense integration to generate revenue from their videos.
- **Step 4**: Creators can track their performance via an analytics dashboard (views, likes, comments, revenue).
  
---

## Admin Panel Flow

### **Admin Panel Actions:**
- **User Management**: Admins can manage users by viewing their profiles, blocking users, and managing their permissions.
- **Channel Management**: Admins approve or reject channel creation requests and manage the content creator activities.
- **Monetization and Ads Management**: Admins can enable or disable ads and track platform-wide ad performance and revenue.
- **Reported Issues**: Admins review issues reported by users, including content violations or technical problems.
- **Control Ad Display**: Admins can toggle ads on or off across the platform, ensuring that they are only displayed in certain scenarios (e.g., video downloads).

---

## Data Flow

### **User Flow Data Flow:**
1. **User Registration and Login:**
   - **Input**: User email, name, password.
   - **Output**: User data saved in the database (MongoDB/PostgreSQL).

2. **User Video Interaction (Like, Comment, Watch):**
   - **Input**: User selects a video, likes it, or posts a comment.
   - **Output**: Interaction data (likes, comments) are saved in the database.

3. **Monetization and Ad Interaction:**
   - **Input**: User interacts with ads (watch duration).
   - **Output**: Ad revenue data is generated and tracked for content creators.

4. **Video Download:**
   - **Input**: User requests to download a video.
   - **Output**: 60-second ad is shown before the download starts.

---

## Development Resources

1. **NestJS:**
   - **Book**: "NestJS: A Progressive Node.js Framework" by Kamil Myśliwiec.
   - **Official Docs**: [NestJS Documentation](https://docs.nestjs.com/).

2. **Database Management (MongoDB/PostgreSQL):**
   - **Book**: "MongoDB: The Definitive Guide" by Kristina Chodorow.
   - **PostgreSQL Docs**: [PostgreSQL Documentation](https://www.postgresql.org/docs/).

3. **Cloud Storage (AWS S3 for Video Hosting):**
   - **Book**: "Amazon Web Services in Action" by Michael Wittig and Andreas Wittig.
   - **AWS Docs**: [AWS Documentation](https://aws.amazon.com/documentation/).

4. **API Design and REST Principles:**
   - **Book**: "Designing Web APIs" by Brenda Jin, Saurabh Sahni, and Amir Shevat.
   - **OpenAPI Specification**: [Swagger/OpenAPI Documentation](https://swagger.io/specification/).

5. **Authentication & Security:**
   - **Book**: "OAuth 2.0: Getting Started in API Security" by Phil Sturgeon.
   - **OWASP Security Practices**: [OWASP Security Documentation](https://owasp.org/).

---

## API Endpoints

### **User APIs:**
- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Login a user and return a JWT token.
- `GET /user/profile`: Get user profile information.
- `POST /user/like`: Like a specific video.
- `POST /user/comment`: Add a comment to a video.

### **Video APIs:**
- `GET /videos`: Fetch all videos with optional filters (e.g., category, trending).
- `GET /videos/:id`: Get details for a specific video.
- `GET /videos/trending`: Get the top trending videos.
- `POST /videos/download`: Download a video after watching the mandatory ad.
- `GET /videos/comments/:id`: Get all comments for a specific video.

### **Channel APIs:**
- `POST /channel/create`: Create a new channel.
- `GET /channel/:id`: View a channel's details.
- `GET /channel/videos/:id`: Get all videos in a specific channel.
- `GET /channel/analytics`: View analytics of a channel (views, revenue, subscribers).

### **Admin APIs:**
- `GET /admin/users`: Get a list of all registered users.
- `GET /admin/channels`: Get a list of all channels.
- `POST /admin/ad-control`: Toggle platform-wide ads (enable/disable).
- `POST /admin/resolve-report`: Resolve a user-reported issue (content violation, bugs).

---

## Milestones

1. **Milestone 1: Basic User Authentication**
   - User registration, login, and JWT authentication.
   - Implement profile management and basic API structure.

2. **Milestone 2: Video and Channel Management**
   - Implement video upload, metadata storage, and streaming functionality.
   - Channel creation and management for content creators.

3. **Milestone 3: Monetization and Ads Integration**
   - Implement AdSense monetization and track ad views for revenue generation.

4. **Milestone 4: Admin Panel Implementation**
   - Implement user and channel management APIs, as well as report and issue handling.

5. **Milestone 5: Final Testing and Production Deployment**
   - Test all features, fix bugs, and deploy to production.

---

## Modules

1. **User Module**
   - Handles user registration, authentication, and profile management.
   - Video interactions like liking, commenting, and watching videos.

2. **Content Creator Module**
   - Channel creation, video upload, monetization setup, and video analytics.

3. **Admin Module**
   - Admin management for users, channels, and platform-wide settings.

4. **Monetization and Ad Control Module**
   - Integration of AdSense, tracking ad views, and generating creator revenue.

5. **Video Management Module**
   - Manages video uploads, storage, playback, and download options.

---

## Setup and Installation

To set up this backend API on your local machine, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/Ashcoder666/streamflix.git
