# firebase-fcruz-course

## Firebase course

Tutorial: [https://www.youtube.com/watch?v=2hR-uWjBAgw](https://www.youtube.com/watch?v=2hR-uWjBAgw)

## Project setup

1. Make sure you have Node.js and npm installed on your machine.
2. Create a new React project using Vite:

```shell
npm create vite@latest firebase-fcruz-course -- --template react-ts
cd firebase-fcruz-course
npm install
```

## Firebase setup

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2. Add a web app to your Firebase project.
3. Install Firebase SDK:

```shell
npm install firebase
```

4. Create a `firebase.ts` file in the `src` directory and initialize Firebase:

```typescript
const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "authDomain",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "messagingSenderId",
  appId: "appId",
  measurementId: "measurementId",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
```

5. Install the Firebase CLI:

```shell
npm install -g firebase-tools
```

6. Login to Firebase:

```shell
firebase login
```

7. Initialize Firebase in your project:

```shell
firebase init
```

## Tailwind CSS setup

1. Install tailwindcss with Vite:

```shell
npm install tailwindcss @tailwindcss/vite
```

2. Configure tailwind css vite plugin in `vite.config.ts`:

```typescript
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
});
```

3. Import Tailwind CSS styles in `src/index.css`:

```css
@import "tailwindcss";
```

## Tanstack setup

1. Install Tanstack Query:

```shell
npm install @tanstack/react-query
```

2. Install Tanstack Router:

```shell
npm install @tanstack/react-router @tanstack/react-router-devtools
npm install -D @tanstack/router-plugin
```

3. Configure the vite plugin in `vite.config.ts`:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
  ],
});
```

4. Create a `src/routes/__root.tsx` file to define the root route:

```typescript
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
```
