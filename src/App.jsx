import { useState } from "react"
import Modal from "./components/Modal"
import Navbar from "./components/navbar"
import Tablelist from "./components/Tablelist"

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [modalMode, setModalMode] = useState('add')

  const handleOpen = (mode) => {
    setIsOpen(true)
    setModalMode(mode)
  }

  const handleSubmit = () => {
    if(modalMode === 'add'){
      console.log('modal mode Add')
    } else {
      console.log('modal mode Edit')
    }
  }

  return (
    <>
      <div data-theme="aqua">
        <Navbar onOpen={() => handleOpen('add')} />
        <Tablelist handleOpen={handleOpen}/>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} 
          onSubmit={handleSubmit} mode={modalMode}
        />
      </div>
    </>
  )
}

export default App
