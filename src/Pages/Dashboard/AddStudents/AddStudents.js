import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

const AddStudents = () => {
    const [students, setStudents] = useState([]);
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0);
    const [update, setUpdate] = useState(0);
    const [total, setTotal] = useState(0)
    const size = 5;
    // load all students from backend 
    useEffect(() => [
        fetch(`http://localhost:5000/students?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setStudents(data.students);
                setTotal(data.count)
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);

            })
    ], [update, page])

    const [studentData, setStudentData] = useState({})

    const handelfield = e => {
        const field = e.target.name;
        const value = e.target.value;
        const fieldData = { ...studentData }
        fieldData[field] = value;
        setStudentData(fieldData)
    }
    const getName = useRef('');
    const getRoll = useRef('');
    const getAge = useRef('');
    const getClass = useRef('');
    const getHall = useRef('');
    const getStatus = useRef('');

    const handelRegister = e => {
        const student = { ...studentData }
        console.log(student);
        fetch(' http://localhost:5000/students', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(student)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    alert("success")
                    getName.current.value = getRoll.current.value = getAge.current.value = getClass.current.value = getHall.current.value = getStatus.current.value = '';
                    setUpdate(update + 1)
                }
            })

        e.preventDefault();
    }

    const handelCheckBox = (id) => (e) => {
        const registerStatus = e.target.checked;
        let action;
        if (registerStatus) {
            action = "Active";
        } else {
            action = "InActive";
        }
        const newName = { status: action, checkBox: true };
        // newName.status = registerStatus;

        console.log(newName);
        const url = `http://localhost:5000/students/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newName)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                    setUpdate(update + 1)

                }
            })

    }

    // delete student 
    const handelDeleteStudent = (id) => {
        const proceed = window.confirm("Are you sure, You want to delete it?")
        if (proceed) {

            const url = ` http://localhost:5000/students/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully delete the data.')
                        const remainingData = students.filter(user => user._id !== id)
                        setStudents(remainingData)
                        setUpdate(update + 1)
                    }
                });
        }
    }
    return (
        <div>
            <div className="bg-blue-100 py-12 rounded-lg">
                <div className="m-auto container full-width-all m-auto">
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 lg:col-span-4 pb-8'>
                            <h2 className="text-center text-3xl"> Add a new Student </h2>
                            <div className="m-auto md:w-8/12 px-2">
                                <form onSubmit={handelRegister} className="register-form mt-6">

                                    <div>
                                        <input required className="py-2 px-4 w-full text-lg  rounded-md " name="name" type="text" onBlur={handelfield} ref={getName} placeholder="Student Full Name" />
                                    </div>
                                    <br />
                                    <div>
                                        <input required className="py-2 px-4 w-full text-lg  rounded-md" name="roll" type="number" step="0.01" onBlur={handelfield} ref={getRoll} placeholder="Roll" />
                                    </div>
                                    <br />
                                    <div>
                                        <input required className="py-2 px-4 w-full text-lg  rounded-md" name="age" type="number" step="0.01" onBlur={handelfield} ref={getAge} placeholder="Age" />
                                    </div>
                                    <br />
                                    <div>
                                        <select required className="py-2 px-4 w-full text-lg  rounded-md " name="class" onBlur={handelfield} ref={getClass}>
                                            <option className='' value="" disabled selected>Select Class </option>
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
                                        <select required className="py-2 px-4 w-full text-lg  rounded-md " name="hall" onBlur={handelfield} ref={getHall}>
                                            <option className='' value="" disabled selected>Select Hall </option>
                                            <option> Padma</option>
                                            <option> Meghna</option>
                                            <option> Jamuna</option>

                                        </select>
                                    </div>

                                    <br />
                                    <div>
                                        <select required className="py-2 px-4 w-full text-lg  rounded-md " name="status" onBlur={handelfield} ref={getStatus}>
                                            <option className='' value="" disabled selected>Select Status </option>
                                            <option> Active</option>
                                            <option> InActive</option>


                                        </select>
                                    </div>

                                    <br />



                                    <div>
                                        <input className="py-2 px-4  text-white rounded-md bg-indigo-900 cursor-pointer hover:bg-indigo-800" type="submit" value="Register Student" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-8'>
                            <h2 className="text-center text-3xl"> Total Students - {total} </h2>
                            <div>
                                <div>
                                    <div className="res-table">
                                        <div className="">
                                            <table className="w-full mt-6 ">
                                                <tr>
                                                    <th colSpan={2}>  Status</th>
                                                    <th>  Roll</th>
                                                    <th> Name</th>
                                                    <th >Class</th>
                                                    <th >Age</th>
                                                    <th> Hall</th>
                                                    <th colspan="2">Activities</th>
                                                </tr>
                                                {students.map(student =>
                                                    <tr >
                                                        {
                                                            student?.status === "Active" ?
                                                                <td><input onClick={handelCheckBox(student._id)} className='h-6 w-6' type="checkbox" checked /></td>
                                                                :
                                                                <td><input onClick={handelCheckBox(student._id)} className='h-6 w-6' type="checkbox" /></td>
                                                        }
                                                        <td >{student.status}</td>
                                                        <td>{student.roll}</td>
                                                        <td>{student.name}</td>
                                                        <td>{student.class}</td>
                                                        <td >{student.age}</td>
                                                        <td >{student.hall}</td>
                                                        <td className='bg-green-600 text-white hover:bg-green-800'>      <NavLink to={`/addStudent/updateStudent/${student._id}`}>Edit</NavLink> </td>
                                                        <td className="bg-red-600 text-white hover:bg-red-700"><button onClick={() => handelDeleteStudent(student._id)}>Delete</button></td>

                                                    </tr>
                                                )}
                                            </table>
                                        </div >
                                    </div>
                                    <div className="pagination mt-8">
                                        {
                                            [...Array(pageCount).keys()].map(number =>
                                                <button className={number === page ? "px-2 mx-2 border-2 rounded text-white bg-indigo-900 border-indigo-900" : " px-2 mx-2 border-2 rounded bg-gray-100 border-indigo-900"}
                                                    key={number}
                                                    onClick={() => setPage(number)}
                                                >{number + 1} </button>)
                                        }

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

export default AddStudents;