import React from 'react'
import {useQuery} from '@tanstack/react-query'
import fetchPet from './fetchPet'
import {useParams} from 'react-router-dom'
import {useState } from 'react'
import Modal from './Modal'
import './Modal.css'

function Details() {

  const [showModal, setShowModal] = useState(false);
  const {id} = useParams();
  const result = useQuery(['details', id], fetchPet);

  if(result.isLoading) {
    return <div className=''><h1 className='text-center text-5xl font-bold mt-40'>Loading...</h1></div>
  }

  if(result.isError) {
    return <h1>Error</h1>
  }

  const pet = result.data.pets[0];

  return (
    <>
    <div className='flex mt-20 items-center  h-screen flex-col'>
      <div className='bg-red-300 rounded-lg w-1/2 flex flex-col gap-5 p-10'>
      <div className='w-full'>
        <h1 className='text-3xl font-bold text-center'>{pet.name}</h1>
      </div>
      <div className='w-full flex justify-center gap-5'>
        {pet.images[0] && <img src={pet.images[0]} alt="pet image" className='rounded-full w-40'/>}
        {pet.images[1] && <img src={pet.images[1]} alt="pet image" className='rounded-full w-40'/>}
        {pet.images[2] && <img src={pet.images[2]} alt="pet image" className='rounded-full w-40'/>}
      </div>

      <div className=''>
        <h2 className='font-semibold text-center text-lg'>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        </h2>
      </div>

      <div>
        <p>
          {pet.description}
        </p>
      </div>

      <div className='flex justify-center'>
        <button className='bg-black text-red-200 p-2 rounded-lg w-1/2 font-bold active:scale-75 transition-all'
        onClick={() => {
          setShowModal(true);
          disableBodyScroll(document.querySelector('#root'));
        }}
        >Adopt {pet.name}</button>
      </div>

      {
        showModal ? (
          <Modal>
            <div className='pop-div'>
              <h1>Would you like to Adopte {pet.name}?</h1>
              <div className='yes-no'>
                <button className='bg-green-500 py-1 px-2 rounded font-bold text-white active:scale-75'>Yes</button>
                <button
                onClick={() => setShowModal(false)}
                className='bg-red-500 py-1 px-2 rounded font-bold text-white active:scale-75'
                >No</button>
              </div>
            </div>
          </Modal>
        ) : null
      }
      </div>
    </div>
    </>
  )
}

export default Details