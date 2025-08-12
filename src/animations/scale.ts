const scale = {
  hidden: {
    scale: 0.95,
    opacity: 0,
    x: -40,
    y: 40,
    transformOrigin: 'center',
  },
  visible: {
    scale: 1,
    opacity: 0.8,
    x: 0,
    y: 0,
    transition: {
      x: { duration: 2.3, ease: 'easeOut' },
      y: { duration: 2.3, ease: 'easeOut' },
      scale: { duration: 2, ease: 'easeOut' },
      opacity: { duration: 3.5, ease: 'easeOut', delay: 1 },
    },
  },
}

export default scale
