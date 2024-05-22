import '../scss/hero.scss';

export default function Hero() {
    return (
        <>
            <div className="contentTitleHero">
                <span className="titleHero">
                    Glimpse of the Lense
                </span>
                <span className="sHero">
                    Photography / Video creation
                </span>
            </div>

            <div className='hero-photo'>

                <div className='card' style={{ display: 'inline-flex', flexDirection: 'column', position: 'relative', width: '690px', height: '763px' }}>
                    <div className='details-card' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className='random style-details-card'>random</div>
                        <div className='index style-details-card'>[00]</div>
                    </div>
                    <div className='card-photo' style={{ height: 'inherit', width: 'inherit', backgroundColor: '#D2D2D2' }}>

                    </div>
                </div>
                <div className='card-2' style={{ display: 'inline-flex', flexDirection: 'column', position: 'relative', width: '690px', height: '763px' }}>
                    <div className='details-card' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className='random style-details-card'>random</div>
                        <div className='index style-details-card'>[00]</div>
                    </div>
                    <div className='card-photo' style={{ height: 'inherit', width: 'inherit', backgroundColor: '#D2D2D2' }}>

                    </div>
                </div>






            </div>




        </>
    )
}