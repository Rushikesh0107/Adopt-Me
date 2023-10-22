import { useState } from 'react'
import './App.css'
import SearchParams from './SearchParams'
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom'
import Details from './Details'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import './index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  }
});

function App() {


  return (
    <>
      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
      <Link to='/'><h1 className='bg-black text-red-200 text-3xl p-3 font-bold'> Adopt Me</h1></Link>
      <Routes>
        <Route path='/' element={<SearchParams />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
      </QueryClientProvider>
      </BrowserRouter>
    </>
  )
}

export default App
