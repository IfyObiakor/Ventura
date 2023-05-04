import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Team from "./pages/Team";
import Contacts from "./pages/Contacts";
import Invoices from "./pages/Invoices";
import CreateUser from "./pages/CreateUser";
import Calender from "./pages/Calender";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div className="App">
            <SideBar />
            <main className="content">
              <NavBar />
              <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/team" element={<Team />} />
                <Route exact path="/contacts" element={<Contacts />} />
                <Route exact path="/invoices" element={<Invoices />} />
                <Route exact path="/createuser" element={<CreateUser />} />
                <Route exact path="/calender" element={<Calender />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
