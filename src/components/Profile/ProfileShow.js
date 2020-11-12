import React from 'react';
import ProfileTemplate from '../Profile/ProfileTemplate';
import UserPosts from '../Post/UserPosts'
import useProfiles from '../../hooks/useProfiles';

function ProfileShow(props) {
    const [profile] = useProfiles(props.match.params.id);
    return profile ? <><ProfileTemplate profile={profile} user_id={props.match.params.id} /> <UserPosts profile={profile} user_id={props.match.params.id}/></>: <h3>Loading...</h3>;
}

export default ProfileShow;