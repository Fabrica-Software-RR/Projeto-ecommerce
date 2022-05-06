import { useState } from 'react'
import { ContainerCarrosel, StyledCarousel } from './Style'
import Image from 'next/image'

function Carrosel() {
  const [images, setImages] = useState([
    {
      id: 1,
      url: '/Fotos/1.jpeg',
      title: 'Image 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    },
    {
      id: 2,
      url: '/Fotos/2.jpeg',
      title: 'Image 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    },
    {
      id: 3,
      url: '/Fotos/3.jpeg',
      title: 'Image 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    },
    {
      id: 4,
      url: '/Fotos/4.jpeg',
      title: 'Image 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    },
  ])

  return (
    <ContainerCarrosel>
      <StyledCarousel autoplay>
        {images.map((image) => (
          <div key={image.id}>
            <Image
              src={image.url}
              alt={image.title}
              width={800}
              height={300}
            />
            <div className="carousel-caption">
            </div>
          </div>
        ))}
      </StyledCarousel>
    </ContainerCarrosel>
  )
}

export default Carrosel
