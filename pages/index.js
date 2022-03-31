import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="background">
      <div className="container">
        <Head>
          <title>原神サポート</title>
          <link rel="icon" href="/pimon.png" />
        </Head>
      
        <main>
          <Header title="原神サポートへようこそ!" />
          <p>
            御用の際はサイト管理者の<a href="https://twitter.com/Hgrs71umnk" target="_blank" rel="noopener noreferrer">緋天</a>までご連絡ください。
          </p>
        </main>
      

        <Footer />
      </div>
    </div>
  )
}
