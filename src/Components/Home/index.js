import React, { useEffect, useState } from 'react'
import Section from '../Section'
import data from '../../assets/topStoriesData.json'

export default function HomePage () {
  const [stories, setStories] = useState([])
  useEffect(() => {
    setStories(data.results)
  }, [stories])

  return (
    <div>
      <Section type={'News'} data={stories} />
    </div>
  )
}
