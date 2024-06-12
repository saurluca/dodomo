import { buttonVariants } from "@/components/ui/button"
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <div>
            <h1 className="text-4xl">THE HOME PAGE</h1>
            <Link className={buttonVariants({ variant: "outline" })} to="todos">Click here</Link>
        </div>
    )
};

export default HomePage;
