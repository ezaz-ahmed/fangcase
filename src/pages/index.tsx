import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'
import Title from '../components/Title'
import { getProducts, Product } from '../lib/products'

interface HomePageProps {
  products: Product[];
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts()

  return {
    props: {
      products,
    },
    revalidate: 5 * 60
  }
}

const HomePage: FC<HomePageProps> = ({ products }) => {
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>

      <main className=' px-6 py-4'>
        <Title>
          Next Shop
        </Title>

        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>
                <a>
                  {product.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default HomePage