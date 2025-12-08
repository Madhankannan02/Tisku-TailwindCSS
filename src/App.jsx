import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={<SignUp />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
