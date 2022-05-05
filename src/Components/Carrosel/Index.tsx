import { useState } from 'react'
import { StyledCarousel } from './Style'
import Image from 'next/image'
import fotos from '../../../public/Fotos/1.jpeg'


function Carrosel() {
  const [images, setImages] = useState([
    {
      id: 1,
      url: fotos,
      title: 'Image 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    },
    {
      id: 2,
      url: '/../../../public/Fotos/2.jpeg',
      title: 'Image 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    },
  ])

  return <StyledCarousel autoplay>
 {images.map(image => (
      <div key={image.id}style={{width: '100%' , height:'600px'}}>
        <Image src={image.url} alt={image.title} width={'80%'} height={'40%'}/>
        <div className="carousel-caption">
          <h3>{image.title}</h3>
          <p>{image.description}</p>
        </div>
      </div>
    ))}
  </StyledCarousel>
}

export default Carrosel
