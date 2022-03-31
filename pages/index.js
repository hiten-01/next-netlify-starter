import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>原神サポート</title>
        <link rel="icon" href="/pimon.png" />
      </Head>

      <main background-image : url(/genshin-title.png);>
        <Header title="原神サポートへようこそ!" />
        <p className="description">
          このサイトは原神サポートの管理するサイトです。
        </p>
        <p>
          御用の際は<a href="https://twitter.com/Hgrs71umnk" target="_blank" rel="noopener noreferrer">緋天</a>までご連絡ください。
        </p>
      </main>

      <Footer />
    </div>
  )
}
