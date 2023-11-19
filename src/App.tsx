import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./globals.css";
import AuthLayout from "./_auth/AuthLayout";
import SighnIn from "./_auth/forms/SignIn";
import SignUp from "./_auth/forms/SignUp";
import { Home } from "./_root/pages";
import RootLayout from "./_root/RootLayout";

const App = () => {
  return (
    <main>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SighnIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;
