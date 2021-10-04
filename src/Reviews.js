import React, {useState} from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight  } from "react-icons/fa";


const Reviews = () => {
    const [Index, setIndex] = useState(0)
    const {name, job, image, text} = people[Index]
    // console.log(person)
    const checkNumder = (number) => {
        if(number > people.length -1){
            return 0;
        }
        if(number < 0) {
            return people.length - 1
        }
        return number
    }
    // getting the next person
    const getNextPerson = () => {
      // setIndex(index + 1) 
      setIndex((prevNumber) => {
       let newNumber = prevNumber + 1
       return checkNumder(newNumber)

       })
        
    }
    // const checkNumber = (number) => {
    //     // if(number < people.length -1){
    //     //     return 3;
    //     // }
    //     if(number < 0){
    //         return people.length -1
    //     }
    // }

    const getPrevPerson = () => {

     setIndex((prevNumber) => {
         let newNumber = prevNumber -1
         return checkNumder(newNumber)
     })


    }
    
    const getRandomPerson = () => {

        // setIndex(() => {
        //  let newNumber = Math.floor( Math.random()* 4)
        //  console.log(newNumber);
        //  return newNumber

        // })
       setIndex( Math.floor( Math.random()* 4))


    }
    return (
        <article className='review'>
            <div className='img-container'>
              <img src={image} alt={name} className='person-img' />
              <span className='quote-icon' ><FaChevronRight /></span>
            </div>
            <h4 className='author'></h4>       
            <p className='job'>job</p>
            <p className='info'>info</p>
            <div className='button-container'>
              <button onClick={getPrevPerson} className='prev-btn'>button1</button>
              <FaChevronLeft/>
              <button onClick={getNextPerson} className='next-btn'>button1</button>
              <FaChevronRight />
            </div>
            <button onClick={getRandomPerson} className='random-btn' >surprise me</button>
            
        </article>
    )
}

export default Reviews
