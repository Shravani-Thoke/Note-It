import React, { useState } from 'react'
import { FaPen } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote } from './TodoSlice';
import { colorClasses } from './colors';
import UpdateNote from './UpdateNote';

const Card = ({searchQuery}) => {
    const notes = useSelector(state => state.notes);
    const dispatch = useDispatch();

    const[selectedNote,setSelectedNote]=useState(null);
    const [isupdateOpen,setIsUpdateOpen]=useState(false);

    function handleEdit(note){
        setSelectedNote(note);
        setIsUpdateOpen(true);
    }

    const filteredNotes = searchQuery
  ? notes.filter(
      (note) =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.desc.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : notes; 
    return (
        <div className='relative  rounded-[10px] text-zinc-800 p-5 overflow-hidden font-mono'>
            <div className="flex flex-wrap flex-row gap-4 items-start">
            {
                filteredNotes.map((note) => (
                    
                    <div key={note.id}
                        className={`note max-w-60 h-auto break-words rounded-[10px] p-5 ${colorClasses[note.color]} shadow-md`}>
                        <h3 className='text-[25px] font-bold mb-2'>{note.title}</h3>
                        <p className='mt-2 text-[15px] font-semibold'>{note.desc}</p>
                        <div className='flex justify-between items-center mt-4 text-sm '>
                            <h5>{note.createdAt}</h5>
                            <div className="flex gap-2">
                                <span
                                    onClick={() => {handleEdit(note)}}
                                    className='h-8 w-8 flex items-center justify-center rounded-full bg-zinc-600 cursor-pointer'>
                                    <FaPen size=".9em" color='#fff' />
                                </span>
                                <span
                                    className='h-8 w-8 flex items-center justify-center rounded-full bg-zinc-600 cursor-pointer'
                                    onClick={() => dispatch(deleteNote(note.id))}>
                                    <AiOutlineDelete size={20} color='#fff' />
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            }
            {selectedNote && <UpdateNote
                note={selectedNote}
                isOpen={isupdateOpen}
                onClose={()=>{setIsUpdateOpen(false)}}
            />}
            </div>
            
        </div>
    )
}

export default Card