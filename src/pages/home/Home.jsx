import React from 'react'
import Homenavber from './homenavber/Homenavber'

const Home = () => {
  return (
    <section className ='w-[100%] h-[100vh] bg-center	bg-no-repeat	bg-cover overflow-auto' style = {{backgroundImage : 'url(https://media.istockphoto.com/id/1285301614/photo/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-and-life-people-travel.jpg?s=612x612&w=0&k=20&c=0QW6GnkuFNYcPZhy26XVHuTc2avJTK8u6l_1iT0SlZk=)'}}>
      <Homenavber/>
    </section>
  )
}

export default Home