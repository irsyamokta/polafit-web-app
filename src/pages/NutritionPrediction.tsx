import NutritionForm from "../components/Forms/NutritionForm";
import NoResult from "../components/Partials/NoResult";
import NutritionResult from "../components/Partials/NutritionResult";
import Spinner from "../components/Partials/Spinner";
import useNutritionFormHandlers from "../hooks/useNutritionFormHandlers";

const NutritionPrediction = () => {
    const { handleImageChange, imagePreview, handleSubmit, result, isLoading  } = useNutritionFormHandlers();

    return (
        <section className="flex flex-col lg:flex-row lg:h-[100vh] justify-center items-center gap-5">
            <div className="flex flex-col justify-center items-center bg-primary w-full lg:w-1/2 h-screen gap-5">
                <h1 className="text-white text-2xl font-semibold">Masukan Gambar Makanan</h1>
                <NutritionForm 
                    handleImageChange={handleImageChange}
                    handleSubmit={handleSubmit}
                    imagePreview={imagePreview}
                />
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center">
                {isLoading ? (
                    <Spinner />
                ) : result ? (
                    <NutritionResult result={result} />
                ) : (
                    <NoResult />
                )}
            </div>
        </section>
    )
}

export default NutritionPrediction;