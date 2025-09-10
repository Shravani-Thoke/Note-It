import { createSlice } from '@reduxjs/toolkit'

const loadNotes = () => {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
}

const saveNotes = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes))
}

const initialState = loadNotes();

export const TodoSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action) => {
            const newNote = {
                id: Date.now(),
                title: action.payload.title,
                desc: action.payload.desc,
                color: action.payload.color,
                createdAt: new Date().toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                }),
            };
            state.push(newNote);
            saveNotes(state);
        },
        deleteNote: (state, action) => {
            const updated = state.filter((note) => note.id !== action.payload)
            saveNotes(updated);
            return updated;
        },
        updateNote: (state, action) => {
            const {id,title,desc,color}=action.payload;
            const index=state.findIndex((note)=>note.id===id);
            if(index!==-1){
                state[index]={...state[index],title,desc,color};
                saveNotes(state);
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { addNote, deleteNote, updateNote } = TodoSlice.actions

export default TodoSlice.reducer