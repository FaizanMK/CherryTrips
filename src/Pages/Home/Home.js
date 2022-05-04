import React from 'react'
import Body from '../../Body'
import Card from '../../Card'
import Header from '../../Components/Header/Header'
import Info from '../../Components/Info/Info'
import PicInfo from '../../Components/Info/PicInfo'
import Planning from '../../Components/Planning/Planning'
import './Home.css'
import booking from '../../Assets/Images/booking.png'
import Sightseeing from '../../Assets/Images/Sightseeing.png'
import Adventure from '../../Assets/Images/Adventure.png'
import Wildlife from '../../Assets/Images/Wildlife.png'
import '../../Components/Info/PicInfo.css'
import Weekends from '../../Components/Weekends'
import Toursintro from '../../Components/Tours/Toursintro'
import TourCard from '../../Components/Tours/TourCard'
import TourCardPic from '../../Assets/Images/Tourcard.png'
import Abvfooter from '../../Components/Footer/Abvfooter'
import Footer from '../../Components/Footer/Footer'


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
      title='Booking System'
      information='write something here'
      />

      <PicInfo img={Sightseeing}
      title='Sightseeing'
      information='write something here'
      />
      
      <PicInfo img={Adventure}
      title='Adventure'
      information='write something here'
      />
      <PicInfo img={Wildlife}
      title='Wildlife'
      information='write something here'
      />
      

       </div>


      <Weekends/>
      <Toursintro/>
        
        <div className='Tourcard_wrapper'>
        <TourCard 
        imgUrl={TourCardPic}
        title='Gilgit Tour'
        price='$100' 
        />

  <TourCard 
        imgUrl={TourCardPic}
        title='Gilgit Tour'
        price='$100' 
        />
        <TourCard 
        imgUrl={TourCardPic}
        title='Gilgit Tour'
        price='$100' 
        />
        <TourCard 
        imgUrl={TourCardPic}
        title='Gilgit Tour'
        price='$100' 
        />
        
        <TourCard 
        imgUrl={TourCardPic}
        title='Gilgit Tour'
        price='$100' 
        />
        
        <TourCard 
        imgUrl={TourCardPic}
        title='Gilgit Tour'
        price='$100' 
        />
        </div>

        <Abvfooter/>
        
        <Footer/>

      </>


  )
}

export default Home