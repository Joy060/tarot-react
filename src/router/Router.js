import { Routes,Route} from "react-router-dom";

// 404 page
// import { createBrowserRouter } from "react-router-dom";
// import ErrorPage from "./ErrorPage";

// 路由管制
import PrivateRoute from "../router/PrivateRouter";

// 各分頁導入
import Homepage from "../pages/home";
import Dashboard from '../pages/dashboard';
import About from "../pages/about";
import Login from '../pages/login';
import Signup from '../pages/signup';

import Pickup from '../pages/pickup';
import PickupResult from '../pages/result';

import Learn from '../pages/learn';

import Collection from '../pages/collection';

import Editor from '../pages/editor';

import Pick1A from '../pages/Pick1A';
import Pick1B from '../pages/Pick1B';
import Pick2Type from "../pages/Pick2Type";
import Pick2Input from "../pages/Pick2Input";
import PickStart from "../pages/PickStart";
import ScrollToTop from "./ScrollToTop";


// 跳轉錯誤頁
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Homepage />,
//     // 當這個路由或其子路由出錯時，會渲染這個組件
//     errorElement: <ErrorPage />, 
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// 路由管理
const Router = () => {

    return( 
        <div>
                <ScrollToTop /> {/* 放在這裡，每次路由換頁都會觸發它 */}
                <Routes>
                    {/* 訪客首頁 */}
                    <Route path="/" element={<Homepage />} />

                    {/* 登入與註冊 */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />

                    {/* 占卜過程 */}
                    <Route path="/pickup" element={<Pickup />} />
                    <Route path="/Pick1A" element={<Pick1A />} />
                    <Route path="/Pick1B" element={<Pick1B />} />
                    <Route path="/Pick2Type" element={<Pick2Type />} />
                    <Route path="/Pick2Input" element={<Pick2Input />} />
                    <Route path="/PickStart" element={<PickStart />} />
                    <Route path="/pickup/result" element={<PickupResult />} />

                    {/* 關於本站 */}
                    <Route path="/about" element={<About />} />

                    {/* 學習塔羅 */}
                    <Route path="/learn" element={<Learn />} />

                    {/* 會員首頁(需登入) */}
                    <Route 
                        path="/dashboard" 
                        element={    
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        } 
                    />

                    {/* 圖鑑(需登入) */}
                    <Route 
                        path="/collection" 
                        element={
                                <Collection />
                            // <PrivateRoute>
                            // </PrivateRoute>
                        } 
                    />

                    {/* 編輯圖片(需登入) */}
                    <Route 
                        path="/editor" 
                        element={
                            <PrivateRoute>
                                <Editor />
                            </PrivateRoute>
                        } 
                    />
                </Routes>
        </div>
    );
};

export default Router;