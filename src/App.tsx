import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";

function App() {
  const navigate = useNavigate();
  // const { data, isLoading } = useAuthQuery();

  const [data] = useState({
    role: "STUDENT",
  });
  const [isLoading] = useState(false);

  useEffect(() => {
    if (!data) {
      navigate("/login");
    }
  }, [data, navigate]);

  return isLoading ? (
    <div>로딩...</div>
  ) : (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {data.role === "STUDENT" ? (
        <Route path="/" element={<PostPage />} />
      ) : data.role === "PRINCIPAL" ? (
        <>
          <Route path="/" element={<ListPage />} />
          <Route path="/:id" element={<DetailPage />} />
        </>
      ) : null}
    </Routes>
  );
}

export default App;
