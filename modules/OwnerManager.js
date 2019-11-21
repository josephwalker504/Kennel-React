const ownerURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${ownerURL}/owners/${id}`).then(results => results.json())
    },
    getAll() {
        return fetch(`${ownerURL}/owners`).then(results => results.json())
    },

    delete(id) {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
        .then(result => result.json())
      }
}