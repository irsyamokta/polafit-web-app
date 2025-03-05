import React from 'react';

interface NutritionData {
    ID: number;
    Makanan: string;
    Berat_per_Serving: string;
    Kalori: string;
    Protein: string;
    Lemak: string;
    Karbohidrat: string;
    Serat: string;
    Gula: string;
}

interface NutritionResultProps {
    result: NutritionData;
}

const NutritionResult: React.FC<NutritionResultProps> = ({ result }) => {

    return (
        <div className="flex flex-col justify-center items-center gap-4 sm:w-1/2 px-4 py-6 border rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-5">Hasil Prediksi Nutrisi</h1>
            <p className="text-lg font-bold">{result.Makanan}</p>
            <ul className="text-left text-gray-700">
                <li><strong>Berat per Serving:</strong> {result.Berat_per_Serving}g</li>
                <li><strong>Kalori:</strong> {result.Kalori} kcal</li>
                <li><strong>Protein:</strong> {result.Protein}g</li>
                <li><strong>Lemak:</strong> {result.Lemak}g</li>
                <li><strong>Karbohidrat:</strong> {result.Karbohidrat}g</li>
                <li><strong>Serat:</strong> {result.Serat}g</li>
                <li><strong>Gula:</strong> {result.Gula}g</li>
            </ul>
        </div>
    );
}

export default NutritionResult;
