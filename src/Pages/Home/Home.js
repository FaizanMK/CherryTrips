import React from 'react'
// import Header from '../../Components/Header/Header'
import Body from '../../Body'
import Card from '../../Card'
import Header from '../../Components/Header/Header'
import Info from '../../Components/Info/Info'
import PicInfo from '../../Components/Info/PicInfo'
import Planning from '../../Components/Planning/Planning'
import './Home.css'
import booking from '../../Assets/Images/booking.png'
import Sightseeing from '../../Assets/Images/Sightseeing.png'
import Wildlife from '../../Assets/Images/Wildlife.png'

import '../../Components/Info/PicInfo.css'


function Home() { 
  return (
    <>
    <div className='bg_image'>

    <Header/>  
    <Body/>
    <Planning/>
    </div>
    

    <div className='cardWrapper' >
      
    <Card title='Gilgit Tour' imageUrl='https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/11/gilgit.jpg?resize=696%2C522&ssl=1' />


    <Card title='Gilgit Tour' imageUrl='https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/11/gilgit.jpg?resize=696%2C522&ssl=1' />

    <Card title='Gilgit Tour' imageUrl='https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/11/gilgit.jpg?resize=696%2C522&ssl=1' />

    <Card title='Gilgit Tour' imageUrl='https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/11/gilgit.jpg?resize=696%2C522&ssl=1' />

    <Card title='Gilgit Tour' imageUrl='https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/11/gilgit.jpg?resize=696%2C522&ssl=1' />

    <Card title='Gilgit Tour' imageUrl='https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/11/gilgit.jpg?resize=696%2C522&ssl=1' />


    <Card title='Gilgit Tour' imageUrl='https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/11/gilgit.jpg?resize=696%2C522&ssl=1' />

    </div>


    <Info/>
    <div className='PicInfo'>
    

      <PicInfo img={booking}
      title='booking'
      information='write something here'
      />

      <PicInfo img={Sightseeing}
      title='booking'
      information='write something here'
      />
      
      <PicInfo img={booking}
      title='booking'
      information='write something here'
      />
      <PicInfo img={Wildlife}
      title='booking'
      information='write something here'
      />
      

       </div>

      </>


  )
}

export default Home