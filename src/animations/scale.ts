const scale = {
  hidden: {
    scale: 0.3,
    opacity: 0,
    transformOrigin: 'center',
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

export default scale
