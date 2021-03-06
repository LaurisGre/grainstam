import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserByUsername } from '../services/firebase';
import * as ROUTES from '../constants/routes';
import Header from '../components/header';
import UserProfile from '../components/profile';

export default function Profile() {
    const { username } = useParams();
    const [user, setUser] = useState(null)
    const history = useHistory();

    useEffect(() => {
        async function checkUserExist() {
            const user = await getUserByUsername(username);
            if (user.length > 0) {
                setUser(user[0]);
            } else {
                history.push(ROUTES.NOT_FOUND);
            }
        }

        checkUserExist();
    }, [username, history])

    return user?.username ? (
        <div className="bg-gray-background">
            <Header />
            <div className="mx-auto max-w-screen-lg">
                <UserProfile user={user} />
            </div>
        </div>
    ) : null
}
