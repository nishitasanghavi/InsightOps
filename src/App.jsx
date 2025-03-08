import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import { ThemeProvider } from "./Context/ThemeContext"; // Ensure this exists
import { createTheme } from "@mui/material/styles"; // MUI Theme
import CssBaseline from "@mui/material/CssBaseline"; // Resets default styles\

// Create MUI Theme (Modify as needed)
const theme = createTheme({
  palette: {
    mode: "light", // Change to 'dark' if needed
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
