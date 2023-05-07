import React from 'react';

import { help,flag,flood,slums,emotions} from '../assets';
import { Carousel } from 'react-carousel-minimal';

function App() {
 const data = [
    {
      image: help,
      caption: "Covid"
    },
    {
      image: flag,
      caption: "Ukraine"
    },
    {
      image: flood,
      caption: "Pakistan"
    },
    {
      image: slums,
      caption: "India"
    },
    {
      image: emotions,
      caption: "Scotland"
    },
    {
      image:"https://cdn.pixabay.com/photo/2016/09/12/21/58/earthquake-1665891_1280.jpg",
      caption: "Turkey"
    },
    {
      image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco"
    },
    
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h2 className='text-[30px] font-bold text-white'>Campaigns that matters</h2>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="900px"
            height="450px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;