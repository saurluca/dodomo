import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from 'react-router-dom';
import TodosPage from './pages/TodosPage.jsx';
import TestingPage from './pages/TestingPage.jsx';
import Layout from '@/components/Layout.jsx'
import ForbiddenPage from "@/pages/ForbiddenPage.jsx";
import NotePage from "@/pages/NotePage.jsx";
import ProtectedRoute from "@/components/ProtectedRoute.jsx";
import LandingPage from "@/pages/LandingPage.jsx";
import SoundboardPage from "@/pages/SoundboardPage.jsx";
import ToolsPage from "@/pages/ToolsPage.jsx";
import Callback from "@/components/Callback.jsx";
import PublicPage from "@/pages/PublicPage.jsx";
import MemePage from "@/pages/MemePage.jsx";
import ImagePage from "@/pages/ImagePage.jsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/callback" element={<Callback/>}/>
            <Route path="/public" element={<PublicPage/>}/>

            <Route path="/" element={<ProtectedRoute element={<Layout/>}/>}>
                <Route path="/todos" element={<TodosPage/>}/>
                <Route path="/testing" element={<TestingPage/>}/>
                <Route path="/forbidden" element={<ForbiddenPage/>}/>
                <Route path="/notes" element={<NotePage/>}/>
                <Route path="/soundboard" element={<SoundboardPage/>}/>
                <Route path="/tools" element={<ToolsPage/>}/>
                <Route path="/memes" element={<MemePage/>}/>
                <Route path="/images" element={<ImagePage/>}/>
            </Route>
        </>
    )
);


function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App
