import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import SignIn from "./Pages/SignIn/SignIn";
import Profile from "./Pages/Profile/Profile";
import { About } from "./Pages/About/About";
import RouteGuard from "./Components/Shared/RouteGuard";
import { useSelector } from "react-redux";
import { TRootState } from "./Store/BigPie";
import CardDetails from "./Pages/CardDetails/CardDetails";
import Favorites from "./Pages/Favorites/Favorites";
import MyCards from "./Pages/MyCards/MyCards";
import CreateCard from "./Pages/CreateCard/CreateCard";
import './styles/Main.scss';
import { useTheme } from "./styles/ThemeContext/ThemeContext";
import Signup from "./Pages/Signup/Signup";
import EditCard from "./Pages/EditCard/EditCard";


function App() {
  const user = useSelector((state: TRootState) => state.UserSlice.user);
  const { isDarkMode } = useTheme();

  return (
    <>
      <div
        className={isDarkMode ? 'dark' : 'light'}
      >
        <Header />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/card/:id" element={<CardDetails />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/profile"
            element={
              <RouteGuard user={user!}>
                <Profile />
              </RouteGuard>
            }
          />
          <Route
            path="/favorites"
            element={
              <RouteGuard user={user!}>
                <Favorites />
              </RouteGuard>
            }
          />
          <Route
            path="/my-cards"
            element={
              <RouteGuard user={user!}>
                <MyCards />
              </RouteGuard>
            }
          />
          <Route
            path="createCard"
            element={
              <RouteGuard user={user!}>
                <CreateCard />
              </RouteGuard>
            }
          />
          <Route
            path="/editCard/:id"
            element={
              <RouteGuard user={user!}>
                <EditCard />
              </RouteGuard>
            }
          />
        </Routes>
        <div
          className="sticky bottom-0"
        >
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
