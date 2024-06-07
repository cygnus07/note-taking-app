import axios from "axios";

const API_URL = "http://localhost:5000/api/notes";

// Function to fetch all notes
export const fetchAllNotes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching notes:", error);
    throw error; // Handle the error appropriately
  }
};


export const createNote = async (newNote) => {
  try {
    const response = await axios.post(API_URL, newNote);
    return response.data;
  } catch (error) {
    console.error("Error creating note:", error);
    throw error; // Handle the error appropriately
  }
};

//Function to update note
export const updateNote = async (id, updatedNote) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedNote);
    return response.data;
  } catch (error) {
    console.error("Error updating note:", error);
    throw error;
  }
};

export const deleteNote = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`); // Make DELETE request to the backend
    } catch (error) {
      console.error('Error deleting note:', error);
      throw error; // Handle the error appropriately
    }
  };

