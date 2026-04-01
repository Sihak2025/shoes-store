import React from 'react'
import { Route } from 'react-router-dom'

const AppRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/tv-shows' element={<TvShows/>}/>
        <Route path='/people' element={<People/>}/>
        <Route path='/search' element={<Search/>}/>
      </Route>
    </Routes>
  )
}

export default AppRoute
