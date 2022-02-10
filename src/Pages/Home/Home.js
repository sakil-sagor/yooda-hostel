import React from 'react';
import AllFood from './AllFood/AllFood';
import AllStudents from './AllStudents/AllStudents';

const Home = () => {
    return (
        <div>
            <div className='m-auto container full-width-all m-auto'>
                <AllFood></AllFood>
                <hr />
                <AllStudents></AllStudents>
            </div>
        </div>
    );
};

export default Home;