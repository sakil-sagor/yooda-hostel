import { Input } from 'postcss';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

const ServeFood = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => [
        fetch(`https://protected-savannah-84466.herokuapp.com/foodItems`)
            .then(res => res.json())
            .then(data => {
                setFoods(data.foods);
            })
    ], [])

    const breakFast = foods?.filter(food => food.category === "Breakfast")
    const lunch = foods?.filter(food => food.category === "Lunch")
    const dinner = foods?.filter(food => food.category === "Dinner")

    console.log(dinner);
    const [searchInput, setSearchInput] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const getName = useRef('');
    useEffect(() => {

        const url = ` https://protected-savannah-84466.herokuapp.com/students?search=${searchInput}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSearchResult(data.students))
    }, [searchInput])

    const handelSearch = e => {
        setSearchInput(getName.current.value);

    }




    const updateName = e => {
        const registerStatus = e.target.value;
        // const newName = { ...student };
        // newName.status = registerStatus;
        // setStudent(newName);
    }
    const updateRoll = e => {
        const registerStatus = e.target.value;
        // const newName = { ...student };
        // newName.status = registerStatus;
        // setStudent(newName);
    }
    const [shift, setShift] = useState('')
    const handelShift = e => {
        setShift(e.target.value);
    }



    return (
        <div>
            <div className="bg-blue-100 py-12 rounded-lg">
                <div className="m-auto container full-width-all m-auto">
                    <div className=''>
                        <div className='pb-8'>
                            <h2 className="text-center text-3xl"> Search Student By Roll </h2>
                            <div className="m-auto  px-2">
                                <div>
                                    <div className="text-center pb-2">
                                        <input type="text" className="py-2 px-3 text-lg border-black border md:w-1/2  mx-auto  my-6 rounded-full " placeholder="Student Roll" ref={getName} onChange={handelSearch} />
                                    </div>
                                </div>
                                <div className='grid grid-cols-3 gap-4 '>
                                    {
                                        searchResult.map(result =>
                                            <div className='border-2 border-gray-500 p-2'>
                                                <form className="register-form mt-6">
                                                    <div>
                                                        <label className='text-left block font-semibold text-lg mb-2'>Student Full Name</label>
                                                        <input required className="py-2 px-4 w-full text-lg  rounded-md " type="text" onChange={updateName} value={result.name || ''} />
                                                    </div>
                                                    <div>
                                                        <label className='text-left block font-semibold text-lg mb-2'>Student Roll</label>
                                                        <input required className="py-2 px-4 w-full text-lg  rounded-md " type="number" onChange={updateRoll} value={result.roll || ''} />
                                                    </div>
                                                    <br />

                                                    <div className='grid grid-cols-2 gap-x-2 mb-3'>
                                                        <div>
                                                            <select required className="py-2 px-4 w-full text-lg  rounded-md " name="category" onChange={handelShift} >
                                                                <option className='' value="" disabled selected>Select Food Item </option>
                                                                <option> Breakfast</option>
                                                                <option> Lunch</option>
                                                                <option> Dinner</option>

                                                            </select>
                                                        </div>

                                                        <div>
                                                            <input className="py-2 px-4 w-full  rounded-md " type="date" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        {
                                                            shift === "Breakfast" &&
                                                            <div>
                                                                {
                                                                    breakFast.map(item =>
                                                                        <div>
                                                                            <div>
                                                                                <input type="checkbox" id={item._id} className="h-4 w-4 mr-3" />
                                                                                <label For={item._id}>{item.foodName}</label>

                                                                            </div>

                                                                        </div>)
                                                                }
                                                            </div>
                                                        }
                                                        {
                                                            shift === "Lunch" &&
                                                            <div>
                                                                {
                                                                    lunch.map(item =>
                                                                        <div>
                                                                            <div>
                                                                                <input type="checkbox" id={item._id} className="h-4 w-4 mr-3" />
                                                                                <label For={item._id}>{item.foodName}</label>

                                                                            </div>
                                                                        </div>)
                                                                }
                                                            </div>
                                                        }
                                                        {
                                                            shift === "Dinner" &&
                                                            <div>
                                                                {
                                                                    dinner.map(item =>
                                                                        <div>
                                                                            <div>
                                                                                <input type="checkbox" id={item._id} className="h-4 w-4 mr-3" />
                                                                                <label For={item._id}>{item.foodName}</label>

                                                                            </div>
                                                                        </div>)
                                                                }
                                                            </div>
                                                        }
                                                    </div>
                                                    <br />
                                                    <div>
                                                        <input type="submit" className="py-2 px-4  text-white rounded-md bg-indigo-900 cursor-pointer hover:bg-indigo-800" value="Serve Food" />
                                                    </div>
                                                    <br />
                                                </form>

                                            </div>)
                                    }
                                </div>








                            </div>
                        </div>
                        <div className=''>
                            {/* <h2 className="text-center text-3xl"> Total Food Items - {total} </h2>
                            <div>
                                <div>
                                    <div className="res-table">
                                        <div className="">
                                            <table className="w-full mt-6 ">
                                                <tr>
                                                    <th> Food Id</th>
                                                    <th>Food Name</th>
                                                    <th>Food Price</th>
                                                    <th className>Time Shift</th>
                                                    <th colspan="2">Activities</th>
                                                </tr>
                                                {foods.map(food =>
                                                    <tr >
                                                        <td>{food.foodId}</td>
                                                        <td>{food.foodName}</td>
                                                        <td>{food.price}</td>
                                                        <td >{food.category}</td>
                                                        <td className='bg-green-600 text-white hover:bg-green-800'>      <NavLink to={`/addFood/updateFood/${food._id}`}>Edit</NavLink> </td>
                                                        <td className="bg-red-600 text-white hover:bg-red-700"><button onClick={() => handelDeleteFood(food._id)}>Delte</button></td>

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
                            </div> */}
                        </div>

                    </div>
                </div >

            </div >






        </div>
    );
};

export default ServeFood;