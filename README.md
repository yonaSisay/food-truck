# Food Truck Recommendation System
## DEMO VIDEO Click on the image

[![Food Truck Recommendation System Demo](https://img.youtube.com/vi/pWd3DlOJP1g/0.jpg)](https://www.youtube.com/watch?v=pWd3DlOJP1g)


## Overview

This Food Truck Recommendation System is a web application designed to help users find food trucks based on their desired food type. Users can search for specific food types or food truck names and get a list of relevant food trucks. The application also displays the locations of these food trucks on a map, with each truck represented as a card for easy browsing.

## Features

1. **Search Functionality**: Users can search for food trucks by food type or food truck name.
2. **Map Integration**: Food trucks are displayed on a map, allowing users to see their locations.
3. **Card View**: Each food truck is displayed as a card with relevant information 

## Technologies Used

- **Frontend**: Vue, Tailwind
- **Backend**: Django, DRF
- **Map Integration**:Leaflet


## Usage

1. **Search for Food Trucks**:
    - Use the search bar to enter a food type (e.g., "sandwiches").
    - The application will return a list of food trucks that match your search criteria.

2. **View on Map**:
    - The matching food trucks will be displayed on a map, showing their current locations.
    - Hover on a food truck marker on the map to see more details.

3. **Click on list view Browse Food Trucks**:
    - Each food truck will also be displayed as a card .
    - The card will contain information such as the name, food type,

## How to Run the BackEnd

Follow these steps to run the food truck recommender system:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yonaSisay/food-truck.git
   ```

2. **Install Dependencies:**
   Navigate to the project directory and install the required dependencies using pip.
   ```bash
   cd myproject
   pip install -r requirements.txt
   ```
   
4. **Run the Django Server:**
   Start the Django server to run the recommender system.
   ```bash
   python manage.py runserver
   ```

## Hot To Run The Frontend

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yonaSisay/food-truck.git
   ```
2. **Install Dependencies: and run**
   Navigate to the project directory and install the required dependencies using yarn or npm.
   ```bash
   cd Front-End
   yarn
   ```
   ```bash
   yarn dev
   ```
