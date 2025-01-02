```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```

```javascript
// pages/about.js

export default function About() {
  // This will cause an error if you don't handle it properly
  const data = JSON.parse(localStorage.getItem('user')); 

  return (
    <div>
      <h1>About Page</h1>
      {data ? <p>Welcome, {data.name}!</p> : <p>Please login.</p>}
    </div>
  );
}
```