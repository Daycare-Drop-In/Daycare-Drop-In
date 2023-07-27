import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function AddChildForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [allergies, setAllergies] = useState("");
    const [pottyTrained, setPottyTrained] = useState(false);
    const [photo_url, setPhoto_Url] = useState("");

    const errors = useSelector((store) => store.errors);
    const dispatch = useDispatch();







    const registerChild = (event) => {
        event.preventDefault();
        dispatch ({
            type: "POST_CHILD",
            payload: {
                firstName: firstName,
                lastName: lastName,
                birthdate: birthdate, 
                allergies: allergies,
                pottyTrained: pottyTrained,
                photo_url: photo_url
                
            },
        })
    }


    return (
        <form className="formPanel" onSubmit={registerChild}>
            <h2>Register Your Child</h2>
            {errors.registrationMessage && (
                <h3 className="alert" role="alert">
                    {errors.registrationMessage}
                </h3>
            )}
            <div>
                <label htmlFor="first_name">
                    First Name:
                    <input
                        type="text"
                        name="first_name"
                        value={firstName}
                        required
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                </label>
            </div>

            <div>
                <label htmlFor="last_name">
                    Last Name:
                    <input
                        type="text"
                        name="last_name"
                        value={lastName}
                        required
                        onChange={(event) => setLastName(event.target.value)}
                    />
                </label>
            </div>

            <div>
                <label htmlFor="birthdate">
                    Birthdate:
                    <input
                        type="text"
                        name="Birthdate"
                        placeholder="Birthdate"
                        value={birthdate}
                        required
                        onChange={(event) => setBirthdate(event.target.value)}
                    />
                </label>
            </div>

            <div>
                <label htmlFor="allergies">
                    Allergies:
                    <input
                        type="text"
                        name="allergies"
                        placeholder="allergies"
                        value={allergies}
                        required
                        onChange={(event) => setAllergies(event.target.value)}
                    />
                </label>
            </div>

            <div>
                <label htmlFor="potty trained">
                    Potty Trained:
                    <input
                        type="checkbox"
                        name="potty trained"
                        checked={pottyTrained}
                        onChange={(event) => 
                            setPottyTrained(event.target.checked)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="photo_url">
                    Photo:
                    <input
                        type="url"
                        name="photo_url"
                        value={photo_url}
                        required
                        onChange={(event) => setPhoto_Url(event.target.value)}
                    />
                </label>
            </div>

            <div>
                <input className="btn" type="submit" name="submit" value="Submit" />
            </div>
        </form>
    )
}


export default AddChildForm;