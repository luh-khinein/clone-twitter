import useEmblaCarousel from 'embla-carousel-react'
import React, { useCallback, useEffect, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import s from '../../styles/carousel.module.css'

interface ButtonProps {
  showButton: boolean
  enabled: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const PrevButton: React.FC<ButtonProps> = ({ showButton, enabled, onClick }) => (
  <button
    className='absolute top-1/2 left-2 disabled:hidden p-2 bg-black rounded-full hover:bg-opacity-75 duration-200'
    style={{
      opacity: showButton
        ? 1
        : 0
    }}
    onClick={onClick}
    disabled={!enabled}
  >
    <BsArrowLeft className='text-white' />
  </button>
)

const NextButton: React.FC<ButtonProps> = ({ showButton, enabled, onClick }) => (
  <button
    className='absolute top-1/2 right-2 disabled:hidden p-2 bg-black rounded-full hover:bg-opacity-75 duration-200'
    style={{
      opacity: showButton
        ? 1
        : 0
    }}
    onClick={onClick}
    disabled={!enabled}
  >
    <BsArrowRight className='text-white' />
  </button>
)

interface Props {
  children: any
}

const Carousel: React.FC<Props> = ({ children }) => {
  const [viewportRef, emblaApi] = useEmblaCarousel({
    draggable: false,
    align: 'start',
  })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [showButton, setShowButton] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const handleShowButton = useCallback(() => {
    setShowButton(!showButton)
  }, [showButton])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div
      onMouseEnter={handleShowButton}
      onMouseLeave={handleShowButton}
      className='relative px-3 w-timeline'
    >
      <div ref={viewportRef} className='overflow-hidden w-full'>
        <div className={`flex ${s.container}`}>
          {children}
        </div>
      </div>
      <PrevButton
        showButton={showButton}
        onClick={scrollPrev}
        enabled={prevBtnEnabled}
      />
      <NextButton
        showButton={showButton}
        onClick={scrollNext}
        enabled={nextBtnEnabled}
      />
    </div>
  )
}

export default Carousel
