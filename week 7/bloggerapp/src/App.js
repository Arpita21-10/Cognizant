import React from 'react';

const courses = [
  { id: 1, name: 'Angular', date: '4/5/2021' },
  { id: 2, name: 'React', date: '6/3/2021' },
];

const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
];

const blogs = [
  { id: 1, title: 'React Learning', author: 'Stephen Biz', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', author: 'Schewzdenier', content: 'You can install React from npm.' },
];

function CourseDetails({ items }) {
  return (
    <div>
      <h1>Course Details</h1>
      {items.map(course => (
        <div key={course.id} style={{ marginBottom: '15px' }}>
          <h2>{course.name}</h2>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
}

function BookDetails({ items }) {
  return (
    <div>
      <h1>Book Details</h1>
      {items.map(book => (
        <div key={book.id} style={{ marginBottom: '15px' }}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </div>
  );
}

function BlogDetails({ items }) {
  return (
    <div>
      <h1>Blog Details</h1>
      {items.map(blog => (
        <div key={blog.id} style={{ marginBottom: '15px' }}>
          <h2>{blog.title}</h2>
          <p>By {blog.author}</p>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  };

  const columnStyle = {
    padding: '0 20px',
    borderRight: '2px solid green',
  };
  
  const lastColumnStyle = {
     padding: '0 20px',
  };

  return (
    <div style={containerStyle}>
      <div style={columnStyle}>
        <CourseDetails items={courses} />
      </div>
      <div style={columnStyle}>
        <BookDetails items={books} />
      </div>
      <div style={lastColumnStyle}>
        <BlogDetails items={blogs} />
      </div>
    </div>
  );
}

export default App;
