# Weathercef

Weathercef is a simple and elegant weather application that allows users to search for the current weather conditions in any city. The app displays temperature, weather conditions, cloud coverage, humidity, and wind speed, along with an appropriate icon and background image based on the weather.

## Features

- Search for weather conditions in any city
- Display current temperature, weather conditions, cloud coverage, humidity, and wind speed
- Dynamic background images and icons based on weather conditions
- User-friendly interface with quick access to popular cities

## Technologies Used

- HTML, CSS, JavaScript for the frontend
- [WeatherAPI](https://www.weatherapi.com/) for fetching weather data

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Moncef1106/Weather.git
```

2. Navigate to the project directory:

```bash
cd Weather
```

3. Open `index.html` in your preferred web browser.

## Usage

1. The app will display the current weather for Amsterdam by default.
2. Use the search bar to enter the name of a city and press enter to fetch and display the weather for the entered city.
3. Click on any of the popular cities listed to quickly view the weather for that city.

## Code Overview

### HTML

- The main structure of the app is in `index.html`.
- Contains the layout for displaying the weather information and the search form.

### CSS

- Styling is managed in `style.css`.
- Includes styles for the layout, weather conditions, and dynamic backgrounds.

### JavaScript

- The main functionality is in `main.js`.
- Fetches weather data from WeatherAPI and updates the DOM with the current weather conditions.
- Dynamically changes the background image and weather icons based on the weather condition codes.

## API Integration

The app integrates with [WeatherAPI](https://www.weatherapi.com/) to fetch real-time weather data. You will need an API key to use this service. You can obtain a free API key by signing up on the WeatherAPI website.

### Configuration

Update the `apiUrl` in `main.js` with your WeatherAPI key:

```javascript
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${encodeURIComponent(cityInput)}`;
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

Feel free to modify any section or add more details as needed for your specific project.
