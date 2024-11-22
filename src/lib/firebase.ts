import { getApp, initializeApp, FirebaseApp } from '@firebase/app';
import { getDatabase, Database } from '@firebase/database';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

interface MockDatabaseReference {
  on: () => void;
  off: () => void;
  push: () => Promise<null>;
  set: () => Promise<void>;
}

class MockDatabase {
  ref(): MockDatabaseReference {
    return {
      on: () => {},
      off: () => {},
      push: () => Promise.resolve(null),
      set: () => Promise.resolve()
    };
  }
}

function initializeFirebase(): { app: FirebaseApp; database: Database | MockDatabase } {
  const requiredConfig = [
    firebaseConfig.projectId,
    firebaseConfig.databaseURL,
    firebaseConfig.apiKey
  ];

  if (!requiredConfig.every(Boolean)) {
    console.warn('Firebase config is missing required fields');
    return {
      app: {} as FirebaseApp,
      database: new MockDatabase()
    };
  }

  try {
    const app = getApp();
    return {
      app,
      database: getDatabase(app)
    };
  } catch {
    try {
      const app = initializeApp(firebaseConfig);
      return {
        app,
        database: getDatabase(app)
      };
    } catch (error) {
      console.error('Failed to initialize Firebase:', error);
      return {
        app: {} as FirebaseApp,
        database: new MockDatabase()
      };
    }
  }
}

const { database } = initializeFirebase();
export { database }; 