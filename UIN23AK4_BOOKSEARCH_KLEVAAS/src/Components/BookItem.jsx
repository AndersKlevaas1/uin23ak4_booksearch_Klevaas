import React from 'react';

function BookCard({ title, first_publish_year, author_name, cover_i, ratings_average, id_amazon }) {
  const coverImageUrl = cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg` : 'path/to/your/placeholder/image.jpg';
  const amazonSearchUrl = id_amazon && id_amazon.length > 0 ? `https://www.amazon.com/s?k=${id_amazon}` : '#';

  return (
    <article className="bookitem">
      <img src={coverImageUrl} alt={`Cover of ${cover_i}`} style={{ width: '100px', height: '150px', objectFit: 'cover' }} />
      <h3>{title}</h3>
      <p>Publiseringsår: {first_publish_year}</p>
      <p>Gjennomsnittlig vurdering: {ratings_average}</p>
      <p>Forfatter: {author_name?.join(', ')}</p>
      {id_amazon && id_amazon.length > 0 && (
        <a href={amazonSearchUrl} target="_blank" rel="noopener noreferrer">
          <button>Find on Amazon</button>
        </a>
      )}
    </article>
  );
}

export default BookCard;
