import { Heading } from 'components/Heading';
import * as Styled from './styles';
import React, { useRef } from 'react';
import Link from 'next/link';

export type CategoryProps = {
  categories: [{ link: string; src: string; alt?: string; category: string }];
};
export const Category = ({ categories }: CategoryProps) => {
  const slideList = React.createRef<HTMLDivElement>();
  const categoryItem = useRef<(HTMLAnchorElement | null)[]>([]);
  let startingPoint = 0;
  let currentPoint = 0;
  let savedPoint = 0;
  let position = 0;

  const handleMouseDown = (event) => {
    startingPoint = event.clientX;
    currentPoint = startingPoint - savedPoint;
    slideList.current.style.transition = 'none';
    slideList.current.addEventListener('mousemove', handleMouseMove);
  };

  const handleMouseUp = () => {
    slideList.current.removeEventListener('mousemove', handleMouseMove);
    console.log('vv');
  };

  const handleMouseMove = (event) => {
    position = event.clientX - currentPoint;
    slideList.current.style.transform = 'translateX(' + position + 'px)';
    savedPoint = position;
  };

  return (
    <Styled.Container
      ref={slideList}
      onMouseDown={function (event) {
        handleMouseDown(event);
      }}
      onMouseUp={handleMouseUp}
      onDragStart={(event) => {
        event.preventDefault();
      }}
    >
      {categories.map((category) => (
        <Styled.Category key={category.alt}>
          <Link href={category.link} passHref>
            <Styled.Link
              target={'_self'}
              ref={(ref) => {
                categoryItem.current.push(ref);
              }}
            >
              <Styled.Image src={category.src} />
              <Styled.Description>
                <Heading as="h3" colorDark={true} size="small">
                  {category.category}
                </Heading>
              </Styled.Description>
            </Styled.Link>
          </Link>
        </Styled.Category>
      ))}
    </Styled.Container>
  );
};
