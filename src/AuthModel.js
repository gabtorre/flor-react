class AuthModel {

    static register = data => {
        return fetch('http://127.0.0.1:8000/api/user/create/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(data),
        }).then((response) => response.json());
    }

    static login = data => {
        return fetch('http://127.0.0.1:8000/api/token/obtain/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => response.json());
    }

} 

export default AuthModel;