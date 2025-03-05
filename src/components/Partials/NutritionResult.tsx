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

const iconMap: { [key: string]: string } = {
    Berat_per_Serving: "src/assets/icon/serve.png",
    Kalori: "src/assets/icon/calories.png",
    Protein: "src/assets/icon/protein.png",
    Lemak: "src/assets/icon/fat.png",
    Karbohidrat: "src/assets/icon/carb.png",
    Serat: "src/assets/icon/fiber.png",
    Gula: "src/assets/icon/sugar.png",
};

const unitMap: { [key: string]: string } = {
    Berat_per_Serving: "g",
    Kalori: "kcal",
    Protein: "g",
    Lemak: "g",
    Karbohidrat: "g",
    Serat: "g",
    Gula: "g",
};

const NutritionResult: React.FC<NutritionResultProps> = ({ result }) => {

    const nutritionItems = Object.entries(result)
        .filter(([key]) => key !== "ID" && key !== "Makanan")
        .map(([key, value]) => ({
            img: iconMap[key] || "src/assets/icon/default.png",
            label: key,
            amount: `${value} ${unitMap[key] || ""}`.trim(),
        }));

    return (
        <div className="flex flex-col justify-center items-center gap-5 px-4 py-6 max-w-screen-md mx-auto">
            <img src="src/assets/icon/check.png" alt="icon check" className="rounded-2xl w-24" />
            <h1 className="text-3xl md:text-4xl font-bold text-center">{result.Makanan}</h1>

            <div className="flex flex-col items-center gap-4 w-full max-w-lg mt-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    {nutritionItems.slice(0, 4).map((item, index) => (
                        <div key={index} className="flex flex-col justify-center items-center bg-slate-300 w-28 h-28 p-5 gap-2 rounded-lg">
                            <img src={item.img} alt={item.label} className="w-10 h-10" />
                            <h1 className="text-lg font-bold">{item.amount}</h1>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
                    {nutritionItems.slice(4).map((item, index) => (
                        <div key={index} className="flex flex-col justify-center items-center bg-slate-300 w-28 h-28 p-5 gap-2 rounded-lg">
                            <img src={item.img} alt={item.label} className="w-10 h-10" />
                            <h1 className="text-lg font-bold">{item.amount}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NutritionResult;
