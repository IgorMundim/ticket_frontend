import * as Styled from './styles';
import { Circle } from '@styled-icons/boxicons-solid/Circle';
import React, { useEffect, useRef } from 'react';
import { IconButton } from '../IconButton';
import { SlideImage } from '../SlideImage';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';
import Link from 'next/link';

export type SlideProps = {
  order: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  link: string;
};
export type BannerProps = {
  banners: SlideProps[];
};

export const Banner = ({ banners }: BannerProps) => {
  const slideList = React.createRef<HTMLDivElement>();
  const slideItem = useRef<(HTMLDivElement | null)[]>([]);
  const controlItem = useRef<(HTMLButtonElement | null)[]>([]);

  const state = {
    startingPoint: 0,
    savedPoint: 0,
    currentPoint: 0,
    movement: 0,
    currentSlide: 0,
  };
  let slideInterval;

  useEffect(() => {
    createSlideClones();
    setVisibleSlide(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const transleteSlide = ({ position }) => {
    slideList.current.style.transform = 'translateX(' + position + 'px)';
    state.savedPoint = position;
    state.movement = 0;
  };

  function createSlideClones() {
    const firstSlide = slideItem.current[0].cloneNode(true);
    const lastSlide = slideItem.current[banners.length - 1].cloneNode(true);
    slideList.current.append(firstSlide);
    slideList.current.prepend(lastSlide);
  }

  const handleNextSlide = () => {
    setVisibleSlide(1 + state.currentSlide);
  };

  const handlePreviousSlide = () => {
    setVisibleSlide(state.currentSlide - 1);
  };

  const activeControlButton = (index) => {
    banners.map(
      (slideIndex) =>
        (controlItem.current[slideIndex.order].style.color = '#c9c9cb'),
    );
    controlItem.current[index].style.color = '#000';
  };

  const setVisibleSlide = (index: number) => {
    try {
      slideList.current.style.transition = 'transform 0.3s';
      if (index > banners.length) {
        index = 1;
        slideList.current.style.transition = 'transform 0s';
      }

      if (index <= 0) {
        index = banners.length;
        slideList.current.style.transition = 'transform 0s';
      }
      const slideWidth = slideItem.current[0].clientWidth;
      const windowWidth = document.body.clientWidth;
      const margin = (windowWidth - slideWidth) / 2;
      activeControlButton(index - 1);
      transleteSlide({ position: margin - index * slideWidth });
      state.currentSlide = index;
    } catch (e) {
      clearInterval(slideInterval);
    }
  };

  const handleMouseDown = (event, index: number) => {
    event.preventDefault();

    state.currentSlide = index;
    state.startingPoint = event.clientX;
    state.currentPoint = state.startingPoint - state.savedPoint;
    slideList.current.style.transition = 'none';
    slideList.current.addEventListener('mousemove', handleMouseMove);
  };

  const handleMouseUp = () => {
    if (state.movement < -150) {
      setVisibleSlide(state.currentSlide + 2);
    } else if (state.movement > 150) {
      setVisibleSlide(state.currentSlide);
    } else {
      setVisibleSlide(state.currentSlide + 1);
    }
    state.movement = 0;
    slideList.current.removeEventListener('mousemove', handleMouseMove);
  };

  const handleMouseMove = (event) => {
    state.movement = event.clientX - state.startingPoint;
    const position = event.clientX - state.currentPoint;
    slideList.current.style.transform = 'translateX(' + position + 'px)';
    state.savedPoint = position;
  };

  const handleAutoPlay = () => {
    slideInterval = setInterval(function () {
      setVisibleSlide(state.currentSlide + 1);
    }, 2500);
  };

  const handleMouseEnter = () => {
    clearInterval(slideInterval);
  };

  const handleMouseLeave = () => {
    handleAutoPlay();
  };
  const handleOnTouchStart = (event, index: number) => {
    state.currentSlide = index;
    state.startingPoint = event.touches[0].clientX;
    state.currentPoint = state.startingPoint - state.savedPoint;
    slideList.current.style.transition = 'none';
    slideList.current.addEventListener('touchmove', handleOnTouchMove);
  };

  const handleOnTouchEnd = () => {
    if (state.movement < -50) {
      setVisibleSlide(state.currentSlide + 2);
    } else if (state.movement > 50) {
      setVisibleSlide(state.currentSlide);
    } else {
      setVisibleSlide(state.currentSlide + 1);
    }
    state.movement = 0;
    slideList.current.removeEventListener('touchmove', handleOnTouchMove);
  };

  const handleOnTouchMove = (event) => {
    state.movement = event.touches[0].clientX - state.startingPoint;
    const position = event.touches[0].clientX - state.currentPoint;
    slideList.current.style.transform = 'translateX(' + position + 'px)';
    state.savedPoint = position;
  };
  return (
    <>
      {handleAutoPlay()}
      <Styled.Wrapper
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Styled.GoLeft>
          <IconButton
            colorDark={false}
            icon={'chevronLeft'}
            size={'xlarge'}
            onClick={() => {
              handlePreviousSlide();
            }}
          />
        </Styled.GoLeft>

        <Styled.GoRight>
          <IconButton
            colorDark={false}
            icon={'chevromRight'}
            size={'xlarge'}
            onClick={() => {
              handleNextSlide();
            }}
          />
        </Styled.GoRight>
        <Styled.List ref={slideList}>
          {banners.map((slide) => (
            <Styled.Slide
              onDragStart={(event) => {
                event.preventDefault();
              }}
              ref={(ref) => {
                slideItem.current.push(ref);
              }}
              key={slide.order}
              onMouseUp={handleMouseUp}
              onMouseDown={function (event) {
                handleMouseDown(event, slide.order);
              }}
              onTouchStart={function (event) {
                handleOnTouchStart(event, slide.order);
              }}
              onTouchEnd={handleOnTouchEnd}
            >
              <SlideImage src={slide.src} alt={slide.alt} />
              <Link href="/">
                <a target={'_self'}>
                  <Styled.Description>
                    <Heading
                      as={'h3'}
                      colorDark={false}
                      size={'xxlarge'}
                      uppercase={true}
                    >
                      {slide.title}
                    </Heading>
                    <Paragraph colorDark={false} size={'small'}>
                      {slide.description}
                    </Paragraph>
                  </Styled.Description>
                </a>
              </Link>
            </Styled.Slide>
          ))}
        </Styled.List>
      </Styled.Wrapper>
      <Styled.Control>
        {banners.map((slide) => (
          <Styled.Button
            ref={(ref) => {
              controlItem.current.push(ref);
            }}
            key={slide.order}
            onClick={() => {
              setVisibleSlide(slide.order + 1);
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Circle />
          </Styled.Button>
        ))}
      </Styled.Control>
    </>
  );
};
