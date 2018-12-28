export const fetchCreators = () => {
  return fetch('http://127.0.0.1:8000/creators/', {
    method: 'GET',
    dataType: 'json'
  }).then(response => {
    console.log(response)
    return response.json()
  })
}
