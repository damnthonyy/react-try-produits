


import '../scss/card.scss';

import { Link } from 'react-router-dom';



export default function Card({ data }) {

    return (
        <>

            <div className='wrapper' style={{ backgroundColor: '#000', }}>
                <div className='card-works'>
                    {data.map((item, index) => (

                        <Link to={`/Details/${item.name}/`} >
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

