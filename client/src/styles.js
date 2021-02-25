const styles = () => (
  {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    triviaSlides: {
      flexGrow: 1,
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gridGap: 300
    },
    img: {
      height: 255,
      display: 'block',
    },
  }
);

export default styles;