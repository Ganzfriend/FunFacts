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
    triviaContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '80vh'
    },
    triviaSlides: {
      flexGrow: 1,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridGap: 150
    },
    stepper: {
      width: 200
    },
    facts: {
      padding: 30,
      width: '35vw'
    },
    fact: {
      padding: 10
    },
    faces: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: 100,
      marginTop: 50,
      width: '50vw'
    },
    img: {
      height: 255,
      display: 'block'
    },
  }
);

export default styles;