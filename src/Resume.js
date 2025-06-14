import React, { useState } from "react";

function Resume() {
    const [name, setName] = useState()
    const [gender, setGender] = useState()
    const [contact, setContact] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    const [city, setCity] = useState(['Indore', 'Bhopal', 'Gwalior', 'Ratlam', 'Guna', 'Jabalpur'])
    const [qualification, setQualfication] = useState(['12th pass', 'BA', 'BTech'])
    const [rlist, setRList] = useState([])
    const [selqualif, setSelQualif] = useState()
    const [selcity, setSelCity] = useState()
    const [photo, setPhoto] = useState({ preview: '', data: '' })

    const handleNameText = (evt) => {
        setName(evt.target.value)
    }
    const handleGenderSelect = (evt) => {
        setGender(evt.target.value)
    }
    const handleContactText = (evt) => {
        setContact(evt.target.value)
    }
    const handleEmailText = (evt) => {
        setEmail(evt.target.value)
    }
    const handleAddressText = (evt) => {
        setAddress(evt.target.value)
    }
    const handleCitySelect = (evt) => {
        setSelCity(evt.target.value)
    }
    const handleQualificationSelect = (evt) => {
        setSelQualif(evt.target.value)
    }
    const handleFileChange = (evt) => {
        const img = {
            preview: URL.createObjectURL(evt.target.files[0]),
            data: evt.target.files[0]
        }
        setPhoto(img)
    }

    const handleSubmit = () => {
        // if (!name || !gender || !contact || !email || !address || !selcity || !selqualif) {
        //     alert("Please fill in all fields.");
        //     return;
        // }
        var obj = {
            name: name,
            gender: gender,
            contact: contact,
            email: email,
            address: address,
            city: selcity,
            qualification: selqualif,
            photo: photo
        }
        setRList([...rlist, obj])
    }
    return (
        <div>
            <center>
                <h4 style={{ backgroundColor: 'green', color: 'white' }}>Universal Employment Registration Form</h4>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" name='' onChange={handleNameText} />
                            </td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>
                                <input type="radio" onClick={handleGenderSelect} name="gender" value={"male"} />
                                <span>Male</span>
                                <input type="radio" onClick={handleGenderSelect} name="gender" value={"female"} />
                                <span>Female</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td>
                                <input type="number" onChange={handleContactText} />
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input type="email" onChange={handleEmailText} />
                            </td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>
                                <input type="text" onChange={handleAddressText} />
                            </td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>
                                <select name="" id="" onChange={handleCitySelect}>
                                    {
                                        city.map((item) => (
                                            <option value={item}>{item}</option>
                                        ))
                                    }
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Qualification</td>
                            <td>
                                <select name="" id="" onChange={handleQualificationSelect}>
                                    {
                                        qualification.map((item) => (
                                            <option value={item}>{item}</option>
                                        ))
                                    }
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Photo</td>
                            <td>
                                <input type="file" name="file" onChange={handleFileChange} />
                                <img src={photo.preview} height={50} width={50} alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type="submit" onClick={handleSubmit}>Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h4 style={{ backgroundColor: 'green', color: 'white' }}>Applicant's List</h4>
                {
                    rlist.map((item) => (
                        <table>
                            <tr>
                                <td>Name</td>
                                <td>{item.name}</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>{item.gender}</td>
                            </tr>
                            <tr>
                                <td>Contact</td>
                                <td>{item.contact}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{item.email}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>{item.address}</td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td>{item.city}</td>
                            </tr>
                            <tr>
                                <td>Qualification</td>
                                <td>{item.qualification}</td>
                            </tr>
                            <tr>
                                <td>Photo</td>
                                <td>
                                    <img src={item.photo.preview} height={50} width={50} alt="photo" />
                                </td>
                            </tr>
                        </table>
                    ))
                }
            </center>
        </div>   
    );
} export default Resume;
