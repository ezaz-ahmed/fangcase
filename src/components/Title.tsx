import { FC } from 'react';

const Title: FC<{ children: string }> = ({ children }) => {
  return (
    <h1 className=' text-2xl pb-4'>
      {children}
    </h1>
  )
}

export default Title