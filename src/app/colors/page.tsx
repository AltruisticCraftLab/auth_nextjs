import { ModeToggle } from '@/components/mode-toggle'
import React from 'react'

const ColorsPage = () => {
  return (
    <div className="min-h-screen bg-background p-10">

      <div>
        <ModeToggle/>
      </div>
      <div className='max-w-screen-lg p-4 flex gap-5'>
        <div className='p-2 rounded-md bg-card text-card-foreground'>Card</div>
        <div className='p-2 rounded-md bg-popover text-popover-foreground'>Popover</div>
        <div className='p-2 rounded-md bg-primary text-primary-foreground'>Primary</div>
        <div className='p-2 rounded-md bg-secondary text-secondary-foreground'>Secondary</div>
        <div className='p-2 rounded-md bg-muted text-muted-foreground'>Muted</div>
        <div className='p-2 rounded-md bg-accent text-accent-foreground'>Accent</div>
        <div className='p-2 rounded-md bg-destructive text-destructive-foreground'>Destructive</div>
      </div>
    </div>
  )
}

export default ColorsPage