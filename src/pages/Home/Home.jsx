import Header from "../share/Header/Header";
import Navbar from "../share/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className="text-3xl">This is home</h2>
        </div>
    );
};

export default Home;