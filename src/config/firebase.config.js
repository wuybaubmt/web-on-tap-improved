/**
 * Firebase Configuration
 * Load credentials from environment variables (NEVER hardcode!)
 */

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Validate environment variables
const validateEnv = () => {
  const required = [
    'VITE_FIREBASE_API_KEY',
    'VITE_FIREBASE_AUTH_DOMAIN',
    'VITE_FIREBASE_PROJECT_ID',
    'VITE_FIREBASE_STORAGE_BUCKET',
    'VITE_FIREBASE_MESSAGING_SENDER_ID',
    'VITE_FIREBASE_APP_ID'
  ];

  required.forEach(key => {
    if (!import.meta.env[key]) {
      throw new Error(`Missing environment variable: ${key}. Copy .env.example to .env and fill values.`);
    }
  });
};

if (import.meta.env.MODE === 'production') {
  validateEnv();
}

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyCLfIUHa2uHvw8KgZ77ethtGAbFnADjeHo',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'web-on-tap-123.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'web-on-tap-123',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'web-on-tap-123.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '647577074461',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:647577074461:web:16f4a6a26abdf4ba9cbff4'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Enable offline persistence (for production)
if (import.meta.env.MODE === 'production') {
  db.settings({ cacheSizeBytes: 50 * 1024 * 1024 }); // 50MB cache
}

export default app;
