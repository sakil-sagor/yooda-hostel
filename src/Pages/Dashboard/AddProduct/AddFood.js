import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import './AddFood.css'

const AddFood = () => {
    const [foods, setFoods] = useState([]);
    const [update, setUpdate] = useState(0);

    useEffect(() => [
        fetch('http://localhost:5000/foodItems')
            .then(res => res.json())
            .then(data => setFoods(data))
    ], [update])

    console.log(foods);

    const initialValu = {
        InStock: true,
    }
    const [productData, setProductData] = useState(initialValu)

    const handelfield = e => {
        const field = e.target.name;
        const value = e.target.value;
        const fieldData = { ...productData }
        fieldData[field] = value;
        setProductData(fieldData)
    }

    const getCategory = useRef('');
    const getFoodId = useRef('');
    const getName = useRef('');
    const getPrice = useRef('');
    // const getImg = useRef('');

    const handelRegister = e => {
        const product = { ...productData }

        fetch(' http://localhost:5000/foodItems', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    alert("success")
                    getFoodId.current.value = getCategory.current.value = getName.current.value = getPrice.current.value = '';
                    setUpdate(update + 1)
                }
            })

        e.preventDefault();
    }

    // delete food 
    const handelDeleteFood = (id) => {
        const proceed = window.confirm("Are you sure, You want to delete it?")
        if (proceed) {

            const url = ` http://localhost:5000/foodItems/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully delete the data.')
                        const remainingData = foods.filter(user => user._id !== id)
                        setFoods(remainingData)
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
                            <h2 className="text-center text-3xl"> Add a new Food </h2>
                            <div className="m-auto md:w-8/12 px-2">
                                <form onSubmit={handelRegister} className="register-form mt-6">
                                    <div>
                                        <select required className="py-2 px-4 w-full text-lg  rounded-md " name="category" onBlur={handelfield} ref={getCategory}>
                                            <option className='' value="" disabled selected>Select Shift Time </option>
                                            <option> Breakfast</option>
                                            <option> Lunch</option>
                                            <option> Dinner</option>

                                        </select>
                                    </div>

                                    <br />
                                    <div>
                                        <input required className="py-2 px-4 w-full text-lg  rounded-md" name="foodId" type="number" step="0.01" onBlur={handelfield} ref={getFoodId} placeholder="Food Id" />
                                    </div>
                                    <br />
                                    <div>
                                        <input required className="py-2 px-4 w-full text-lg  rounded-md " name="foodName" type="text" onBlur={handelfield} ref={getName} placeholder="Food Item Name" />
                                    </div> <br />
                                    <div>
                                        <input required className="py-2 px-4 w-full text-lg  rounded-md" name="price" type="number" step="0.01" onBlur={handelfield} ref={getPrice} placeholder="Price" />
                                    </div>
                                    <br />

                                    {/* <div>
                                        <input required className="py-2 px-4 w-full text-lg  rounded-md" name="img" type="text" onBlur={handelfield} ref={getImg} placeholder=" IMG url" />
                                    </div> <br /> */}
                                    <div>
                                        <input className="py-2 px-4  text-white rounded-md bg-indigo-900 cursor-pointer hover:bg-indigo-800" type="submit" value="Add Food" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-8'>
                            <h2 className="text-center text-3xl"> All Foods </h2>
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
                                                        <td className='bg-green-600 text-white hover:bg-green-800'>Edit</td>
                                                        <td className="bg-red-600 text-white hover:bg-red-700"><button onClick={() => handelDeleteFood(food._id)}>Delte</button></td>

                                                    </tr>
                                                )}
                                            </table>
                                        </div >
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div >

            </div >
        </div >
    );
};

export default AddFood;