import * as Styled from './styles';
import { ChevronLeft } from '@styled-icons/boxicons-solid/ChevronLeft';
import { ChevronRight } from '@styled-icons/boxicons-solid/ChevronRight';
import { Circle } from '@styled-icons/boxicons-solid/Circle';
import React, { useEffect, useRef } from 'react';
import slides from './mock';

export const Slider = () => {
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
    setVisibleSlide(1);
    createSlideClones();
    handleAutoPlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const transleteSlide = ({ position }) => {
    slideList.current.style.transform = 'translateX(' + position + 'px)';
    state.savedPoint = position;
    state.movement = 0;
  };

  function createSlideClones() {
    const firstSlide = slideItem.current[0].cloneNode(true);
    const lastSlide = slideItem.current[slides.length - 1].cloneNode(true);
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
    slides.map(
      (slideIndex) =>
        (controlItem.current[slideIndex.order].style.color = '#fff'),
    );
    controlItem.current[index].style.color = '#000';
  };

  const setVisibleSlide = (index: number) => {
    if (index > slides.length) index = 1;

    if (index <= 0) index = slides.length;

    slideList.current.style.transition = 'transform .5s';
    const slideWidth = slideItem.current[0].clientWidth;
    const windowWidth = document.body.clientWidth;
    const margin = (windowWidth - slideWidth) / 2;
    activeControlButton(index - 1);
    transleteSlide({ position: margin - index * slideWidth });
    state.currentSlide = index;
  };

  const handleMouseDown = (event, index: number) => {
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
    }, 3000);
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
      <Styled.Wrapper
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Styled.GoLeft
          onClick={() => {
            handlePreviousSlide();
          }}
        >
          <ChevronLeft />
        </Styled.GoLeft>

        <Styled.GoRight
          onClick={() => {
            handleNextSlide();
          }}
        >
          <ChevronRight />
        </Styled.GoRight>

        <Styled.List ref={slideList}>
          {slides.map((slide) => (
            <Styled.Slide
              onDragStart={(event) => {
                event.preventDefault();
              }}
              ref={(ref) => {
                slideItem.current.push(ref);
              }}
              key={slide.order}
              onMouseDown={function (event) {
                handleMouseDown(event, slide.order);
              }}
              onMouseUp={handleMouseUp}
              onTouchStart={function (event) {
                handleOnTouchStart(event, slide.order);
              }}
              onTouchEnd={handleOnTouchEnd}
            >
              <Styled.Image src={slide.src} alt="Zelda" />
              <Styled.Description>
                <h3>
                  {slide.order}
                  {slide.title}
                </h3>
                <p>{slide.destription}</p>
              </Styled.Description>
            </Styled.Slide>
          ))}
        </Styled.List>
      </Styled.Wrapper>
      <Styled.Control>
        {slides.map((slide) => (
          <Styled.Button
            ref={(ref) => {
              controlItem.current.push(ref);
            }}
            key={slide.order}
            onClick={() => {
              setVisibleSlide(slide.order + 1);
            }}
          >
            <Circle />
          </Styled.Button>
        ))}
      </Styled.Control>
    </>
  );
};
