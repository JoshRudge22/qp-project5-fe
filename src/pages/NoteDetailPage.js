import React from 'react';
import { useParams } from 'react-router-dom';

function NoteDetailPage() {
  const { id } = useParams();
  const mockNote = { id: 1, title: 'Note about diet', content: 'This is the detailed content.' };

  if (mockNote.id !== parseInt(id, 10)) {
    return <p>Note not found.</p>;
  }

  return (
    <div>
      <h1>{mockNote.title}</h1>
      <p>{mockNote.content}</p>
    </div>
  );
}

export default NoteDetailPage;