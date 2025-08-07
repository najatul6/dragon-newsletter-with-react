import { useLoaderData } from "react-router-dom";
import Header from "../share/Header/Header";
import LeftSideNav from "../share/LeftSideNav/LeftSideNav";
import Navbar from "../share/Navbar/Navbar";
import RightSideNav from "../share/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData();


    return (
        <div className="max-w-[1440px] mx-auto">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border-red-600">
                    {
                        news?.slice(0,3).map(aNews => <NewsCard key={aNews.id} aNews={aNews}></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;