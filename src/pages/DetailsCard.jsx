import { useParams } from "react-router-dom"

import worksDetails from "../data";

export default function DetailsCard() {

    const data = { worksDetails };
    const { name } = useParams();

    console.log(data);
    return (
        <>

            <div className="wrapper">
                <div className="container">
                    {data
                        .filter((item) => (item.name === name)
                            .map((item, index) => (
                                <div className="detail" key={index}>
                                    <p>{item.date}</p>
                                </div>
                            )))
                    }
                </div>
            </div>
        </>
    )
}