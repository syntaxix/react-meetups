import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(props) {

    function addNewMeetup(meetupData) {
        console.log(meetupData);
        fetch(
            'https://react-getting-started-4c175-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            window.location.href = "/"
        });
    }


    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addNewMeetup}></NewMeetupForm>

        </section>
    )
}

export default NewMeetupPage;