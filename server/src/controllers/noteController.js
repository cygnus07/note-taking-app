import Note from "../models/note.model.js"


// controller to fetch all the notes
export const getNotes = async (req,res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        res.status(500).json({message: "something went wrong"})
    }
};


// controller to fetch notes by id
export const getNoteById = async (req,res) => {
    try {
        const note= await Note.findById(req.params.id);
        if (note) {
            res.json(note)
        } else {
            res.status(404).json({message: "Note could not be found"})
        }
    } catch (error) {
        res.status(500).json({message: "something went wrong"})
    }
}

// controller to create a new note
export const createNote = async(req,res) =>{
    try {
        // console.log(req.body);
        const {title, content} = req.body;
        const newNote = new Note({title, content});
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        res.status(400).json({error : error.message})
    }
};


// controller to update a note
export const updateNote = async(req,res) => {
    try {
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            {title, content},
            {new: true}
        )

        if (updatedNote) {
            res.json(updatedNote);
        } else {
            res.status(404).json({message: "Note not found"});
        }
    } catch (error) {
        res.status(401).json({error: error.message})
    }
}

// controller to delete a note
export const deleteNote = async(req,res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) {
            res.status(404).json({error: "Note not found"})
        } else {
            
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}