import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PopPage from "./pages/PopPage/PopPage";
import MyPage from "./pages/MyPage/MyPage";
import NavigationBar from "./components/NavigationBar";
import SettingPage from "./pages/SettingPage/SettingPage";
import MyDetailPage from "./pages/MyDetailpage/MyDetailPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import UploadDonePage from "./pages/UploadDonePage/UploadDonePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import KakaoHandlerPage from "./pages/KakaoHandlerPage/KakaoHandlerPage";
import InstagramHandlerPage from "./pages/InstagramHandlerPage/InstagramHandlerPage";
import AuthLayout from "./layouts/AuthLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route element={<AuthLayout />}>
          <Route path="/pop" element={<PopPage />}>
            <Route path="post/:postId" element={<PopPage />}></Route>
          </Route>
          <Route path="/profile" element={<MyPage />}>
            <Route path="post/:postId" element={<MyDetailPage />}></Route>
          </Route>
          <Route path="/profile/setting" element={<SettingPage />}></Route>
          <Route path="/upload" element={<UploadPage />}></Route>
          <Route path="/upload-done" element={<UploadDonePage />}></Route>
        </Route>
        <Route path="/kakao/callback" element={<KakaoHandlerPage />}></Route>
        <Route
          path="/instagram/callback"
          element={<InstagramHandlerPage />}
        ></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <NavigationBar />
    </BrowserRouter>
  );
}

export default App;
