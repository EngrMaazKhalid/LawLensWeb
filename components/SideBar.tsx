import React from 'react'
import NewChat from './NewChat'

function SideBar() {
  return (
    <div className='flex  flex-col h-screen p-4'>
        <div className='flex-1'>
            <div>
              <NewChat />
               <div>

               </div>
                </div>
            </div>
        </div>
  
  )
}

export default SideBar