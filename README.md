# Weather Dashboard 🌤️

A modern, responsive weather dashboard built with React and Tailwind CSS that fetches real-time weather data from the OpenWeatherMap API.

## Features ✨

- 🌍 **Real-time Weather Data**: Current weather conditions for any city worldwide
- 📅 **5-Day Forecast**: Extended weather predictions
- 🔍 **City Search**: Search for weather information by city name
- 📍 **Geolocation**: Automatic weather display based on user location
- 🌡️ **Temperature Units**: Toggle between Celsius and Fahrenheit
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Beautiful UI**: Modern gradient backgrounds and smooth animations
- 📊 **Detailed Weather Metrics**: Humidity, wind speed, visibility, pressure, sunrise/sunset times

## Tech Stack 🛠️

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Weather API**: OpenWeatherMap Free Tier
- **Build Tool**: Create React App

## Prerequisites 📋

- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key (free tier available)

## Installation 🚀

1. **Clone the repository**
   ```bash
   git clone https://github.com/chriscc5108/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your OpenWeatherMap API key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate an API key from your account dashboard

4. **Create `.env` file**
   ```bash
   cp .env.example .env
   ```

5. **Add your API key to `.env`**
   ```env
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   REACT_APP_WEATHER_API_URL=https://api.openweathermap.org/data/2.5
   REACT_APP_ENABLE_GEOLOCATION=true
   ```

## Running the Application 🏃

### Development Mode
```bash
npm start
```
The application will open at `http://localhost:3000`

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `build` folder.

## Project Structure 📁

```
weather-dashboard/
├── public/
│   └── index.html                 # HTML template
├── src/
│   ├── components/
│   │   ├── CurrentWeather.jsx     # Current weather display
│   │   ├── Forecast.jsx           # 5-day forecast
│   │   ├── SearchBar.jsx          # City search component
│   │   └── WeatherCard.jsx        # Reusable weather info card
│   ├── hooks/
│   │   └── useWeather.js          # Custom hook for API calls
│   ├── App.jsx                    # Main application component
│   ├── App.css                    # App styles
│   ├── index.js                   # React entry point
│   └── index.css                  # Global styles
├── .env.example                   # Environment variables template
├── .gitignore                     # Git ignore rules
├── package.json                   # Project dependencies
├── postcss.config.js              # PostCSS configuration
├── tailwind.config.js             # Tailwind CSS configuration
└── README.md                      # Project documentation
```

## API Documentation 📚

This project uses the **OpenWeatherMap API** (free tier):

### Endpoints Used:
- **Current Weather**: `/weather?q={city}&units={unit}&appid={apiKey}`
- **5-Day Forecast**: `/forecast?q={city}&units={unit}&appid={apiKey}`
- **By Coordinates**: `/weather?lat={lat}&lon={lon}&units={unit}&appid={apiKey}`

### Query Parameters:
- `q`: City name (e.g., "London", "New York")
- `lat`, `lon`: Geographic coordinates
- `units`: `metric` (Celsius) or `imperial` (Fahrenheit)
- `appid`: Your API key

## Features Breakdown 🎯

### Current Weather Display
- Large temperature display with "feels like" indication
- Weather description and icons from OpenWeatherMap
- Humidity, wind speed, visibility, pressure
- Sunrise and sunset times

### 5-Day Forecast
- Daily weather cards with temperature highs/lows
- Weather condition icons
- Humidity and wind speed for each day
- Rain probability percentage

### Search Functionality
- Search bar to look up any city worldwide
- Quick-access city buttons for popular destinations (London, New York, Tokyo, Paris, Sydney)
- Real-time error handling with user-friendly messages

### Temperature Unit Toggle
- Easy switch between Celsius (°C) and Fahrenheit (°F)
- All values update automatically when toggled

### Geolocation Support
- Automatically fetches weather for user's current location on first load
- Falls back to default city if geolocation is denied
- Respects browser geolocation privacy settings

## Error Handling 🛡️

The application includes comprehensive error handling:

- **Invalid City**: Displays helpful message if city is not found
- **Missing API Key**: Prompts user to configure API key
- **Network Errors**: Handles connection issues gracefully
- **Invalid API Key**: Clear feedback if API key is incorrect or expired

## Customization 🎨

### Change Default City
Edit `src/App.jsx`:
```javascript
const [city, setCity] = useState('London'); // Change to your preferred city
```

### Modify Quick City Buttons
Edit `src/components/SearchBar.jsx`:
```javascript
const quickCities = ['London', 'New York', 'Tokyo', 'Paris', 'Sydney'];
```

### Update Colors
Modify `tailwind.config.js` to customize the color scheme.

## Performance Optimizations ⚡

- React hooks for efficient state management
- Parallel API calls using `Promise.all()`
- Cached weather data to minimize API calls
- Optimized re-renders with proper dependency arrays
- Lazy loaded images from OpenWeatherMap

## Browser Support 🌐

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Known Limitations ⚠️

- Free tier OpenWeatherMap API has rate limits (60 calls/min)
- Geolocation requires HTTPS in production (works on localhost)
- Forecast data is updated every 3 hours by OpenWeatherMap

## Future Enhancements 🚀

- [ ] Multiple city comparison
- [ ] Weather alerts and notifications
- [ ] Historical weather data
- [ ] Air quality index (AQI)
- [ ] Weather charts and graphs
- [ ] Dark mode theme
- [ ] Favorite cities list with local storage
- [ ] Weather maps integration
- [ ] PWA support for offline access
- [ ] Internationalization (i18n)

## Troubleshooting 🔧

### "API key not configured" error
- Ensure `.env` file exists in the project root
- Verify `REACT_APP_WEATHER_API_KEY` is set correctly
- Restart the development server after adding the API key

### "City not found" error
- Check the spelling of the city name
- Try using the city name in English
- Use quick-access buttons for known cities

### Forecast data not appearing
- Verify your API key has access to the forecast endpoint
- Check that you're using the correct API key from OpenWeatherMap
- Ensure network connection is stable

### Geolocation not working
- Check browser permissions for location access
- Ensure you're using HTTPS (in production)
- Verify `REACT_APP_ENABLE_GEOLOCATION` is set to `true` in `.env`

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments 🙏

- [OpenWeatherMap](https://openweathermap.org/) for the weather API
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Lucide React](https://lucide.dev/) for beautiful icons
- [React](https://reactjs.org/) for the JavaScript library

## Support 💬

For questions or issues, please open an issue on the GitHub repository.

---

**Made with ❤️ by your Weather Dashboard team**
