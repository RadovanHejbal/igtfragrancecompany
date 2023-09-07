# Fragrance and flavor Catalog

The Fragrance and Flavor Catalog project is a web application built with a React frontend and a simple mock API server. This catalog displays a collection of fragrance and flavor products, allowing users to browse and view details about each product.

## Project Structure
- **`app/`**: Contains the source code of the project.
  - **`src/`**
      - **`components/`**: Contains reusable components and their css modules
      - **`pages/`**: Contains route pages and their css modules
      - **`contextapi/`**: Contains ContextAPI.tsx for managing states
      - **`functions`**: Contains reusable httpFunctions
      - **`types/`**: Contains types for typescript variables
      - **`variables/`**: Contains colors.ts, shared colors are stored there
      - **`App.css`**: Contains shared classes across whole app
      - **`App.tsx`**: The entry point for rendering the React application
      - **`main.tsx`**: The main application entry point
  - **`index.html`**: main html file
  - **`package.json`**: Configuration file for Node.js dependencies.
  - **`.gitignore`**: Specifies files and directories to be ignored by Git.
- **`mockapi/`**: Contains public assets, such as temporary data.json file
  - **`index.js`**: Contains products and reviews in JSON files
  - **`data`**: Contains products and reviews in JSON files
  - **`package.json`**: Configuration file for Node.js dependencies.
  - **`.gitignore`**: Specifies files and directories to be ignored by Git.


## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository: git clone https://github.com/RadovanHejbal/igtfragrancecompany.git
2. Open two terminals
    2.1. terminal 1 - open backend: cd igtfragrancecompany/mockapi
    2.2  terminal 1 - install dependencies: npm install
    2.3  terminal 1 - start server: node index.js
    2.4  terminal 2 - open frontend: cd igtfragrancecompany/app
    2.5  terminal 2 - install dependencies: npm install
    2.6  terminal 2 - start react app: npm run dev
3. Open the web browser and visit: localhost:5173

## Server
The server is located in the mockapi folder, serves as a mock API for the app. It provides data for the app to display

### API Endpoints
- GET /products: Returns an object with filtered and paginated products and information if returned paginated products where the last pagination or not
- GET /product/detail: Returns an object with desired product and its reviews

### Data
- Products and reviews are stored in products.json and reviews.json files in data folder

### Dependencies
1. body-parser 1.20.2: making it easier to access and work with data sent by clients in various formats, such as JSON
2. cors 2.8.5: security feature
3. express 4.18.2: providing features and middleware for routing, handling HTTP requests and responses, and more

## App
The app is responsible for presenting the fragrance and flavor products catalog to users

### Technologies used
- React
- Typescript
- React routing
- HTML
- CSS modules

### Features
- Browse fragrance and flavor products.
- Filter products by (fragrance, flavor) and types
- View product details.
- Pagination for product listing
- Adding products to favorites

### Routing
React-router-dom is used for routing in this app
- `/`: Home page with catalog of all products
- `/fragrances/:type`: Catalog of filtered fragrance products
- `/fragrances`: Catalog with all fragrance products
- `/flavors/:type`: Catalog with filtered flavor products
- `/flavors`: Catalog with all flavor products
- `/details/:id`: Details about selected product
- `/favorites`: My favorite products

### Dependencies
- react 18.2.0
- react-dom 18.2.0
- react-router-dom 6.15.0: react routing library

### API Integration
- The app fetches product data from the mock API using the `fetch` function and displays it to users. It supports filtering and pagination of products based on user interactions

### State management
- State management is being handled by `props` and `ContextAPI` (3rd party library like redux felt too much for this project)

## Aditional information
- Simple UX/UI design.
- Product images are just placeholders for easier implementation