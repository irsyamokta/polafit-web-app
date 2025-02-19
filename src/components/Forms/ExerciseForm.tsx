import { ChangeEvent, FormEvent } from 'react';
import Back from '../Butttons/Back';
import SubmitForm from '../Butttons/SubmitForm';

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

interface ExerciseFormProps {
    formData: InputFormData;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const ExerciseForm: React.FC<ExerciseFormProps> = ({ formData, handleChange, handleSubmit }) => {

    return (
        <form className="w-full px-4" onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="number"
                    name="height"
                    id="floating_height"
                    value={formData.height}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-200 peer" placeholder=" " required />
                <label htmlFor="floating_height" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tinggi (Cm)</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="number"
                    name="weight"
                    id="floating_weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-200 peer" placeholder=" " required />
                <label htmlFor="floating_weight" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Berat (Kg)</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="number"
                    name="duration"
                    id="floating_duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-200 peer" placeholder=" " required />
                <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Durasi (Menit)</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="number"
                        name="calori"
                        id="floating_calori"
                        value={formData.calori}
                        onChange={handleChange}
                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-200 peer" placeholder=" " required />
                    <label htmlFor="floating_calori" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Kalori Terbakar</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="number"
                        name="age"
                        id="floating_age"
                        value={formData.age}
                        onChange={handleChange}
                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-200 peer" placeholder=" " required />
                    <label htmlFor="floating_age" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Usia</label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <label htmlFor="underline_select" className="sr-only">Underline select</label>
                    <select
                        id="underline_select"
                        name="activity"
                        value={formData.activity}
                        onChange={handleChange}
                        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option value="">Tingkat Aktivitas</option>
                        <option value="Rendah">Rendah</option>
                        <option value="Tinggi">Tinggi</option>
                        <option value="Sedang">Sedang</option>
                    </select>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <label htmlFor="underline_select" className="sr-only">Underline select</label>
                    <select
                        id="underline_select"
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option value="">Tujuan</option>
                        <option value="Pemeliharaan Kebugaran">Pemeliharaan Kebugaran</option>
                        <option value="Peningkatan Massa Otot">Peningkatan Massa Otot</option>
                        <option value="Penurunan Berat Badan">Penurunan Berat Badan</option>
                    </select>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <label htmlFor="underline_select" className="sr-only">Underline select</label>
                    <select
                        id="underline_select"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option value="">Kategori</option>
                        <option value="Fleksibilitas">Fleksibilitas</option>
                        <option value="Kardio">Kardio</option>
                        <option value="Kekuatan">Kekuatan</option>
                    </select>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <label htmlFor="underline_select" className="sr-only">Underline select</label>
                    <select
                        id="underline_select"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option value="">Jenis Kelamin</option>
                        <option value="Pria">Pria</option>
                        <option value="Wanita">Wanita</option>
                    </select>
                </div>
            </div>
            <div className='flex justify-between gap-3'>
                <Back />
                <SubmitForm />
            </div>
        </form>
    )
}

export default ExerciseForm