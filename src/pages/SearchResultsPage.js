import React from 'react';

function SearchResultsPage({ query }) {
  const mockResults = [
    { id: 1, title: 'Note about diet' },
    { id: 2, title: 'Journey to weight loss' },
  ];

  const filteredResults = mockResults.filter((result) =>
    result.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Search Results</h1>
      {filteredResults.length ? (
        <ul>
          {filteredResults.map((result) => (
            <li key={result.id}>
              <a href={`/note/${result.id}`}>{result.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default SearchResultsPage;