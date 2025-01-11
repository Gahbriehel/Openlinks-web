import React, { useState } from 'react'
import './css/profile.css'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { addUser } from './redux/userData/userSlice'


const Profile = () => {
    const userData = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const [profileData, setProfileData] = useState({
        avatar: userData.user.avatar,
        name: userData.user.name,
        email: userData.user.email,
        apartment: userData.user.apartment,
        street: userData.user.street,
        city: userData.user.city,
        zip: userData.user.zip,
        country: userData.user.country,
    });

    const putUrl = `https://open-link-backend.onrender.com/api/v1/users/${userData.user.id}`

    // console.log(putUrl);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(putUrl, profileData)
        } catch (err) {
            console.log(err)
        }
        dispatch(addUser({ ...userData, user: profileData }))
        localStorage.setItem('user', JSON.stringify({ ...userData, user: profileData }))

        console.log("Uploaded")
    }


    const handleFile = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file)
        // if (file.size >= 300000) { // 300KB or less
        // }

        setProfileData({ ...profileData, avatar: base64 })
    }


    return (
        <div className='profile_container'>
            <h1 className='header'>My profile</h1>
            <h2 className='header'>Edit your profile</h2>
            <div className='form_container'>
                <form className='profile_form' onSubmit={handleSubmit}>
                    <div className='form_group'>
                        <label htmlFor='file' className='avatar_profile'>
                            <img
                                src={profileData.avatar || '/images/profile_avater.jpeg'}
                                alt='avatar'
                            />
                        </label>
                        <div>
                            <input
                                className='file_input'
                                accept='.jpeg, .jpg, .png, .webp'
                                type='file'
                                id='file'
                                onChange={(e) => handleFile(e)}
                            />
                            <p className='input_help'>Please upload a <strong>square-shaped</strong> picture. Max 300KB. Formats allowed: <span className='file_format'>jpg</span>, <span className='file_format'>jpeg</span>, <span className='file_format'>png</span> and <span className='file_format'>webp</span></p>
                        </div>
                    </div>
                    <hr />
                    <div className='profile_information'>
                        <div className='form_group'>
                            <label htmlFor='name'>Full Name</label>
                            <div className="input_div">
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    aria-label='Name'
                                    value={profileData.name}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className='form_group'>
                            <label htmlFor='email'>Email</label>
                            <div className="input_div">
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    value={profileData.email}
                                    aria-label='Email'
                                    disabled
                                />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='delivery_information'>
                        <h2 className='header'>Delivery information</h2>
                        <div className='form_group'>
                            <label htmlFor='apartment'>Apartment</label>
                            <div className="input_div">
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    value={profileData.apartment}
                                    aria-label='Name'
                                    required
                                    onChange={(e) => setProfileData({
                                        ...profileData,
                                        apartment: e.target.value
                                    }
                                    )}
                                />
                            </div>
                        </div>
                        <div className='form_group'>
                            <label htmlFor='street'>Street</label>
                            <div className="input_div">
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    value={profileData.street}
                                    aria-label='Name'
                                    required
                                    onChange={(e) => setProfileData({
                                        ...profileData,
                                        street: e.target.value
                                    }
                                    )}
                                />
                            </div>
                        </div>
                        <div className='form_group'>
                            <label htmlFor='city'>City</label>
                            <div className="input_div">
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    value={profileData.city}
                                    aria-label='Name'
                                    required
                                    onChange={(e) => setProfileData({
                                        ...profileData,
                                        city: e.target.value
                                    }
                                    )}
                                />
                            </div>
                        </div>
                        <div className='form_group'>
                            <label htmlFor='zip'>Zip code</label>
                            <div className="input_div">
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    value={profileData.zip}
                                    aria-label='Name'
                                    required
                                    onChange={(e) => setProfileData({
                                        ...profileData,
                                        zip: e.target.value
                                    }
                                    )}
                                />
                            </div>
                        </div>
                        <div className='form_group'>
                            <label htmlFor='country'>Country</label>
                            <div className="input_div">
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    value={profileData.country}
                                    aria-label='Name'
                                    required
                                    onChange={(e) => setProfileData({
                                        ...profileData,
                                        country: e.target.value
                                    }
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='button'>
                        <button>Save my information</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Profile;


const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}