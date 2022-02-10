import React, { useEffect, useState } from 'react';


const AllFood = () => {
    const [foods, setFoods] = useState([]);
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0);
    const [update, setUpdate] = useState(0);
    const [total, setTotal] = useState(0)
    const size = 5;
    // load all food from backend 
    useEffect(() => [
        fetch(`https://protected-savannah-84466.herokuapp.com/foodItems?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setFoods(data.foods);
                setTotal(data.count)
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);

            })
    ], [update, page])
    return (
        <div className='py-12'>
            <div className='col-span-12 lg:col-span-8'>
                <h2 className="text-center text-3xl pb-8"> Todays Food Items  </h2>
                <hr />
                <div className='py-12 px-6'>
                    <div>
                        <div className="res-table">
                            <div className="">
                                <table className="w-full mt-6 ">
                                    <tr>
                                        <th> Food Id</th>
                                        <th>Food Name</th>
                                        <th>Food Price</th>
                                        <th className>Time Shift</th>

                                    </tr>
                                    {foods.map(food =>
                                        <tr >
                                            <td>{food.foodId}</td>
                                            <td>{food.foodName}</td>
                                            <td>{food.price}</td>
                                            <td >{food.category}</td>


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

export default AllFood;