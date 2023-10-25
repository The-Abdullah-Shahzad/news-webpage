import React from 'react'
import Section from '../Section'
import { useFetch } from '../../Hooks'
import { GET_SPECIFIC_STORIES } from '../../Apis'
import { useParams } from 'react-router-dom'

export default function SectionPage () {
  const { section } = useParams()
  const { data, loading, error } = useFetch(GET_SPECIFIC_STORIES + section)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Section type={section} data={data} details={true}/>
    </div>
  )
}
