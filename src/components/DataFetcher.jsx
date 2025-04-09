import { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetcher({ userId = 1 }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        setData(response.data)
      } catch (err) {
        setError(`Error fetching data: ${err.message}`)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [userId]) // Refetch when userId changes

  if (loading) {
    return (
      <div className="data-container loading">
        <h2>Завантаження даних...</h2>
        <div className="loader"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="data-container error">
        <h2>Помилка!</h2>
        <p>{error}</p>
        <p>Спробуйте обрати іншого користувача.</p>
      </div>
    )
  }

  return (
    <div className="data-container">
      <h2>Інформація про користувача</h2>
      {data && (
        <div className="user-card">
          <h3>{data.name}</h3>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
          <p><strong>Website:</strong> {data.website}</p>
          <div className="address">
            <h4>Адреса:</h4>
            <p>{data.address.street}, {data.address.suite}</p>
            <p>{data.address.city}, {data.address.zipcode}</p>
          </div>
          <div className="company">
            <h4>Компанія:</h4>
            <p><strong>Назва:</strong> {data.company.name}</p>
            <p><strong>Діяльність:</strong> {data.company.bs}</p>
            <p><em>"{data.company.catchPhrase}"</em></p>
          </div>
        </div>
      )}
    </div>
  )
}

export default DataFetcher 