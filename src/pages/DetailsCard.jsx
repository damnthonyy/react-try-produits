import { useParams } from "react-router-dom"

import worksDetails from "../data";

export default function DetailsCard() {

    /*  const data = { worksDetails }; */
    const { name } = useParams();

    const detailFilter = worksDetails.filter((item) => (item.name === name));
    console.log();

    const item = worksDetails.find(item => item.name === name)
    return (
        <>

            <div className="wrapper" style={{ marginTop: '30vh' }}>
                <div className="container">
                    {detailFilter
                        .map((item, index) => (
                            <div className="detail" key={index}>
                                <p>{item.details.synopsis}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}