import { useContext } from 'react';
import './directory.styles.scss';
import CategoriesCard from '../../Components/categories-card/categories-card.component';
import { CategoriesContext } from '../../contexts/categories.context';


const  Directory = () => {
    const { categoriesMap } = useContext(CategoriesContext)

    return (
      <div className='directory-container'>
        {Object.keys(categoriesMap).map((title) => (
          <CategoriesCard key={title} product={categoriesMap[title][0]} title={title} />
        ))}
      </div>
    )
}

export default Directory;