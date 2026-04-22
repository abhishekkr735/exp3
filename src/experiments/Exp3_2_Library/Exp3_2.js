import { useState } from "react";
import "./Exp3_2.css";

function Exp3_2() {
  const [books, setBooks] = useState([
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" }
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [search, setSearch] = useState("");

  // Add book
  const addBook = () => {
    if (!title.trim() || !author.trim()) return;
    setBooks([...books, { title, author }]);
    setTitle("");
    setAuthor("");
  };

  // Remove book
  const removeBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  // Filter books (search)
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Library Management System</h1>

      {/* Search */}
      <input
        className="search"
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Form */}
      <div className="form">
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button className="add-btn" onClick={addBook}>
          Add Book
        </button>
      </div>

      {/* Book List */}
      {filteredBooks.map((book, index) => (
        <div key={index} className="book">
          <div>
            <h2>{book.title}</h2>
            <p>by {book.author}</p>
          </div>

          <button
            className="remove-btn"
            onClick={() => removeBook(index)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Exp3_2;