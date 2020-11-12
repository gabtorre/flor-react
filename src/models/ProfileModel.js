class ProfileModel {
    
    static all = () => {
        return fetch('https://pulse-django.herokuapp.com/api/users/', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `JWT ${localStorage.access_token}`
            },
        }).then(response => response.json());
    }

    static show = (profileId) => {
        return fetch(`https://pulse-django.herokuapp.com/api/users/${profileId}/`,{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `JWT ${localStorage.access_token}`
            },
        }
        ).then(response => response.json())
    }

    static edit = (profileId, profileData) => {
        return fetch(`https://pulse-django.herokuapp.com/api/users/${profileId}/`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `JWT ${localStorage.access_token}`
            },
            body: JSON.stringify(profileData)
        })
        .then(response => response.json());
    }

    static delete = (profileId) => {
        return fetch(`https://pulse-django.herokuapp.com/api/users/${profileId}/`, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
            'Authorization': `JWT ${localStorage.access_token}`
        },
        })
      }
}

export default ProfileModel;