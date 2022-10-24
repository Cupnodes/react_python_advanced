import type { NextPage } from 'next'
import Header from '../src/components/header.tsx'

function button(props) {
  return <a href="#">{props.title}</a>
}

const Home: NextPage = () => {
  return (
    <Header></Header>
  )
}

export default Home
