'use client'

import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

interface RoomProps {
  room: {
    id: number
    name: string
    images: string[]
  }
}

const RoomGallery: React.FC<RoomProps> = ({ room }) => {
  const [open, setOpen] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setImageIndex(index)
    setOpen(true)
  }

  return (
    <div className="room-gallery">
      <h2 className="text-3xl font-semibold mb-6 text-center text-[#383e42]">{room.name}</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {room.images.map((image, index) => (
          <div 
            key={index} 
            className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            onClick={() => openLightbox(index)}
          >
            <img 
              src={image} 
              alt={`${room.name} - Resim ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={imageIndex}
        slides={room.images.map(image => ({ src: image }))}
      />
    </div>
  )
}

export default RoomGallery 