import { FC } from 'react';
import { CategoriesCardContainer, ImgName, LilOverlad, NameCard } from './categories-card.styles';
import { DirectoryCategory } from '../directory/directory.component';

type CategoriesCardProps = {
  category: DirectoryCategory;
}

const  CategoriesCard: FC<CategoriesCardProps> = ({ category }) => {
  const { imageUrl, title, route } = category;

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