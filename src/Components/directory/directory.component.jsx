import { useSelector } from 'react-redux';
import './directory.styles.scss';
import CategoriesCard from '../../Components/categories-card/categories-card.component';
import { selectCartItems } from '../../store/cart/cart.selector';


const  Directory = () => {
    const { categories } = useSelector(selectCartItems)

    return (
      <div className='directory-container'>
        {Object.keys(categories).map((title) => (
          <CategoriesCard key={title} product={categories[title][0]} title={title} />
        ))}
      </div>
    )
}

export default Directory;