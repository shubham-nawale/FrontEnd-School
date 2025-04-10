import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8080/api', // Spring Boot backend base
  headers: {
    'Content-Type': 'application/json',
  },
});
