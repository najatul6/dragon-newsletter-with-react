import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-Poppins">
            <Outlet />
            
        </div>
    );
};

export default Root;