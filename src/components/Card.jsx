


import worksDetails from '../data.js';
import '../scss/card.scss';

import { Link } from 'react-router-dom';



export default function Card() {

    return (
        <>

            <div className='wrapper' style={{ color: '#000', }}>
                <div className='card-works'>
                    {worksDetails.map((item, index) => (

                        <Link key={index} to={`/Details/${item.name}/`} >
                            <div className='card' key={index}>
                                <h3>{item.name}</h3>
                                <p> {item.date}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>


        </>
    )

}

