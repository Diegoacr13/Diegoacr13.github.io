---
title: 'SQL Analysis – Online Book Service'
description: During the COVID-19 pandemic, online book services grew rapidly as people spent more time at home reading.This project analyzes one such service’s database to generate insights that could support a new product value proposition
publishDate: 'Jan 2026'
isFeatured: true
seo:
  image:
    src: '../../assets/images/SQL.jpg'
    alt: Project preview
---

![Project preview](../../assets/images/SQL.jpg)

**Project Overview:**
The rapid growth of online book services during the COVID-19 pandemic highlighted the importance of data-driven strategies to improve user experience and strengthen catalog offerings.  
This project focuses on analyzing the database of an online book platform to uncover insights about publishing trends, author performance, user behavior, and community engagement.  

By connecting directly to a PostgreSQL database and leveraging Python with Pandas and SQLAlchemy, the analysis explores key questions such as:  
- How modern and relevant is the catalog?  
- Which publishers and authors have the greatest impact?  
- What patterns emerge in ratings and reviews?  
- How do the most active users contribute to the community?  

The results provide actionable findings that support the design of a strong value proposition, combining a modern catalog, trusted publishers and authors, and an engaged user base.

## Objectives

1. Count the number of books published after January 1, 2000.  
2. Calculate the number of user reviews and the average rating for each book.  
3. Identify the publisher with the largest number of books over 50 pages.  
4. Find the author with the highest average rating (only considering books with at least 50 ratings).  
5. Determine the average number of text reviews among users who rated more than 50 books.  

## Methodology
- Connected to the SQL database using **SQLAlchemy**.  
- Validated table structures and printed sample rows.  
- Wrote SQL queries for each analytical task.  
- Used **Pandas** in Jupyter Notebook to store and display query results. 

## Results

**Books published after 2000**  
819

**Reviews and average rating per book**

book_id | title                                          | num_reviews | avg_rating
-----------------------------------------------------------------------------------
86      | Arrows of the Queen (Heralds of Valdemar #1)   | 2           | 5.00
901     | The Walking Dead Book One                      | 2           | 5.00
390     | Light in August                                | 2           | 5.00
972     | Wherever You Go There You Are                  | 2           | 5.00
136     | Captivating: Unveiling the Mystery of a Woman… | 2           | 5.00
...
303     | Harvesting the Heart                           | 2           | 1.50


## Final Conclusion

Modern catalog: 819 books published after 2000 ensure relevance and attractiveness.

Ratings & reviews: Titles range from perfect scores (5.0) to low ratings (1.5–2.0), enabling segmentation and recommendation strategies.

Publisher dominance: Penguin Books leads with 42 substantial publications, a strategic partner for catalog enrichment.

Author insight: Diana Gabaldon stands out with high ratings and strong reader engagement.

User behavior: Heavy raters contribute ~24 reviews each, providing valuable qualitative feedback and strengthening community interaction.

## Features

1. **EcoScore and Challenges:**

- Users are assigned an EcoScore based on their sustainable activities and choices.
- Daily and weekly challenges encourage users to adopt new habits and compete with friends or the community to earn EcoPoints.

2. **Personalized Eco-Goals:**

- Users can set and track personalized eco-goals, such as reducing plastic usage, conserving water, or choosing eco-friendly transportation.
- The app provides tips and suggestions to help users achieve their goals.

3. **Green Rewards Marketplace:**

- EcoPoints earned through challenges and sustainable actions can be redeemed in a virtual Green Rewards Marketplace.
- The marketplace offers discounts on eco-friendly products, services, and even contributions to environmental causes.

4. **Community Hub:**

- A community feature allows users to connect, share their eco-friendly achievements, and inspire others.
- Users can join local eco-groups, organize clean-up events, and collaborate on sustainability projects.

5. **EcoEducator AI Assistant:**

- An AI-powered assistant, EcoEducator, provides personalized eco-tips, facts, and information based on users' preferences and habits.
- Users can chat with EcoEducator for instant advice on sustainable living.

## Technology Stack

- Frontend: React Native for cross-platform mobile app development.
- Backend: Firebase for real-time data synchronization and user authentication.
- Database: Firestore for scalable and flexible data storage.
- AI Integration: Dialogflow for natural language processing and conversation with EcoEducator.

## Outcome

EcoBuddy has successfully created a community of environmentally conscious individuals who actively participate in sustainable living practices. The app not only educates and motivates users but also provides tangible rewards for their commitment to a greener lifestyle, fostering a positive impact on the environment.


