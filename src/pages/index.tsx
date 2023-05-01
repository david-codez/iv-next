import React from 'react'
import NavBar from '@/components/Layout/NavBar'

type Props = {}

function Home({}: Props) {
  return (
    <div>
      <NavBar />
      <h1>This is the home page</h1>
      <h3>Workouts</h3>
    </div>
  )
}

export const getServerSideProps = async () => {


  return { props: {} }
}


export default Home