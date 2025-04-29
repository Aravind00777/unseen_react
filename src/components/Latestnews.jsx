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
        ]
    }
    return <section className="pt-20 pb-6">
        <div className="container pb-20">
            <ul className='flex items-center'>
                {latestnews?.news?.map((item , index) => (
                    <li key={index} className='flex-1 p-6 bg-lightgrey rounded-[20px] mx-3'>
                    <LazyLoadImage 
                    src={item.image}
                    className="object-contain w-full "
                    />
                    <span className='block pt-6 pb-10 text-2xl font-bold'>{item.titles}</span>
                    <a href="" className='text-lg '>{item.readmore}</a>
                </li>
                ))}
                
            </ul>
        </div>
    </section>
}