class AuthModel {

    static register = data => {
        return fetch('https://pulse-django.herokuapp.com/api/user/create/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(data),
        }).then((response) => response.json());
    }

    static login = data => {
        return fetch('https://pulse-django.herokuapp.com/api/token/obtain/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => response.json());
    }

} 

export default AuthModel;