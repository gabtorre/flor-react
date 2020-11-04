class PostModel {
    static create = (postData) => {
        return fetch('http://localhost:8000/posts/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `JWT ${localStorage.access_token}`
            },
            body: JSON.stringify(postData)
        })
        .then(response => response.json());
    }

    static show = (posts) => {
        return fetch('http://localhost:8000/posts/', {
            method: "GET",
            headers: {
                'Authorization': `JWT ${localStorage.access_token}`
            },
        }).then(response => response.json());
    }

    static show = (posts) => {
        return fetch('http://localhost:8000/posts/', {
            method: "GET",
            headers: {
                'Authorization': `JWT ${localStorage.access_token}`
            },
        }).then(response => response.json());
    }

    static delete = (post) => {
        return fetch(`http://localhost:8000/posts/${post}/`, {
            method: "DELETE",
            headers: {
                'Authorization': `JWT ${localStorage.access_token}`
            },
        }).then(response => response.json());
    }

    // static edit = (postId, postData) => {
    //     return fetch(`http://localhost:8000/posts/${gameId}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(gameData)
    //     })
    //     .then(response => response.json());
    // }

}

export default PostModel;