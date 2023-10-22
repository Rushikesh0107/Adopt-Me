import React from 'react'

function Pet({name, animal, breed, images, location, id}) {
  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';
  if(images.length) {
      hero = images[0];
  }
  return (
    <div className='w-full mb-5 flex border border-b-black border-t-red-300 border-l-red-300 border-r-red-300'>
        <a href={`/details/${id}`} className='flex flex-row justify-between w-full pb-5'>
          <div>
            <img src={hero} alt={name} className='rounded-full w-28'/>
          </div>
          <div className='flex flex-col w-full ml-7 justify-center'>
            <h1 className='text-2xl'>{name}</h1>
            <h2>
              {animal} - {breed} - {location}
            </h2>
          </div>
        </a>
    </div>

  )
}

export default Pet