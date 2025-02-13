import React from 'react';

interface ExerciseResultProps {
    result: string;
}

const ExerciseResult: React.FC<ExerciseResultProps> = ({ result }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 sm:w-1/2 px-8">
            <h1 className="text-2xl font-semibold mb-5">Rekomendasi Olahraga Anda</h1>
            <img src="src/assets/result/img-bersepeda.webp" alt="img result" className="lg:w-1/2 rounded-2xl"/>
            <h1 className="text-4xl font-bold">{result}</h1>
            <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur in consequuntur temporibus culpa voluptate ipsam dicta ea harum placeat molestiae.</p>
        </div>
    )
}

export default ExerciseResult