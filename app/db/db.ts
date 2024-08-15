import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const getData = async <T>(collectionName: string): Promise<T[]> => {
  const snapshot = await getDocs(collection(db, collectionName));
  let data: T[] = [];
  snapshot.forEach(doc => {
    data.push(doc.data() as T);
  });
  return data;
}

const getAllData = async () => {
  const skills = await getData("skills");
  const projects = await getData("projects");
  const reviews = await getData("reviews");
  return { skills: skills, projects: projects, reviews: reviews };
}

export { getData, getAllData };