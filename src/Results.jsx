import React from 'react'
import Pet from './Pet'

function Results({pets}) {
  return (
    <div className='bg-red-300 ml-10 p-3 w-1/2 font-semibold rounded-lg mb-10'>
        {!pets.length ? (
            <h1>No Pets Found</h1>
        ) : (
            pets.map(pet => (
                <Pet 
                animal={pet.animal}
                breed={pet.breed}
                name={pet.name}
                id={pet.id}
                location={`${pet.city}, ${pet.state}`}
                images={pet.images}
                key={pet.id}
                />
            ))
        )}
    </div>
  )
}

export default Results