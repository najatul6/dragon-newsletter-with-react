import { AiOutlineShareAlt } from "react-icons/ai";
import { BsBookmark, BsEyeFill } from "react-icons/bs";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const NewsCard = ({ aNews }) => {
    const { author, title, image_url, details, rating, total_view, _id } = aNews
    // console.log(news)
    return (
        <div className="rounded-xl shadow-xl my-7">
            <div className="flex items-center justify-between py-4 px-5 bg-[#F3F3F3] rounded-t-xl">
                <div className="flex items-center">
                    <img className="w-[40px] rounded-full mr-4" src={author.img} alt="" />
                    <div>
                        <h2 className="font-semibold">{author.name}</h2>
                        <p className="text-[#706F6F]">{author.published_date}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3 text-2xl">
                    <BsBookmark></BsBookmark>
                    <AiOutlineShareAlt></AiOutlineShareAlt>
                </div>
            </div>
            <div className="py-4 px-5">
                <div>
                    <p className="text-xl font-bold mt-4 mb-5">{title}</p>
                    <img className="w-full h-80 rounded-lg mb-8" src={image_url} alt={title} />
                    {
                        details.length > 200 ?
                            <p className="text-[#706F6F]">{details.slice(0, 200)}... <Link className="text-[#FF8C47] font-semibold" to={`/news/${_id}`}>Read More</Link></p>
                            :
                            <p className="text-[#706F6F]">{details}</p>
                    }
                </div>
                <hr className="my-5 h-1 bg-[#E7E7E7]" />
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <p>{rating.badge}</p>
                        <p className="text-[#706F6F]">{rating.number}</p>
                    </div>
                    <div className="text-[#706F6F] flex items-center space-x-3">
                        <BsEyeFill className="text-2xl"></BsEyeFill>
                        <p className="font-medium">{total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    aNews: PropTypes.object,
}

export default NewsCard;

