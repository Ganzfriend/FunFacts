const styles = () => (
  {

    main: {
      background: "url('https://data9000.s3-us-west-1.amazonaws.com/hostfaces.png') round fixed center",
      backgroundSize: 30,
      height: '100vh',
    },
    container: {
      padding: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '90vh',
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
      gridGap: 50
    },
    stepper: {
      width: 300
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
      gridGap: 50,
      marginTop: 50,
      width: '50vw'
    },
    faceBtn: {
      height: '50%',
      marginBottom: 20
    },
    img: {
      height: 255,
      maxWidth: '50vw',
      display: 'block'
    },
    selected: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 100
    }
  }
);

export default styles;