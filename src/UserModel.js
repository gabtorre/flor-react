class UserModel {
    static show(){
        return fetch('http://localhost:8000/current_user/', {
            method: 'GET',
            headers: {
                'Authorization': `JWT ${localStorage.access_token}`
            }
        }).then((response) => response.json())
        .catch((err) => console.log(err));
    }
}

export default UserModel;


// http://127.0.0.1:8000/api/user/obtain/
// http://localhost:8000/users/
// http://localhost:8000/current_user/