// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import {  initializeFirestore, connectFirestoreEmulator, getFirestore, collection, doc, getDoc, addDoc, setDoc, updateDoc, deleteDoc, getDocs } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2L5tFoSlEr12Q9rXrObe6b9P9FeS6pYA",
    authDomain: "frogfish-final-project.firebaseapp.com",
    projectId: "frogfish-final-project",
    storageBucket: "frogfish-final-project.appspot.com",
    messagingSenderId: "75245662272",
    appId: "1:75245662272:web:9f18f18492ea360cdeafa5"
};

// Initialize Firebase
export function initializeFirebase(){
  try{
    return getApp();
  } catch (e){
    // app has not been initialized
    const app = initializeApp(firebaseConfig);

    // initialize the database
    const db = initializeFirestore(app, {useFetchStreams: false})
    // connect up the emulator to the database
    if (process.env.NEXT_PUBLIC_EMULATE || process.env.FIRESTORE_EMULATOR_HOST){
      console.log("Connecting to emulator");
      connectFirestoreEmulator(db, "localhost", 8080 );
    }
    return app;
  }
}


//function takes three fields: the correct word, an array of stats (if the player won), and a boolean set to "true" if the user guessed the word, and false otherwise
export async function updateWord(word, stats, correct){
  //stats structure = [number of guesses, time]
  const db = getFirestore();
  let playerCount;
  let correctCount;
  let avgNumberGuesses;
  let percentCorrect;
  let avgTime;
  let docSnap

  //const usersRef = firestore.collection('users');
  //const query = usersRef.where('name', '==', 'Alice');

  const docRef = doc(db,"words",word)
  const docObj = await getDoc(docRef)

  if (docObj.exists()){
    docSnap = docObj.data()
    playerCount = (docSnap.playerCount + 1)

    if(correct === true){
      avgNumberGuesses = (( (docSnap.avgNumberGuesses * docSnap.correctCount) + stats[0] ) / (docSnap.correctCount + 1) ).toFixed(3)
      avgTime = (( (docSnap.avgTime * docSnap.correctCount) + stats[1] ) / (docSnap.correctCount + 1)).toFixed(3)
      correctCount = (docSnap.correctCount + 1)
      percentCorrect = ((correctCount/playerCount) *  100).toFixed(0)
      
      setDoc((docRef),{
        word: word,
        playerCount: playerCount,
        correctCount: correctCount,
        avgNumberGuesses: avgNumberGuesses,
        percentCorrect: percentCorrect,
        avgTime: avgTime
      });
    }
    else if(correct === false){
      percentCorrect = ((docSnap.correctCount/(docSnap.playerCount + 1 )) *  100).toFixed(3)
      playerCount = (docSnap.playerCount + 1);
      correctCount = docSnap.correctCount;
      avgNumberGuesses = docSnap.avgNumberGuesses;
      avgTime = docSnap.avgTime;

      setDoc((docRef),{
        word: word,
        playerCount: playerCount,
        correctCount: correctCount,
        avgNumberGuesses: avgNumberGuesses,
        percentCorrect: percentCorrect,
        avgTime: avgTime
      });
    }
  }
  else{
    if(correct === true){
      correctCount = 1
      playerCount = 1;
      percentCorrect = ( (1/1) * 100)
      avgNumberGuesses = stats[0]
      avgTime = stats[1]
    }
    else{
      correctCount = 0;
      playerCount = 1;
      percentCorrect = 0;
      avgNumberGuesses = 0;
      avgTime = 0;
    }
    setDoc((docRef),{
      word: word,
      playerCount: playerCount,
      correctCount: correctCount,
      avgNumberGuesses: avgNumberGuesses,
      percentCorrect: percentCorrect,
      avgTime: avgTime
    });

    console.log({
      word: word,
      playerCount: playerCount,
      correctCount: correctCount,
      avgNumberGuesses: avgNumberGuesses,
      percentCorrect: percentCorrect,
      avgTime: avgTime
    })
  }
  return({
    word: word,
    playerCount: playerCount,
    correctCount: correctCount,
    avgNumberGuesses: avgNumberGuesses,
    percentCorrect: percentCorrect,
    avgTime: avgTime
  });
}

/**
 * This is a helper function for bulk loading a collection. 
 * 
 * The main reason to use this is for seeding or testing.
 * 
 * @param {*} data - an Array of objects to be stored as documents
 * @param {string} collectionName  - the name of the collection
 */
 export async function loadData(data, collectionName){

    const db = getFirestore();
  
    const collectionRef = collection(db, collectionName);
  
    await Promise.all(data.map(async (d)=>{
      // add the document to firestore
      await addDoc(collectionRef, d);
    }));
  }
  
  /**
   * This function is designed to remove all documents from a 
   * collection. (It will not take care of sub collections).
   * 
   * Its primary use is for testing.
   * 
   * @param {string} collectionName 
   */
  export async function clearCollection(collectionName){
    const db = getFirestore();
    const docSnapshot = await getDocs(collection(db, collectionName));
    await Promise.all(docSnapshot.docs.map((d)=>{
      return deleteDoc(doc(db, "films", d.id))
    }));
  }