import img1 from "../assets/image/HBO.png";
import img2 from "../assets/image/Netflix.png";
import img3 from "../assets/image/Disney+.png";
import img4 from "../assets/image/paramount.png";
import img5 from "../assets/image/20th-century.png";
import img6 from "../assets/image/sky.png";
import img7 from "../assets/image/amazon_studio.png";
import img8 from "../assets/image/WB.png";
import img9 from "../assets/image/hulu.png";
import img10 from "../assets/image/Universal.png";

export default function Logosec (){

    const datasec = {
        title:"Our students are working with",
        grid:[
            {image:img1},
            {image:img2},
            {image:img3},
            {image:img4},
            {image:img5},
            {image:img6},
            {image:img7},
            {image:img8},
            {image:img9},
            {image:img10},
        ]

    }
    return <section className="pt-12 pb-20 max-2xl:pb-14 max-2xl:pt-10">
        <div className="container ">
            <h2 className="text-45px max-3xl:text-[40px] max-2xl:text-4xl font-bold">{datasec.title}</h2>
            <ul className=" py-16 max-2xl:py-10 flex-wrap grid grid-flow-col grid-rows-2  items-center gap-8">
                {datasec.grid.map((item , index) => (
                    <li key={index}><img className="w-full object-contain h-full" src={item.image} alt="" /></li>
                ))}
                
            </ul>
        </div>
    </section>
}