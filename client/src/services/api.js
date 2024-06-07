import axios from "axios"

const API_URL = 'http://localhost:5000/api/notes';

// function to fetch all the notes

export const fetchAllNotes = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching notes: ", error)
        throw err
    }
}