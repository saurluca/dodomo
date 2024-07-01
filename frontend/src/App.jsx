import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from 'react-router-dom';
import TodosPage from './pages/TodosPage.jsx';
import TestingPage from './pages/TestingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Layout from '@/components/Layout.jsx'
import ForbiddenPage from "@/pages/ForbiddenPage.jsx";


const router = createBrowserRouter(
    createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<TodosPage />} />
                <Route path="/testing" element={<TestingPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/forbidden" element={<ForbiddenPage/>}/>
            </Route>
    )
);


function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App
