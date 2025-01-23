

export default function Banner(props){
    const [bannerItems, setBannerItems] = useState([]);

        useEffect(() => {
            fetch('http://localhost:3001/navItems')
              .then((response) => response.json())
              .then((data) => setNavItems(data))
              .catch((error) => console.error('Error fetching navitems:', error));
          }, []);
    return (
       <section className="bg-black py-20">
        <div className="container">

        </div>
       </section>
    )
}