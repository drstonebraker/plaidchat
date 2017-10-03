export const modalStyle = {
  overlay: {
    backgroundColor: 'transparent',
  },
  content: {
    padding: 0,
    position: 'fixed',
    zIndex: 100,
    top: '5.7rem',
    left: '1rem',
    bottom: 'unset',
    right: 'unset',
    overflow: 'hidden',
    width: '28.5rem',
    border: 'none',
    borderRadius: '0.5rem',
    boxShadow: '0 0 0 0.1rem rgba(0, 0, 0, .1),' +
      ' 0 0.5rem 1.4rem rgba(10, 10, 10, .2)',

  }
}

export const modalStyleFull = {
  overlay: {
    backgroundColor: 'transparent',
  },
  content: {
    padding: 0,
    position: 'fixed',
    zIndex: 200,
    top: '0rem',
    left: '0rem',
    bottom: '0rem',
    right: '0rem',
    overflow: 'none',
    width: 'auto',
    border: 'none',
    borderRadius: '0rem',
    boxShadow: 'none',
  }
}
