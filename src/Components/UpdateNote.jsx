import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateNote } from './TodoSlice';
import { colorClasses } from './colors';
import { useEffect } from 'react';

const UpdateNote = ({ note ,isOpen, onClose }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [color, setColor] = useState("yellow");

    useEffect(()=>{
        if(isOpen && note){
            setTitle(note.title ?? "");
            setDesc(note.desc ?? "");
            setColor(note.color ?? "yellow");
        }
            
    },[isOpen,note]);

    if (!isOpen || !note) return null;

    function handleSubmit(e) {
        e.preventDefault();
        if (!title.trim()) return;
        dispatch(updateNote({ id : note.id,title, desc, color }))
        onClose(); // <-- Add this line to close the modal after update
    }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-zinc-900 text-white rounded-xl p-6 w-96 shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Update Note</h2>

                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={title}
                        className="p-2 rounded bg-zinc-800 outline-none"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        value={desc}
                        className="p-2 rounded bg-zinc-800 outline-none resize-none h-32"
                        onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                    <div className='flex gap-3 justify-center items-center'>
    
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
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default UpdateNote