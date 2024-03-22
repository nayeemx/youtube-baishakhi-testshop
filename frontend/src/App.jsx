import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, SignupPage } from "./Routes";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;