import { useState, useEffect } from 'react';
import ProfileModel from '../models/ProfileModel';

function useProfiles(profileId) {
    const [profiles, setProfiles] = useState([]);

    function fetchProfiles(id) {
        if (id) {
            ProfileModel.show(id).then((data) => {
                setProfiles(data);
            });
        } else {
            ProfileModel.all().then((data) => {
                setProfiles(data.profiles);
            });
        }
    }

    useEffect(
        function () {
            fetchProfiles(profileId);
        },
        [profileId]
    );

    return [profiles, fetchProfiles];
}

export default useProfiles;