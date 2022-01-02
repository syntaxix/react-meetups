
import { useRef } from 'react';
import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';

function NewMeetupForm(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descInputRef = useRef();



    function submitHandler(event) {
        event.preventDefault();

        const meetupData = {
            title: titleInputRef.current.value,
            image: imageInputRef.current.value,
            address: addressInputRef.current.value,
            desc: descInputRef.current.value
        }



        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='txtTitle'>Meetup Title</label>
                    <input type="text" required id="txtTitle" ref={titleInputRef}></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor='txtImage'>Meetup Image</label>
                    <input type="url" required id="txtImage" ref={imageInputRef}></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor='txtAddress'>Address</label>
                    <input type="text" required id="txtAddress" ref={addressInputRef}></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor='txtDesc'>Description</label>
                    <textarea rows="5" required id="txtAddress" ref={descInputRef}></textarea>
                </div>

                <div className={classes.actions}>
                    <button className='btn'>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;