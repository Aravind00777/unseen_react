import img from '../assets/image/latest-bg.png';
import LazyLoadImage from './Lazyload';

export default function Readmore(){

    const data = {
        readmoredata: [
            {
                number:"15",
                title:"Lorem ipsum dolor sit amet, consectetur adipiscing",
                readmore:"read more"
            },
            {
                number:"15",
                title:"Lorem ipsum dolor sit amet, consectetur adipiscing",
                readmore:"read more"
            },
            {
                number:"15",
                title:"Lorem ipsum dolor sit amet, consectetur adipiscing",
                readmore:"read more"
            }
        ],
        title1:"Lorem ipsum ",
        title2:"consectetur adipiscing",
        title3:"adipiscing elit.",
        bg:img
    };

    return <section className="bg-black py-16">
        <div className="container">
            <div className='relative z-[1]'>
                <LazyLoadImage 
                src={data.bg}
                className='object-cover w-full h-full'
                alt="backgrond"
                />
                
                <h2 className='text-45px max-3xl:text-[40px] max-2xl:text-4xl text-white font-bold left-8 absolute z-[2] bottom-8'>
                    <span className='block'>{data.title1}</span>
                    <span className='block'>{data.title2}</span>
                    <span className='block'>{data.title3}</span>
                </h2>
           
            </div>
            <ul className="flex pt-10 max-lg:flex-wrap max-lg:gap-4">
                    {data?.readmoredata?.map((item , index) => (
                        <li className="flex-1 mx-3 bg-darkgrey rounded-xl p-6 text-white max-lg:mx-0" key={index}>
                        <span className='block text-45px max-3xl:text-[40px] max-2xl:text-4xl max-xl:text-3xl border max-w-16 font-bold text-center rounded-xl'>{item.number}</span>
                        <h4 className='py-8 max-xl:py-4 text-2xl max-2xl:text-xl max-xl:text-lg font-bold'>{item.title}</h4>
                        <a href="" className='duration-300 ease-in-out hover:bg-dark-pink inline-block uppercase text-base px-10 py-3 border border-dark-pink rounded-full  max-xl:py-3 max-xl:text-sm'>{item.readmore}</a>
                    </li>
                    ))}
                    
                </ul>
        </div>
    </section>
}