# Elev8 FX

Elev8 FX is a React-based web application for a foreign exchange service provider. This project was converted from a WordPress site to a modern React application.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- Responsive design
- Interactive user interface
- Contact form integration with Formspree
- Google Maps integration
- Dynamic content loading

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/elev8-fx.git
   ```

2. Navigate to the project directory:
   ```
   cd elev8-fx
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables:
   ```
   REACT_APP_FORMSPREE_ID=your_formspree_id
   REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

## Usage

To start the development server:

```
npm start
```

To build the project for production:

```
npm run build
```

## Project Structure

```
elev8-fx/
│
├── public/
│   ├── index.html
│   └── assets/
│       └── images/
│
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Home.js
│   │   └── reusables/
│   │       ├── NavBar.js
│   │       ├── Footer.js
│   │       └── ...
│   │
│   ├── assets/
│   │   └── css/
│   │       └── styles.css
│   │
│   ├── utils/
│   │   └── api.js
│   │
│   ├── App.js
│   └── index.js
│
├── package.json
├── README.md
└── .gitignore
```

## Technologies Used

- React.js
- React Router
- Formspree
- Google Maps API
- CSS3
- HTML5

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/your-username/elev8-fx](https://github.com/your-username/elev8-fx)