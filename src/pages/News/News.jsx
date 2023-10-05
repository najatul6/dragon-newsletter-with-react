import { useParams } from "react-router-dom";
import Header from "../share/Header/Header";
import RightSideNav from "../share/RightSideNav/RightSideNav";
import Navbar from "../share/Navbar/Navbar";

const News = () => {
    const { id } = useParams()
    console.log(id)
    return (
        <div >
            <Header></Header>
            <Navbar></Navbar>
            <div className="max-w-[1440px] mx-auto mt-8">
                <div className="grid md:grid-cols-4 gap-3">
                    <div className="col-span-3 border p-4">
                        <h2 className="text-xl font-semibold">Dragon News</h2>

                    </div>
                    <div className="border">
                        <RightSideNav></RightSideNav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;