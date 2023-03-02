import Head from 'next/head'
import { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

type Props = {
  children: ReactNode
  title: string
}

export function Layout({ children, title }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{title}</h1>
      <Header />
      <main>{children}</main>

      <Footer />
    </div>
  )
}
