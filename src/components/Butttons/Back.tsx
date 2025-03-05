import { Link } from "react-router"
const Back = () => {
    return (
        <Link to="/" type="button" className="text-white bg-transparent border border-white hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
            Kembali
        </Link>
    );
}

export default Back;