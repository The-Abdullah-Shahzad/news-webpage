import React from 'react'
import Section from '../Section'
import { useFetch } from '../../Hooks'
import { GET_ALL_STORIES, GET_SPECIFIC_STORIES } from '../../Apis'

export default function HomePage () {
  const { data, loading, error } = useFetch(GET_ALL_STORIES)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {data?.map(item => (
        <Section type={item.section} data={item.data} />
      ))}
    </div>
  )
}
