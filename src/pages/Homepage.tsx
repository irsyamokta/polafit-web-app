import { Link } from "react-router"
const Homepage = () => {
    return (
        <section className="h-[100vh] flex flex-col justify-center items-center lg:flex-row py-16 md:py-56 lg:py-20">
            <div className="py-8 mx-auto">
                <h1 className="mb-8 text-3xl text-center lg:text-start font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl 2xl:text-7xl">Bantu Kamu Sehat dengan Pola yang Tepat</h1>
                <p className="mb-8 text-base text-center font-normal text-gray-500 md:text-lg lg:text-xl lg:text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro atque consectetur ipsa veniam eveniet! Minus numquam repellat sit, commodi facere deserunt et accusamus! Est libero aliquam maiores ipsa corporis iste!</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center lg:justify-start sm:space-y-0">
                    <Link to="/" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-secondary focus:ring-4 focus:ring-blue-300">
                        Rekomendasi Olahraga
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                    <Link to="/" className="py-3 px-5 sm:ms-4 text-sm text-center font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-100">
                        Cek Nutrisi Makanan
                    </Link>
                </div>
            </div>
            <img src="/src/assets/img-hero.png" className="w-2/3 lg:w-2/5" alt="healthy food" />
            <img src="/src/assets/img-element.png" className="absolute bottom-0  -z-10" alt="wave" />
        </section>
    )
}

export default Homepage