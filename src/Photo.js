import React from 'react'

const Photo = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  return (
    <article className='photo'>
      <img src={regular} alt={alt_description} loading='lazy' />
      <div className='photo-info'>
        <div>
          <h4>{name}</h4>
          <p>{likes} likes</p>
        </div>
        <a href={portfolio_url} target='_blank' rel='noopener noreferrer'>
          <img src={medium} alt={name} className='user-img' loading='lazy' />
        </a>
      </div>
    </article>
  )
}

export default Photo
