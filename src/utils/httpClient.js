const API = "https://api.themoviedb.org/3"

export function httpGet(path) {
    return fetch (API + path, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2JjN2QzNmQ5NDA5OGIxYWM0MWUyNjhjZDliMTQ3NCIsInN1YiI6IjYyZDgyMTQ5OTcxNWFlMDJhOWM5MjdkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qcx2N341SosVeZJ_vZAk2yhmR6S0LqLf_aUdHZgfD0U",

                "Content-Type": "application/json;charset=utf-8",
            },
        })
            .then(result => result.json())
}