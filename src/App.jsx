import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import BlogPost from "./pages/BlogPost";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import { AuthRutas } from "./hooks/auth";

function App() {
  return (
    <>
      <Menu />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/blog" element={<BlogPage />}>
          {/* aqui ya no es necesario colocar /blog/:slug ya que blogPage esta envolviendo blogpost */}
          <Route path=":slug" element={<BlogPost />} />
        </Route>

        <Route
          path="/profile"
          element={
            <AuthRutas>
              <ProfilePage />
            </AuthRutas>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/logout"
          element={
            <AuthRutas>
              <LogoutPage />
            </AuthRutas>
          }
        />

        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </>
  );
}

export default App;
