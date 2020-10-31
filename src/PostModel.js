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
                "Content-Type": "application/json",
                'Authorization': `JWT ${localStorage.access_token}`
            },
            body: JSON.stringify(posts)
        }).then(response => response.json());
    }

}

export default PostModel;