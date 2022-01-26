import Head from 'next/head'

// components
import Navbar from '@/layout/navbar/index'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <h1 className='text-blue-500'>salem</h1>
    </div>
  )
}
