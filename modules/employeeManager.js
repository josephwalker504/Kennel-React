const baseURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${baseURL}/employee/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${baseURL}/employee`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:5002/employee/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  }
}