import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home";
import PostsList from "../pages/posts";
import PostsDetail from "../pages/posts/detail";
import PostsNew from "../pages/posts/new";
import PostsEdit from "../pages/posts/edit";
import ProfilePage from "../pages/profile";
import Login from "../pages/login";
import Signup from "../pages/singup";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<PostsList />} />
      <Route path="/posts/:id" element={<PostsDetail />} />
      <Route path="/posts/new" element={<PostsNew />} />
      <Route path="/posts/edit/:id" element={<PostsEdit />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
