import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = url => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading('loading...')
    setData(null)
    setError(null)
    axios
      .get(url)
      .then(res => {
        setLoading(false)
        setData(res.data.results)
        console.log(res)
      })
      .catch(err => {
        setLoading(false)
        setError('An error occurred. Awkward..')
      })
  }, [url])

  return { data, loading, error }
}
