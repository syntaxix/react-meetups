import MeetupList from '../components/meetups/MeetupList';
import { useState } from 'react';
import { useEffect } from 'react';


function AllMeetupsPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        fetch(
            'https://react-getting-started-4c175-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
        ).then((res) => {
            return res.json();
        }).then(data => {
            const meetups = [];

            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup);
            }

            setIsLoading(false);
            console.log(meetups);
            setLoadedMeetups(meetups);
        });

    }, []);


    if (isLoading) {
        return (
            <section>
                <p>Loading....</p>
            </section>
        )
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups}></MeetupList>
        </section>
    )
}

export default AllMeetupsPage;