# Futbol - The Ultimate Football Tactics Board

**Futbol** is a modern, web-based application designed for football fans, coaches, and analysts. It provides an intuitive and visually appealing platform to build team formations, explore detailed player stats, and bring tactical ideas to life.

---

## ✨ Key Features

* **Interactive Formation Builder:**
    * Drag-and-drop players from a roster onto a football pitch.
    * Select from multiple popular formations (4-3-3, 4-4-2, 3-5-2).
    * Position-locking ensures players can only be placed in their valid roles (FWD, MID, DEF, GK).
    * Real-time calculation of the team's overall rating based on the players on the pitch.

* **Dynamic Player Cards Page:**
    * Browse a grid of beautifully designed player cards.
    * View detailed, FIFA-style stats for each player (Pace, Shooting, Dribbling, etc.).
    * Overall ratings are dynamically calculated based on individual stats and position.

* **Modern, Responsive UI:**
    * A sleek, dark-themed design with a high-energy accent color.
    * Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices.
    * Built with modern UI effects like glassmorphism and subtle glows.

* **Client-Side Routing:**
    * A fast, single-page application experience with seamless navigation between the Homepage, Builder, Player Cards, and other pages.

---

## 🛠️ Tech Stack

* **Frontend:** [React.js](https://reactjs.org/) (using functional components and hooks)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS framework)
* **Deployment:** [Vercel](https://vercel.com/)

---

## 📂 Project Structure

The project is organized into a clean and scalable structure to make development and maintenance easy.

```
/futbol
|-- /public
|   |-- index.html
|   |-- logo.png
|-- /src
|   |-- /asset
|   |   |-- Football_field.png
|   |   |-- (player images...)
|   |-- /components
|   |   |-- Navbar.jsx
|   |   |-- Footer.jsx
|   |   |-- PlayerCard.jsx
|   |   |-- PlayerSlot.jsx
|   |   |-- PlayerStatCard.jsx
|   |   |-- (other section components...)
|   |-- /data
|   |   |-- players.js
|   |   |-- formations.js
|   |-- /pages
|   |   |-- Homepage.jsx
|   |   |-- FormationBuilderPage.jsx
|   |   |-- PlayerCardsPage.jsx
|   |   |-- AboutPage.jsx
|   |   |-- ContactPage.jsx
|   |   |-- CareersPage.jsx
|   |-- App.js
|   |-- index.css
|-- package.json
|-- tailwind.config.js
```

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v14 or later)
* npm
  
### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/futbol.git](https://github.com/your-username/futbol.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd futbol
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```

### Running the Application

To start the development server, run the following command:
```sh
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

---

## Deployment

This project is configured for seamless deployment on [Vercel](https://vercel.com/). Simply connect your GitHub repository to Vercel, and it will automatically detect the Create React App settings and deploy your site.
