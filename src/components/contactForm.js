import { useState } from "react";

export default function SimpleForm() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleChange = (event) => {
        setEmail(event.target.value);
        if (event.target.value) {
            setError("")
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!email) {
            setError("Email is required!");
        } else {
            alert(`Submitted email: ${email}`)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Input email: </label>
            <input type="email" value={email} onChange={handleChange}></input>
            <p>Here's what you've typed: {email}</p>
            <p style={{ color: "red" }}>{error}</p>
            <button type="submit">Submit here</button>
        </form>
    )
}



// import {useState} from 'react';

// export default function  SimpleForm()  {
//     const  [email, setEmail] =  useState('');

//     const  handleChange = (event) => {
//         setEmail(event.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault()
//     }

// return  (
// <form onSubmit={handleSubmit}>
//     <label>Input email:
//     <input  type="email"  value={email} onChange={handleChange} />
//     </label>
//     <p>Typed email: {email}</p>
//     <button type='submit'>Submit here</button>
//     </form>
// )};