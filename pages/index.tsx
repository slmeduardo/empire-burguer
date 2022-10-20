import type { NextPage } from "next"
import Head from "next/head"
import { Header } from "../components/Header/Header"

const Home: NextPage = ({ data, testimonialsData }) => {
  return (
    <div>
      <Head>
        <title>Empire Burguer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header menu={data} depoiments={testimonialsData} />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://api.brchallenges.com/api/empire-burger/menu")
  const testimonialsRes = await fetch(
    "https://api.brchallenges.com/api/empire-burger/testimonials"
  )

  const data = await res.json()
  const testimonialsData = await testimonialsRes.json()

  return {
    props: {
      data,
      testimonialsData
    }
  }
}

export default Home
