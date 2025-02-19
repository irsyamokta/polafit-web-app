import ExerciseForm from "../components/Forms/ExerciseForm";
import ExerciseResult from "../components/Partials/ExerciseResult";
import NoResult from "../components/Partials/NoResult";
import Spinner from "../components/Partials/Spinner";
import useFormHandlers from '../hooks/useFormHandlers';

const ExerciseRecomendation = () => {
    const { formData, handleChange, handleSubmit, result, isLoading } = useFormHandlers();

    return (
        <section className="flex flex-col lg:flex-row lg:h-[100vh] justify-center items-center gap-5">
            <div className="flex flex-col justify-center items-center bg-primary w-full lg:w-1/2 h-screen gap-5">
                <h1 className="text-white text-2xl font-semibold mb-10">Lengkapi Data</h1>
                <ExerciseForm
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center">
                {isLoading ? (
                    <Spinner />
                ) : result ? (
                    <ExerciseResult result={result} />
                ) : (
                    <NoResult />
                )}
            </div>
        </section>
    );
};

export default ExerciseRecomendation;
