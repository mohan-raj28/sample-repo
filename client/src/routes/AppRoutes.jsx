import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<BasicLayouts />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/sign-up" element={<SignUp />} /> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
