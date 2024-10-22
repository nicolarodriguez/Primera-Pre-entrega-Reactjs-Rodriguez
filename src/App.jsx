import React from 'react'
import NavBarComponent from './components/NavBarComponent'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <div className='container'>
      <NavBarComponent/>
      <ItemListContainer/>
    </div>
  )
}

export default App