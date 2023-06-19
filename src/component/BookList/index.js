// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const BookList = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Replace 'YOUR_SEARCH_QUERY' with your desired search query for books
//         const searchQuery = 'YOUR_SEARCH_QUERY';

//         const response = await axios.get(
//           https://openlibrary.org/search.json?q=${encodeURIComponent(searchQuery)}
//         );

//         setBooks(response.data.docs);
//       } catch (error) {
//         console.error('Error fetching book list:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   if (books.length === 0) {
//     return <div>Loading book list...</div>;
//   }

//   return (
//     <div>
//       <h2>Book List</h2>
//       {books.map((book) => (
//         <div key={book.key}>
//           <h3>{book.title}</h3>
//           <p>Author: {book.author_name && book.author_name.join(', ')}</p>
//           <p>First Published: {book.first_publish_year}</p>
//           {/* Display additional book information as needed */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BookList;