import React, { useEffect, useState } from 'react';


const AllStudents = () => {
    const [students, setStudents] = useState([]);
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0);
    const [update, setUpdate] = useState(0);
    const [total, setTotal] = useState(0)
    const size = 5;
    // load all students from backend 
    useEffect(() => [
        fetch(`https://protected-savannah-84466.herokuapp.com/students?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setStudents(data.students);
                setTotal(data.count)
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);

            })
    ], [update, page])

    return (
        <div className='py-12 px-2'>
            <div className='col-span-12 lg:col-span-8'>
                <h2 className="text-center text-3xl">Our All Students </h2>
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

                                    </tr>
                                    {students.map(student =>
                                        <tr >
                                            {
                                                student?.status === "Active" ?
                                                    <td><input className='h-6 w-6' type="checkbox" checked /></td>
                                                    :
                                                    <td><input className='h-6 w-6' type="checkbox" /></td>
                                            }
                                            <td >{student.status}</td>
                                            <td>{student.roll}</td>
                                            <td>{student.name}</td>
                                            <td>{student.class}</td>
                                            <td >{student.age}</td>
                                            <td >{student.hall}</td>


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
    );
};

export default AllStudents;