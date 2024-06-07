import React from "react"

const NoteEditor = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    };
    return (
        <form action="{handleSubmit}" className="note-editor">
            <input 
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
           />
           <textarea 
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
           />
           <button type="submit">Save</button>
        </form>
    )
}


export default NoteEditor;