import React from 'react'
import { useState, useEffect } from 'react'
import Results from './Results'
import useBreedList from './useBreedList'
import { useQuery } from '@tanstack/react-query'
import fetchSearch from './fetchSearch'

function SearchParams() {

    const [requestParamas, setRequestParams] = useState({
        location: "",
        animal: "",
        breed: "",  
    })
    const [animals, setAnimals] = useState('')
    const [breeds] = useBreedList(animals)

    const result = useQuery(['search', requestParamas], fetchSearch)
    const pets = result?.data?.pets ?? [];



  return (
    <div className='w-full'>
        
        
        <div className='flex mt-10 justify-evenly'>
        <div className='flex justify-around h-[22rem] mt-10 ml-5'>
            <form className='flex flex-col bg-red-300  p-5 gap-3 rounded-lg w-80' 
            onSubmit={e => {
                e.preventDefault()
                const formData = new FormData(e.target)
                const obj = {
                    animal: formData.get('animal') ?? "",
                    breed: formData.get('breed') ?? "",
                    location: formData.get('location') ?? "",
                    }
                setRequestParams(obj)
                }

            }    
            >
            
                <label htmlFor="location" className='text-lg font-semibold'>
                    Location : 
                    <div>
                    <input id="location" placeholder="Location" 
                    className='p-2 border-2 border-black rounded-lg w-full'
                    name='location'
                    />
                    </div>
                </label>

                <label htmlFor="animal" className='text-lg font-semibold'>  
                    Animal :
                    <div>
                    <select id="animal" className='p-2 border-2 border-black rounded-lg w-full'
                    value={animals}
                    onChange={(e) => {
                        setAnimals(e.target.value);
                        }
                    }
                    >
                        <option>Select</option>
                        <option>dog</option>
                        <option>cat</option>
                        <option>bird</option>
                        <option>rabbit</option>
                        <option>reptile</option>
                    </select>
                    </div>
                </label>

                <label htmlFor="breed" className='text-lg font-semibold'>
                    Breed :
                    <div>
                    <select id="breed" className='p-2 border-2 border-black rounded-lg w-full'
                    disabled={breeds.length === 0}
                    name='breed'
                    >
                        <option>Select</option>
                        {
                            breeds.map(breed => (
                                <option key={breed} value={breed}>{breed}</option>
                            ))
                        }

                        
                    </select>
                    </div>
                </label>

                <button
                className='bg-black text-white p-2 rounded-lg mt-3 font-semibold active:scale-75 transition-all'
                >Submit</button>
            </form>
        </div>


                <Results pets={pets}/>
            
        </div>
            
    </div>
  )
}

export default SearchParams