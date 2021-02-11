import config from './config'

const PetService = {
    getPets () {
        return fetch(`${config.API_ENDPOINT}/`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(event => Promise.reject(event))
                    : res.json()
            )

    },


    getPeople() {
        return fetch(`${config.API_ENDPOINT}/people`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(event => Promise.reject(event))
                    : res.json()
            )
    },
    

    addPerson(name) {
        return fetch(`${config.API_ENDPOINT}/people`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({person: name,}),
        })
            .then(res =>
                (!res.ok) 
                    ? res.json().then((e) => Promise.reject(e)) 
                    : res.json()
            )
    },


    getCat() {
        return fetch(`${config.API_ENDPOINT}/pets/cat`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(event => Promise.reject(event))
                    : res.json()
            )
    },


    deleteCat() {
        return fetch(`${config.API_ENDPOINT}/pets/cat`, {
            method: "DELETE",
        })
            .then(res =>
                (!res.ok) 
                    ? res.json().then((e) => Promise.reject(e)) 
                    : null
            )
    },


    getDog() {
        return fetch(`${config.API_ENDPOINT}/pets/dog`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(event => Promise.reject(event))
                    : res.json()
            )
    },

    
    deleteDog() {
        return fetch(`${config.API_ENDPOINT}/pets/dog`, {
          method: "DELETE",
        })
          .then(res =>
            (!res.ok) 
                ? res.json().then((e) => Promise.reject(e)) 
                : null
          )
    },
}

export default PetService
