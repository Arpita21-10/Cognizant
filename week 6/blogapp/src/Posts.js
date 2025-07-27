import React from 'react';

class Posts extends React.Component {
    constructor(props) { // 
        super(props);
        this.state = { // 
            posts: [],
            error: null
        };
    }

    loadPosts() { // [cite: 22]
        fetch('https://jsonplaceholder.typicode.com/posts') // [cite: 23]
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                this.setState({ posts: data });
            })
            .catch(error => {
                this.setState({ error: error });
                console.error('Error fetching posts:', error);
            });
    }

    componentDidMount() { // 
        this.loadPosts();
    }
    
    componentDidCatch(error, info) { // 
      this.setState({ error: error });
      alert(`Error: ${error.toString()}`);
      console.error("Component Error:", info);
    }

    render() { // 
        if (this.state.error) {
          return <h1>Something went wrong.</h1>;
        }

        return (
            <div>
                <h1>Blog Posts</h1>
                {this.state.posts.map(post => (
                    <div key={post.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '20px', paddingBottom: '20px' }}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;