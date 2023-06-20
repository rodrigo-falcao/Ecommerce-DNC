import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import './index.scss'
import Search from "../../components/Search/Search"
import ProductsCard from '../../components/ProductsCard/ProductsCard'

const Home = ({ data }) => {
    return (
        <div className='home'>
            <HeaderMenu/>
            <Search/>
            <div className="home__products">
                {data.map((products) => (
                    <ProductsCard key={products.id} data={products}/>
                ))}
            </div>   
        </div>
    )
}

export default Home