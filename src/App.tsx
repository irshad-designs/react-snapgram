import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./globals.css";
import AuthLayout from "./_auth/AuthLayout";
import SighnIn from "./_auth/forms/SignIn";
import SignUp from "./_auth/forms/SignUp";
import {
  AllUser,
  CreatePost,
  EditPost,
  Explore,
  Home,
  PostDetails,
  Profile,
  Saved,
  UpdateProfile,
} from "./_root/pages";
import RootLayout from "./_root/RootLayout";

const App = () => {
  return (
    <main className="flex justify-center h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SighnIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route path="/all-users" element={<AllUser />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/edit-post/:id" element={<EditPost />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/post-details/:id" element={<PostDetails />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;
