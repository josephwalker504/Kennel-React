const locURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${locURL}/locations/${id}`).then(results => results.json())
    },
    getAll() {
        return fetch(`${locURL}/locations`).then(results => results.json())
    }
}