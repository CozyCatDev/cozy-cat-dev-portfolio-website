import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJrHi7BIqSoIluhbgMdIum8vHmRf8-U44",
  authDomain: "cozycat-8ed47.firebaseapp.com",
  projectId: "cozycat-8ed47",
  storageBucket: "cozycat-8ed47.appspot.com",
  messagingSenderId: "543780614058",
  appId: "1:543780614058:web:526d58b076848e6ec8c5d3",
  measurementId: "G-5DSYEQ7PYE"
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