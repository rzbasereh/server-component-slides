# Server Components



## Server Side Rendering (SSR)


most React setups used a "client-side" rendering strategy.

The user would receive an HTML file that looked like this:
```html
<!DOCTYPE html>
<html>
    <body>
        <div id="root"></div>
        <script src="/static/js/bundle.js"></script>
    </body>
</html>
```


### Bouncing back and forth

![](./assets/client-side-data-fetching.png)

*network request graph of a Client Side Rendering (CSR)*


![](./assets/server-side-data-fetching.png)

*network request graph of a Server Side Rendering (SSR)*


## Some Definitions
* **First Paint**:
The user is no longer staring at a blank white screen. The general layout has been rendered, but the content is still missing. This is sometimes called FCP (First Contentful Paint).

* **Page Interactive**:
React has been downloaded, and our application has been rendered/hydrated. Interactive elements are now fully responsive. This is sometimes called TTI (Time To Interactive).

* **Content Paint**:
The page now includes the stuff the user cares about. We've pulled the data from the database and rendered it in the UI. This is sometimes called LCP (Largest Contentful Paint).


Instead of requiring a second round-trip network request, why don't we do the database work during that initial request?
![](./assets/server-component-network.png)


### Solutions
Meta-frameworks? like Next.js and Gatsby have created their own way to run code exclusively on the server.

```jsx
import db from 'imaginary-db';
// This code only runs on the server:
export async function getServerSideProps() {
  const link = db.connect('localhost', 'root', 'passw0rd');
  const data = await db.query(link, 'SELECT * FROM products');
  return {
    props: { data },
  };
}
// This code runs on the server + on the client
export default function Homepage({ data }) {
  return (
    <>
      <h1>Trending Products</h1>
      {data.map((item) => (
        <article key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </article>
      ))}
    </>
  );
}
```


### But!
* This strategy only works at the route level, for components at the very top of the tree. We can't do this in any component.

* Each meta-framework came up with its own approach. Next.js has one approach, Gatsby has another, Remix has yet another. It hasn't been standardized.

* All of our React components will always hydrate on the client, even when there's no need for them to do so.


### And
The solution is "React Server Components"



## React Server Component


```jsx
import db from 'imaginary-db';

async function Homepage() {
  const link = db.connect('localhost', 'root', 'passw0rd');
  const data = await db.query(link, 'SELECT * FROM products');
  
  return (
    <>
      <h1>Trending Products</h1>
      {data.map((item) => (
        <article key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </article>
      ))}
    </>
  );
}
export default Homepage;
```


Server Components **never** re-render.


![img.png](component-types.png)

* *React Server Components* is the name for this new paradigm.

* In this new paradigm, the "standard" React components we know and love have been rebranded as *Client Components*. It's a new name for an old thing.

* This new paradigm introduces a new type of component, *Server Components*. These new components render exclusively on the server. Their code isn't included in the JS bundle, and so they never hydrate or re-render.


All components are assumed to be Server Components by default.


```jsx
'use client';

import React from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Current value: {count}
    </button>
  );
}

export default Counter;
```

That standalone string at the top, `use client`, is how we signal to React that the component(s) in this file are *Client Components*, that they should be included in our JS bundles so that they can re-render on the client.


*Client Components* can **only import** other *Client Components*.


what happens when the props change?
```jsx
function HitCounter({ hits }) {
  return (
    <div>
      Number of hits: {hits}
    </div>
  );
}
```


<div style="height: 50vh;">
<img class="fragment absolute" src="component-tree-1.png" style="height: 50vh; left: 25%">
<img class="fragment absolute" src="component-tree-2.png" style="height: 50vh; left: 25%">
<img class="fragment absolute" src="component-tree-3.png" style="height: 50vh; left: 25%">
</div>


All of the components within this boundary are **implicitly** converted to *Client Components*. Even though components like `HitCounter` don't have the 'use client' directive, they'll still hydrate/render on the client in this particular situation.


What about this ?!
```jsx
'use client';

import { DARK_COLORS, LIGHT_COLORS } from '@/constants.js';
import Header from './Header';
import MainContent from './MainContent';

function Homepage() {
  const [colorTheme, setColorTheme] = React.useState('light');
  
  const colorVariables = colorTheme === 'light'
    ? LIGHT_COLORS
    : DARK_COLORS;
  
  return (
    <body style={colorVariables}>
      <Header />
      <MainContent />
    </body>
  );
}
```


Solution
```jsx
// /components/ColorProvider.js
'use client';

import { DARK_COLORS, LIGHT_COLORS } from '@/constants.js';

function ColorProvider({ children }) {
  const [colorTheme, setColorTheme] = React.useState('light');
  
  const colorVariables = colorTheme === 'light'
    ? LIGHT_COLORS
    : DARK_COLORS;
  
  return (
    <body style={colorVariables}>
      {children}
    </body>
  );
}
```


And
```jsx
// /components/Homepage.js
import Header from './Header';
import MainContent from './MainContent';
import ColorProvider from './ColorProvider';

function Homepage() {
  return (
    <ColorProvider>
      <Header />
      <MainContent />
    </ColorProvider>
  );
}
```



## Let's code :)