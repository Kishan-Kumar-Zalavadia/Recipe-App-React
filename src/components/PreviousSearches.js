import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

export default function PreviousSearches({setSearch}){
    const searches = ['pizza', 'burger', 'cookies', 'juice', 'biriyani', 'salad', 'ice cream', 'lasagna', 'pudding', 'soup'] 


    const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Searching for ${query}...`);
      setSearch(query);
    };
  
    const handleInputChange = (event) => {
      setQuery(event.target.value);
    };

    return (
        <div className="previous-searches section">
            <h2>Previous Searches</h2>
            <div className="previous-searches-container">
                { searches.map((search, index) => (<div key={index} style={{animationDelay: index * .1 + "s"}} className="search-item">
                    {search}
                </div>)) }
            </div>
            <div className="search-box">
                {/* <input type="text" placeholder="Search ..." />
                <button className="btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button> */}
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search ..." value={query} onChange={handleInputChange} />
                    <button className="btn" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                </form>
            </div>
        </div>
    )
}