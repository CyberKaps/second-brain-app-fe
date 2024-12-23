import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import { Button } from '../components/ui/Button'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../components/ui/Card'
import { CreateContent } from '../components/CreateContent'
import { Sidebar } from '../components/ui/Sidebar'
import { useContent } from '../hooks/useContent'

function Dashboard() {
 

  const [modalOpen, setModalOpen] = useState(false);

  const contents = useContent()

  return (
    <>
     <div>
      <Sidebar />
      <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2'>
      <CreateContent open={modalOpen} onClose={() => {
          setModalOpen(false)
        }} />
        <div className='flex justify-end gap-4'>
        <Button startIcon={<ShareIcon size='md' />} size='sm' varient='secondary' text="Share Brain" />
        <Button onClick={() => setModalOpen(true)} startIcon={<PlusIcon size = 'md' />} size="md" varient='primary' text="Add Content" />
        </div>
      
      
      
      <div className='flex gap-4'>
      
        {contents.map(({type, link, title}) => <Card title={title} type={type} link={link} />)}

      
      </div>
      </div>
        


     </div>
    </>
  )
}

export default Dashboard

