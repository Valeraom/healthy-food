import React from 'react';
import Program from '../components/Program';
import { AppContext } from '../App';

function Programs({ searchInput, setSearchInput, onChangeSearchInput, isLoading}) {

    const {programs} = React.useContext(AppContext);

    const renderItems = () => {
        const filteredItems = programs.filter((item) => item.title.toLowerCase().includes(searchInput.toLowerCase()));

        return programs.map((item, index) => (
            <Program
                key={index}
                loading={isLoading}
                {...item}
            />
        ));
    };

    return (<div>
        <div className="d-flex justify-between mb-40 align-center">
            <h3>{searchInput ? `Пошук за запитом "${searchInput}"` : 'Програми'}</h3>
            <div className="search-block d-flex">
                <img src="img/search.svg" alt="search" />
                {searchInput && <img className="remove-btn" src="img/remove-btn.svg" alt="remove-btn" onClick={() => setSearchInput('')} />}
                <input type="text" placeholder="Пошук..." value={searchInput} onChange={(event) => onChangeSearchInput(event)} />
            </div>
        </div>
        <div className="d-flex flex-wrap">
            {
                renderItems()
            }
        </div>
    </div>
    )
}

export default Programs;