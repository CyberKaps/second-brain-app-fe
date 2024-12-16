import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Button startIcon={<PlusIcon />} size='sm' varient='primary' text="Share" />
      <Button startIcon={<PlusIcon />} size="md" varient='primary' text="Add Content" />
      <Button startIcon={<PlusIcon />} size="lg" varient='secondary' text="Add Content" />

     </div>
    </>
  )
}

export default App
