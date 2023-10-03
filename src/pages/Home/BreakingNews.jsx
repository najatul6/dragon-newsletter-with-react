import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex p-4 bg-[#F3F3F3] my-8 pr-10">
            <div className="pr-5">
                <button className="px-6 py-2 bg-[#D72050] text-xl font-semibold text-white">Latest</button>
            </div>
            <Marquee className="text-lg font-semibold text-[#403F3F] ">
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military
            </Marquee>
        </div>
    );
};

export default BreakingNews;