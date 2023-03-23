import { CategoriesCardContainer, ImgName, LilOverlad, NameCard } from './categories-card.styles.jsx';

const  CategoriesCard = ({ product, title }) => {
  const { name, imageUrl } = product;

  const path = 'shop/' + title;
  
  return (
    <CategoriesCardContainer to={path}>
      <ImgName>
        <LilOverlad></LilOverlad>
        <img alt={`${name}`} src={imageUrl}/>
        <NameCard>{title.toUpperCase()}</NameCard>
      </ImgName>
    </CategoriesCardContainer>
  );
}

export default CategoriesCard;