import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const UpdateFood = () => {
    const [food, setFood] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const url = `https://protected-savannah-84466.herokuapp.com/foodItems/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFood(data))
    }, []);
    const updateCategory = e => {
        const registerCategory = e.target.value;
        const newName = { ...food };
        newName.category = registerCategory;
        setFood(newName);
    }
    const updateFoodId = e => {
        const registerId = e.target.value;
        const newName = { ...food };
        newName.foodId = registerId;
        setFood(newName);
    }

    const updateFoodName = e => {
        const registerName = e.target.value;
        const newName = { ...food };
        newName.foodName = registerName;
        setFood(newName);
    }
    const updateFoodPrice = e => {
        const registerPrice = e.target.value;
        const newName = { ...food };
        newName.price = registerPrice;
        setFood(newName);
    }

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/addFood';
    console.log(location);
    console.log(history);
    const hangelUpdateUser = e => {
        const url = `https://protected-savannah-84466.herokuapp.com/foodItems/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(food)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful.')
                    setFood({})
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
                            <h2 className=" text-3xl"> Update Food Details</h2>
                            <div className="m-auto md:w-10/12 px-2">
                                <form onSubmit={hangelUpdateUser} className="register-form mt-6">
                                    <div>
                                        <label className='text-left block font-semibold text-lg mb-2'> Time Shift</label>
                                        <select required className="py-2 px-4 w-full text-lg  rounded-md " name="category" value={food.category || ''} onChange={updateCategory}>
                                            <option className='' selected>Select Shift Time </option>
                                            <option> Breakfast</option>
                                            <option> Lunch</option>
                                            <option> Dinner</option>

                                        </select>
                                    </div>
                                    <br />
                                    <div>
                                        <label className='text-left block font-semibold text-lg mb-2'>Food Id</label>
                                        <input required className="py-2 px-4 w-full text-lg  rounded-md " type="number" onChange={updateFoodId} value={food.foodId || ''} />
                                    </div>
                                    <br />
                                    <div>
                                        <label className='text-left block font-semibold text-lg mb-2'>Food Name</label>
                                        <input required className="py-2 px-4 w-full text-lg  rounded-md " type="text" onChange={updateFoodName} value={food.foodName || ''} />
                                    </div>
                                    <br />

                                    <div>
                                        <label className='text-left block font-semibold text-lg mb-2'>Food Price</label>
                                        <input required className="py-2 px-4 w-full text-lg  rounded-md" name="price" type="number" step="0.01" onChange={updateFoodPrice} value={food.price || ''} />
                                    </div>
                                    <br />
                                    <div>
                                        <input type="submit" className="py-2 px-4  text-white rounded-md bg-indigo-900 cursor-pointer hover:bg-indigo-800" value="Update" />
                                    </div>
                                </form>

                            </div>

                        </div>
                        <div className='col-span-12 lg:col-span-8'>
                            <h2 className="text-center text-3xl">Updated  Foods Details </h2>
                            <div>
                                <div>
                                    <div className="res-table">
                                        <div className="">
                                            <table className="w-full mt-6 font-semibold text-lg">
                                                <tr>
                                                    <th> Food Id</th>
                                                    <th>Food Name</th>
                                                    <th>Food Price</th>
                                                    <th className>Time Shift</th>
                                                </tr>
                                                <tr >
                                                    <td>{food.foodId}</td>
                                                    <td>{food.foodName}</td>
                                                    <td>{food.price}</td>
                                                    <td >{food.category}</td>
                                                </tr>
                                            </table>
                                        </div >
                                    </div>
                                    <div className=" mt-8">
                                        <NavLink to='/addFood'>
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

export default UpdateFood;