import LoginForm from "./components/Authorization/LoginForm/LoginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegistrationForm } from "./components/Authorization/RegistrationForm/RegistrationForm";
import { MainForm } from "./components/MainForm/MainForm";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/authorization" element={<LoginForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/" element={<MainForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;