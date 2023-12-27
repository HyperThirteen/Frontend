import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  const navigate = useNavigate();
  // const { data, isLoading } = useAuthQuery();

  const [data] = useState(null);
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
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
