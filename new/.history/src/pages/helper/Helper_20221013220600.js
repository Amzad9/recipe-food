export const slideOption={
    type: 'loop',
    gap: '1rem',
    autoplay: true,
    pauseOnHover: false,
    resetProgress: true,
    lazyLoad: true,
    speed:400,
    perPage: 4,
    breakpoints: {
    767: {
      perPage: 2,
    },
    576: {
      perPage: 1,
    },
  }
}