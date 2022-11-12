import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Box: React.FC<Props> = ({ children }) => {
  return (
    <div className='bg-primary p-4 rounded'>
      {children}
    </div>
  )
}

export default Box
