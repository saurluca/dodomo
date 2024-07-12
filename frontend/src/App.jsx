import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from 'react-router-dom';
import TodosPage from './pages/TodosPage.jsx';
import TestingPage from './pages/TestingPage.jsx';
import Layout from '@/components/Layout.jsx'
import ForbiddenPage from "@/pages/ForbiddenPage.jsx";
import NotePage from "@/pages/NotePage.jsx";
import ProtectedRoute from "@/components/ProtectedRoute.jsx";
import LandingPage from "@/pages/LandingPage.jsx";
import SoundboardPage from "@/pages/SoundboardPage.jsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/landing" element={<LandingPage/>}/>

            <Route path="/" element={<ProtectedRoute element={<Layout/>}/>}>
                <Route index element={<TodosPage />} />
                <Route path="/testing" element={<TestingPage/>}/>
                <Route path="/forbidden" element={<ForbiddenPage/>}/>
                <Route path="/notes" element={<NotePage/>}/>
                <Route path="/soundboard" element={<SoundboardPage/>}/>
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
