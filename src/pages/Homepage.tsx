import { Link } from "react-router"
import ButtonRecomendation from "../components/Butttons/Recomendation"
import ButtonNutritionCheck from "../components/Butttons/NutritionCheck"
const Homepage = () => {
    return (
        <section className="h-[100vh] flex flex-col justify-center items-center lg:flex-row py-16 md:py-56 lg:py-20">
            <div className="py-8 mx-auto">
                <h1 className="mb-8 text-3xl text-center lg:text-start font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl 2xl:text-7xl">Bantu Kamu Sehat dengan Pola yang Tepat</h1>
                <p className="mb-8 text-base text-center font-normal text-gray-500 md:text-lg lg:text-xl lg:text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro atque consectetur ipsa veniam eveniet! Minus numquam repellat sit, commodi facere deserunt et accusamus! Est libero aliquam maiores ipsa corporis iste!</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center lg:justify-start sm:space-y-0">
                    <Link to="/">
                        <ButtonRecomendation />
                    </Link>
                    <Link to="/">
                        <ButtonNutritionCheck />
                    </Link>
                </div>
            </div>
            <img src="/src/assets/img-hero.png" className="w-2/3 lg:w-2/5" alt="healthy food" />
            <img src="/src/assets/img-element.png" className="absolute bottom-0  -z-10" alt="wave" />
        </section>
    )
}

export default Homepage