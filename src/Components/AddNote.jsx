import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNote } from './TodoSlice';
import { colorClasses } from './colors';

const AddNote = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [color, setColor] = useState("yellow");
    if (!isOpen) return null;

    function handleSubmit(e) {
        e.preventDefault();
        if (!title.trim()) return;
        dispatch(addNote({ title, desc, color }))
        setTitle("");
        setDesc("");
        setColor("yellow");
        onClose();
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-zinc-900 text-white rounded-xl p-6 w-96 shadow-lg max-w-sm sm:max-w-md md:max-w-lg">
                <h2 className="text-xl font-semibold mb-4">Add a Note</h2>

                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        className="p-2 rounded bg-zinc-800 outline-none"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Write your note..."
                        className="p-2 rounded bg-zinc-800 outline-none resize-none h-32"
                        onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                    <div className='flex gap-3 justify-center items-center'>
                        {/* <button className='h-5 w-5 rounded-full bg-yellow-200 cursor-pointer' onClick={(e)=>{setColor("yellow")}}></button>
                            <button className='h-5 w-5 rounded-full bg-green-200 cursor-pointer' onClick={(e)=>{setColor("green")}}></button>
                            <button className='h-5 w-5 rounded-full bg-pink-200 cursor-pointer' onClick={(e)=>{setColor("pink")}}></button>
                            <button className='h-5 w-5 rounded-full bg-blue-200 cursor-pointer' onClick={(e)=>{setColor("blue")}}></button>
                            <button className='h-5 w-5 rounded-full bg-purple-200 cursor-pointer' onClick={(e)=>{setColor("purple")}}></button>
                            <button className='h-5 w-5 rounded-full bg-teal-200 cursor-pointer' onClick={(e)=>{setColor("teal")}}></button> */}
                        {
                            Object.keys(colorClasses)
                                .map((c) => (
                                    <button
                                        key={c}
                                        type='button'
                                        className={`h-5 w-5 rounded-full cursor-pointer border-2 ${color === c ? 'scale-125 border-white' : 'border-transparent'} ${colorClasses[c]}`}
                                        onClick={(e) => { setColor(c) }}
                                    >
                                    </button>
                                ))
                        }
                    </div>
                    <div className="flex justify-center gap-3 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded bg-zinc-700 hover:bg-zinc-600"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded bg-sky-500 hover:bg-sky-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddNote