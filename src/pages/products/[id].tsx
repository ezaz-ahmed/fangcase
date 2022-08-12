import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { FC } from 'react';
import Title from '../../components/Title';
import { getProduct, getProducts, Product } from '../../lib/products'

interface ProductPageProps {
  product: Product;
}

interface ProductPageParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<ProductPageParams> = async () => {
  const products = await getProducts()

  return {
    paths: products.map(product => ({
      params: { id: product.id.toString() }
    })),
    fallback: false,
  }
}


export const getStaticProps: GetStaticProps<ProductPageProps, ProductPageParams> = async ({ params: { id } }) => {
  const product = await getProduct(id)

  return {
    props: {
      product,
    },
    revalidate: 5 * 60
  }
}

const ProductPage: FC<ProductPageProps> = ({ product }) => {
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>

      <main className=' px-6 py-4'>
        <Title>
          {product.title}
        </Title>

        <p>
          {product.description}
        </p>
      </main>
    </>
  )
}

export default ProductPage