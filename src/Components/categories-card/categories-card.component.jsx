import { useNavigate } from 'react-router-dom';
import { CategoriesCardContainer, ImgName, LilOverlad, NameCard } from './categories-card.styles.jsx';

const  CategoriesCard = ({ product }) => {
  const { imageUrl, title, route } = product;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);


  return (
    <CategoriesCardContainer to={route}>
      <ImgName>
        <LilOverlad></LilOverlad>
        <img alt={`${title}`} src={imageUrl}/>
        <NameCard>{title.toUpperCase()}</NameCard>
      </ImgName>
    </CategoriesCardContainer>
  );
}

export default CategoriesCard;