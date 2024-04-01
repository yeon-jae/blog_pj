import { Route, Routes, Navigate } from "react-router-dom";
import Home from "pages/home";
import PostsList from "pages/posts";
import PostsDetail from "pages/posts/detail";
import PostsNew from "pages/posts/new";
import PostsEdit from "pages/posts/edit";
import ProfilePage from "pages/profile";
import Login from "pages/login";
import Signup from "pages/singup";
interface RouterProps {
  isAuthenticated: boolean;
}

export default function Router({ isAuthenticated }: RouterProps) {
  //firebase Auth가 인증되었다면 true로 변경해주는 로직 추가
  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostsList />} />
            <Route path="/posts/:id" element={<PostsDetail />} />
            <Route path="/posts/new" element={<PostsNew />} />
            <Route path="/posts/edit/:id" element={<PostsEdit />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Login />} />
          </>
        )}
      </Routes>
    </>
  );
}
