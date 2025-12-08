import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
import { HomePage } from "./components/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={<SignUp />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/homepage" element={<HomePage />} />
    </Routes>
  );
}

export default App;
