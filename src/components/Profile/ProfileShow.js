import React from 'react';
import ProfileTemplate from '../Profile/ProfileTemplate';

import useProfiles from '../../hooks/useProfiles';
import UserPosts from '../Post/UserPosts'

function ProfileShow(props) {
    const [profile] = useProfiles(props.match.params.id);
    return profile ? <><ProfileTemplate profile={profile} /> <UserPosts profile={profile} /></>: <h3>Loading...</h3>;
}

export default ProfileShow;