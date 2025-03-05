import { useState, FormEvent } from 'react';
import axios from 'axios';

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

const useNutritionFormHandlers = () => {
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [result, setResult] = useState<NutritionData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleImagePreview = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (imagePreview) {
                URL.revokeObjectURL(imagePreview);
            }
            setImagePreview(URL.createObjectURL(file));
        }
    };
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!image) return;
        setIsLoading(true);
        
        const formData = new FormData();
        formData.append('file', image);

        try {
            const response = await axios.post<NutritionData>(
                import.meta.env.VITE_API_BASE_URL + '/predict_food',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            setResult(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return { imagePreview, handleImageChange, handleImagePreview, handleSubmit, result, isLoading };
};

export default useNutritionFormHandlers;
