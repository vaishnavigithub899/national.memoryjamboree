// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   root: 'frontend',  // frontend folder jahan index.html hai
//   plugins: [
//     tailwindcss(),
//     react()
//   ],
//   build: {
//     outDir: '../dist', // build output project root me
//   }
// })


import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ]
})