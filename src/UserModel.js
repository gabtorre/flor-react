class UserModel {
    static show(){
        return fetch('http://localhost:8000/api/user/current_user/', {
            method: 'GET',
            headers: {
                'Authorization': `JWT ${localStorage.access_token}`
            }
        }).then((response) => response.json())
        .catch((err) => console.log(err));
    }
}

export default UserModel;