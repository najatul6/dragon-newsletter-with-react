import { Outlet,Link } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-Poppins">
            <Outlet />
            <footer>
                <div className="text-center py-4 flex justify-center items-center gap-1">
                    <p>&copy; {new Date().getFullYear()} The Dragon News. All rights reserved by - <Link to="https://najatul-islam.vercel.app/" target="_blank" className="text-bold text-xl cursor-pointer underline">Najatul Islam</Link>.</p>
                </div>
            </footer>
        </div>
    );
};

export default Root;