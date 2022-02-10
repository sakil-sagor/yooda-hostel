import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const UpdateStudents = () => {

    const [student, setStudent] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const url = `https://protected-savannah-84466.herokuapp.com/students/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setStudent(data))
    }, []);
    const updateName = e => {
        const registerName = e.target.value;
        const newName = { ...student };
        newName.name = registerName;
        setStudent(newName);
    }
    const updateRoll = e => {
        const registerRoll = e.target.value;
        const newName = { ...student };
        newName.roll = registerRoll;
        setStudent(newName);
    }

    const updateAge = e => {
        const registerAge = e.target.value;
        const newName = { ...student };
        newName.age = registerAge;
        setStudent(newName);
    }

    const updateClass = e => {
        const registerClass = e.target.value;
        const newName = { ...student };
        newName.class = registerClass;
        setStudent(newName);
    }
    const updateHall = e => {
        const registerHall = e.target.value;
        const newName = { ...student };
        newName.hall = registerHall;
        setStudent(newName);
    }
    const updateStatus = e => {
        const registerStatus = e.target.value;
        const newName = { ...student };
        newName.status = registerStatus;
        setStudent(newName);
    }
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/addStudent';
    console.log(location);
    console.log(history);
    const hangelUpdateUser = e => {
        const url = `https://protected-savannah-84466.herokuapp.com/students/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(student)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful.')
                    setStudent({})
                    history.push(redirect_url);
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <div className="bg-blue-100 py-12 rounded-lg">
                <div className="m-auto container full-width-all m-auto">
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 lg:col-span-4 pb-8'>
                            <h2 className=" text-3xl"> Update Here.</h2>
                            <div className="m-auto md:w-10/12 px-2">
                                <form onSubmit={hangelUpdateUser} className="register-form mt-6">

                                    <div>
                                        <label className='text-left block font-semibold text-lg mb-2'>Student Full Name</label>
                                        <input required className="py-2 px-4 w-full text-lg  rounded-md " type="text" onChange={updateName} value={student.name || ''} />
                                    </div>
                                    <br />
                                    <div>
                                        <label className='text-left block font-semibold text-lg mb-2'>Student Roll</label>
                                        <input required className="py-2 px-4 w-full text-lg  rounded-md " type="number" onChange={updateRoll} value={student.roll || ''} />
                                    </div>
                                    <br />
                                    <div>
                                        <label className='text-left block font-semibold text-lg mb-1'>Age</label>
                                        <input required className="py-2 px-4 w-full text-lg  rounded-md" type="number" step="0.01" onChange={updateAge} value={student.age || ''} />
                                    </div>
                                    <br />

                                    <div>
                                        <label className='text-left block font-semibold text-lg mb-2'> Class</label>
                                        <select required className="py-2 px-4 w-full text-lg  rounded-md " name="class" value={student.class || ''} onChange={updateClass}>
                                            <option className='' selected>Select Class </option>
                                            <option> Inter 1st</option>
                                            <option> Inter 2nd</option>
                                            <option> Honr`s 1st</option>
                                            <option> Honr`s 2nd</option>
                                            <option> Honr`s 3rd</option>
                                            <option> Honr`s 4th</option>
                                            <option> MSC</option>

                                        </select>
                                    </div>
                                    <br />
                                    <div>
                                        <label className='text-left block font-semibold text-lg mb-2'> Hall</label>
                                        <select required className="py-2 px-4 w-full text-lg  rounded-md " name="hall" value={student.hall || ''} onChange={updateHall}>
                                            <option className='' selected>Select Hall </option>
                                            <option> Padma</option>
                                            <option> Meghna</option>
                                            <option> Jamuna</option>

                                        </select>
                                    </div>
                                    <br />
                                    <div>
                                        <label className='text-left block font-semibold text-lg mb-2'> Status</label>
                                        <select required className="py-2 px-4 w-full text-lg  rounded-md " name="status" value={student.status || ''} onChange={updateStatus}>
                                            <option className='' selected>Select Status </option>
                                            <option> Active</option>
                                            <option> InActive</option>

                                        </select>
                                    </div>
                                    <br />
                                    <div>
                                        <input type="submit" className="py-2 px-4  text-white rounded-md bg-indigo-900 cursor-pointer hover:bg-indigo-800" value="Update" />
                                    </div>


                                </form>

                            </div>

                        </div>
                        <div className='col-span-12 lg:col-span-8'>
                            <h2 className="text-center text-3xl">Updated  Student Details </h2>
                            <div>
                                <div>
                                    <div className="res-table">
                                        <div className="">
                                            <table className="w-full mt-6 font-semibold text-lg">
                                                <tr>
                                                    <th>  Status</th>
                                                    <th>  Roll</th>
                                                    <th> Name</th>
                                                    <th >Class</th>
                                                    <th >Age</th>
                                                    <th> Hall</th>

                                                </tr>
                                                <tr >
                                                    <td>{student.status}</td>
                                                    <td>{student.roll}</td>
                                                    <td>{student.name}</td>
                                                    <td>{student.class}</td>
                                                    <td >{student.age}</td>
                                                    <td >{student.hall}</td>

                                                </tr>
                                            </table>
                                        </div >
                                    </div>
                                    <div className=" mt-8">
                                        <NavLink to='/addStudent'>
                                            <button className="py-2 px-4  text-white rounded-md bg-indigo-900 cursor-pointer hover:bg-indigo-800">Back to Previous Page</button>
                                        </NavLink>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div >

            </div >
        </div>
    );
};

export default UpdateStudents;