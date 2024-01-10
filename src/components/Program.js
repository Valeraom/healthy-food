import React from "react"
import ContentLoader from "react-content-loader"
import { Link } from "react-router-dom";

function Program({ id, title, description, imageUrl, loading }) {


    return (
        <div>
            {loading ? <ContentLoader
                speed={2}
                width={152}
                height={187}
                viewBox="0 0 152 187"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="1" y="162" rx="5" ry="5" width="80" height="24" />
                <rect x="0" y="106" rx="5" ry="5" width="150" height="15" />
                <rect x="0" y="125" rx="5" ry="5" width="93" height="15" />
                <rect x="148" y="245" rx="0" ry="0" width="0" height="1" />
                <rect x="22" y="166" rx="0" ry="0" width="1" height="0" />
                <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
                <rect x="127" y="162" rx="5" ry="5" width="24" height="24" />
            </ContentLoader> :
                <div className="program">
                    <img width={220} height={142} src={imageUrl} alt="dish" />
                    <h5 className="flex">{title}</h5>
                    <p>{description}</p>
                    <Link to={`/${id}`} className="greenButton">Детальніше</Link>
                </div>}
        </div>
    );
}

export default Program;