import { Outlet } from 'react-router-dom';
import {Header} from '@/components/Header';
import {Sidebar} from '@/components/Sidebar';

const Layout = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <Header />
                <main className="flex-grow p-4">
                    <Outlet /> {/* This will render the matched route component */}
                </main>
            </div>
        </div>
    );
};

export default Layout;
