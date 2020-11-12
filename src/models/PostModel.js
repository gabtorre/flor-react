class PostModel {
    
    static create = (postData) => {
        return fetch('https://pulse-django.herokuapp.com/posts/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `JWT ${localStorage.access_token}`
            },
            body: JSON.stringify(postData)
        })
        .then(response => response.json());
    }

    static comment = (postId, commentData) => {
        return fetch(`https://pulse-django.herokuapp.com/posts/comments/${postId}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `JWT ${localStorage.access_token}`
            },
            body: JSON.stringify(commentData)
        })
        .then(response => response.json());
    }

    static show = (posts) => {
        return fetch('https://pulse-django.herokuapp.com/posts/', {
            method: "GET",
            headers: {
                'Authorization': `JWT ${localStorage.access_token}`
            },
        }).then(response => response.json());
    }

    static delete = (post) => {
        return fetch(`https://pulse-django.herokuapp.com/posts/${post}/`, {
            method: "DELETE",
            headers: {
                'Authorization': `JWT ${localStorage.access_token}`
            },
        }).then(response => response.json());
    }
}

export default PostModel;