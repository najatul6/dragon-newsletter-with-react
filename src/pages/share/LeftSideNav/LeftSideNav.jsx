import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold">All Caterogy</h2>
            <div className="mt-5">
                {
                    categories.map(category => <NavLink
                        to={`/category/${category.id}`}
                        className="block text-[#9F9F9F] text-xl font-semibold py-4 w-full pl-5 hover:bg-[#E7E7E7] rounded-lg"
                        key={category.id}>
                        {category.name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;