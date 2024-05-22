
import worksDetails from '../data.js';

import '../scss/card.scss';




export default function Card() {

    return (
        <>
            {
                worksDetails.map((work) => {
                    return (
                        <div className='card-content' style={{ display: "flex" }} >
                            <div key={work.id} className='card-works' style={{ display: "flex", flexDirection: "column", alignItems: 'flex-start', gap: '20px' }}>
                                <div className="card-img-profil" style={{ position: "relative", width: "572px", height: "558px", overflow: "hidden" }}>
                                    <img src={work.imgProfilUrl} alt={work.name} className="img-profile" style={{
                                        position: 'absolute',
                                        top: '0',
                                        left: '0',
                                        width: '100%', height: '100%'
                                    }} />
                                </div>

                                <div className='card-details' style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: 'flex-start',
                                    gap: '4px', padding: '10px 0px'
                                }}>
                                    <h1 className='name-projet' style={{ fontSize: "20px" }}> {work.name}</h1>
                                    <p className='date-projet' style={{ fontSize: "16px" }}> {work.date}</p>
                                </div>

                            </div>
                        </div>



                    );

                })
            }

        </>
    )

}

