import imageHero from "../assets/img-hero.png"
import imageElement from "../assets/img-element.png"
import { Link } from "react-router"
import ButtonRecomendation from "../components/Butttons/Recomendation"
import ButtonNutritionCheck from "../components/Butttons/NutritionCheck"
import Navbar from "../components/Partials/Header"

const Homepage = () => {
    return (
        <>
            <Navbar />
            <section className="relative h-[100vh] flex flex-col justify-center items-center lg:flex-row py-20 md:py-56 lg:py-28 px-4">
                <div className="py-8 mx-auto">
                    <h1 className="mb-8 text-3xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl 2xl:text-7xl">Bantu Kamu Sehat dengan Pola yang Tepat</h1>
                    <p className="mb-8 text-base font-normal text-gray-500 md:text-lg lg:text-xl">
                        Dapatkan rekomendasi olahraga dan pola makan yang sesuai dengan kebutuhan tubuhmu. Kami membantumu menemukan keseimbangan yang tepat antara aktivitas fisik dan asupan nutrisi untuk mencapai gaya hidup sehat secara optimal.
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center lg:justify-start sm:space-y-0">
                        <Link to="/rekomendasi-olahraga">
                            <ButtonRecomendation />
                        </Link>
                        <Link to="/cek-nutrisi">
                            <ButtonNutritionCheck />
                        </Link>
                    </div>
                </div>
                <img src={imageHero} className="w-5/6 lg:w-2/5" alt="healthy food" />
                <img src={imageElement} className=" absolute bottom-0 right-0 h-28 w-full lg:h-auto -z-20" alt="wave" />
            </section>
        </>
    )
}

export default Homepage