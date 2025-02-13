import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface InputFormData {
    height: string;
    weight: string;
    duration: string;
    calori: string;
    age: string;
    activity: string;
    goal: string;
    category: string;
    gender: string;
}

const useFormHandlers = () => {
    const [formData, setFormData] = useState<InputFormData>({
        height: '',
        weight: '',
        duration: '',
        calori: '',
        age: '',
        activity: '',
        goal: '',
        category: '',
        gender: ''
    });

    const [result, setResult] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                import.meta.env.VITE_API_BASE_URL + '/predict_exercise',
                formData
            );
            setResult(response.data.recommended_exercise);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return { formData, handleChange, handleSubmit, result };
};

export default useFormHandlers;
