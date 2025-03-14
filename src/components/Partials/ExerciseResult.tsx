import React from 'react';
import imageBicycle from "../../assets/result/bersepeda.png"
import imageRunning from "../../assets/result/lari.png"
import imageYoga from "../../assets/result/senam.png"
import imageWeight from "../../assets/result/angkat-beban.png"

interface ExerciseResultProps {
    result: string;
}

const exerciseData: Record<string, { img: string; description: string }> = {
    "Bersepeda": {
        img: imageBicycle,
        description: "Bersepeda adalah latihan yang meningkatkan daya tahan tubuh, menguatkan otot kaki, dan baik untuk kesehatan jantung."
    },
    "Lari": {
        img: imageRunning,
        description: "Lari adalah olahraga kardiovaskular yang membantu membakar kalori, meningkatkan kesehatan jantung, dan menguatkan otot kaki."
    },
    "Senam": {
        img: imageYoga,
        description: "Senam adalah latihan yang fleksibel dan dapat membantu meningkatkan kelincahan, kekuatan, serta kesehatan tubuh secara keseluruhan."
    },
    "Angkat Beban": {
        img: imageWeight,
        description: "Angkat beban merupakan latihan kekuatan yang membantu membangun otot, meningkatkan kepadatan tulang, dan meningkatkan metabolisme."
    },
};

const ExerciseResult: React.FC<ExerciseResultProps> = ({ result }) => {

    const exercise = exerciseData[result];

    return (
        <div className="flex flex-col justify-center items-center gap-4 sm:w-1/2 px-4 py-6">
            <h1 className="text-2xl font-semibold mb-5">Rekomendasi Olahraga Anda</h1>
            <img src={exercise.img} alt={`Gambar ${result}`} className="rounded-2xl"/>
            <h1 className="text-3xl md:text-4xl font-bold">{result}</h1>
            <p className="text-center">{exercise.description}</p>
        </div>
    );
};

export default ExerciseResult;