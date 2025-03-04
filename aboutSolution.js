```javascript
// pages/about.js
export default function About() {
  try {
    // Code that might throw an error
    throw new Error('Intentional error');
  } catch (error) {
    // Handle the error gracefully
    console.error('Error in About page:', error);
    return (
      <div>
        <h1>Oops! Something went wrong.</h1>
        <p>Please try again later.</p>
      </div>
    );
  }
}
```