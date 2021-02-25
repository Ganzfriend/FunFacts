const styles = () => (
  {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '20px 100px'
    },
    home: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 250
    },
    triviaSlides: {
      flexGrow: 1,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gridGap: 200
    },
    facts: {
      marginTop: 50,
      padding: 30,
      width: '30vw'
    },
    fact: {
      padding: 10
    },
    faces: {
      display: 'grid',
      gridTemplateColumns: '1fr auto auto',
      gridGap: 100,
      marginTop: 50
    },
    img: {
      height: 255,
      display: 'block'
    },
  }
);

export default styles;