import LazyLoadImage from './Lazyload';
import img1 from "../assets/image/festival-img1.png";
import img2 from "../assets/image/festival-img2.png";
import img3 from "../assets/image/festival-img3.png";

export default function Latestnews(){

    const latestnews = {
        news:[
            {
                image:img1,
                titles:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor.",
                readmore:"read more"
            },
            {
                image:img2,
                titles:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor.",
                readmore:"read more"
            },
            {
                image:img3,
                titles:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor.",
                readmore:"read more"
            }
        ],
        newstitle:"Latest news"
    }
    return <section className="pt-20 pb-6 max-xl:pt-14">
        <div className="container ">
            <ul className='flex items-center pb-20 max-3xl:pb-16 max-xl:pb-10 max-lg:flex-wrap max-lg:gap-4 justify-center' >
                {latestnews?.news?.map((item , index) => (
                    <li key={index} className='flex-1 p-6 max-xl:p-3 bg-lightgrey rounded-[20px] mx-3 max-lg:mx-0  max-lg:basis-[45%] max-lg:max-w-[45%] max-md:basis-[70%] max-md:max-w-[70%] max-sm:basis-[100%] max-sm:max-w-[100%]'>
                    <LazyLoadImage 
                    src={item.image}
                    className="object-contain w-full "
                    />
                    <span className='block pt-6 pb-10 text-2xl max-3xl:text-[22px] max-2xl:text-xl max-xl:text-lg font-bold'>{item.titles}</span>
                    <a href="" className='text-lg capitalize hover:text-dark-pink duration-300 ease-in-out'>{item.readmore}</a>
                </li>
                ))}
                
            </ul>
            <h3 className='text-45px max-3xl:text-[40px] max-2xl:text-4xl max-xl:text-3xl max-lg:text-2xl font-bold'>{latestnews.newstitle}</h3>
        </div>
    </section>
}                                                               