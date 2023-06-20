import "./index.scss"
import searchlogo from "../../assets/search.png"
import profileLogo from "../../assets/profile.png"
import favoriteLogo from "../../assets/heart.png"

const Search = () => {
    return (
    <div className="search">
        <div className='search__input-container'>
            <img 
            src={searchlogo} 
            alt="" 
            className='search__search-logo'
            />
            <input 
            type="text"
            placeholder='Search'
            />
            <div className="search__icons">
                <img src={profileLogo} alt="profile Logo" />
                <img src={favoriteLogo} alt="favorite Logo" />
            </div>
        </div>

    </div>
)
}

export default Search