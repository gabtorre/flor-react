class UserModel {
    
    static show(){
        return fetch('https://pulse-django.herokuapp.com/api/user/current_user/', {
            method: 'GET',
            headers: {
                'Authorization': `JWT ${localStorage.access_token}`
            }
        }).then((response) => response.json())
        .catch((err) => console.log(err));
    }
}

export default UserModel;