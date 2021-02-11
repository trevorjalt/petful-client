require('dotenv').config()

export default {
    API_ENDPOINT: (process.env.REACT_APP_ENV === 'production')
        ? 'https://petful-api-tja.herokuapp.com/api'
        : 'http://localhost:8000/api',
}