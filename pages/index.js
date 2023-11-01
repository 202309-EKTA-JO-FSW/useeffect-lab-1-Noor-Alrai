import DogList from '../Components/DogList/DogList'
import Form from '../Components/Form/Form'
import { Inter } from 'next/font/google'
import {useState, useEffect} from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [numberOfDogs, setNumberOfDogs] =useState(3);
  const [dogs , setDogs] = useState([]);
  function handleSetNumberOfDogs(newNumber){
    setNumberOfDogs(newNumber)
    }
  function fetchDog(){
    fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
    .then((response) => response.json())
    .then((data) => setDogs(data.message))
    .catch((error) => console.error('Error fetching data: ', error));
  }
  useEffect(()=>{
    fetchDog();

  },[numberOfDogs])


  // You will need to put a state here to save all the dogs data into
  // And you will fetch the data with useEffect
 
   return (
    <div className="card">
      {/* When the button is clicked in the form, it should fetch the information. 
          How can we do that by utilizing useState?
          
      */}
      <Form setNumberOfDogs={handleSetNumberOfDogs} /> {/* Pass the setDogs function to Form */}
      <DogList dogsList={dogs} />
      {/* <Form /> Uncomment <Form /> if you are going after the bonus */}
      {/* This page should receive the images array */}
    </div>
  );
}

