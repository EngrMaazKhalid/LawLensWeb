import React from 'react'
import { PlusIcon } from '@heroicons/react/20/solid'
import classes from './style.module.css'


function NewChat() {
  return (
 <div className={classes.newchat} >
<PlusIcon className={classes.icon}/>
<p>New Chat</p>
 </div>
  )
}

export default NewChat