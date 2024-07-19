import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Home = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" paragraph>
        Hi, I am Anna, a software developer with experience in JavaScript.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Typography variant="body1" paragraph>
        - JavaScript<br />
        - React<br />
        - Redux<br />
        - HTML5/CSS3<br />
        - and more...
      </Typography>
    </Container>
  );
};

export default Home;
