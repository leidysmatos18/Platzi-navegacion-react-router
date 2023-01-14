import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <>
      <Menu />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </>
  );
}

export default App;
