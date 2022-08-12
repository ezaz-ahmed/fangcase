import Head from 'next/head'
import { FC } from 'react'

const HomePage: FC = () => {
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>

      <main className=' px-6 py-4'>
        <h1 className=' text-2xl pb-4'>
          Next Shop
        </h1>

        <p>
          Display products
        </p>
      </main>
    </>
  )
}

export default HomePage