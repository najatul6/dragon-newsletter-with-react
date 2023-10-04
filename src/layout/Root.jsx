import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-Poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;