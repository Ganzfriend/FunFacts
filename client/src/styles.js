const styles = () => (
  {

    main: {
      background: "url('https://data9000.s3-us-west-1.amazonaws.com/hostfaces.png') round fixed center",
      backgroundSize: 30,
      height: '100vh',
    },
    container: {
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
      margin: '20px 0'
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