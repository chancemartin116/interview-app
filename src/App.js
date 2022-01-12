import { Grommet, Box, Grid, ResponsiveContext } from 'grommet';

function App() {
  return (
    <Grommet plain full>
      <ResponsiveContext.Consumer>
        {size => size === "small" ? <LayoutForSmallScreens /> : <LayoutForLargerScreens />}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

const LayoutForSmallScreens = () => {
  return ( 
    <Grid
      fill={true}
      rows={['20%', '20%', '20%', '20%', '20%']}
      columns={['auto']}
      areas={[
        { name: 'header', start: [0, 0], end: [0, 0] },
        { name: 'nav', start: [0, 1], end: [0, 1] },
        { name: 'sidebar', start: [0, 2], end: [0, 2] },
        { name: 'content', start: [0, 3], end: [0, 3] },
        { name: 'footer', start: [0, 4], end: [0, 4]},
      ]}
    >
      {getLayoutComponents()}
    </Grid> 
  )
}

const LayoutForLargerScreens = () => {
  return (
    <Grid
      fill={true}
      rows={['20%', 'auto', '20%']}
      columns={['10%', 'auto', '10%']}
      areas={[
        { name: 'header', start: [0, 0], end: [2, 0] },
        { name: 'nav', start: [0, 1], end: [0, 2] },
        { name: 'content', start: [1, 1], end: [2, 2] },
        { name: 'footer', start: [1, 2], end: [2, 2]},
        { name: 'sidebar', start: [2, 1], end: [2, 1] },
      ]}
    >
      {getLayoutComponents()}
    </Grid>
  )
}

const getLayoutComponents = () => {
  return [
    <>
      <Box gridArea="header" background="blue">header</Box>
      <Box gridArea="nav" background="orange">nav</Box>
      <Box gridArea="sidebar" background="green">sidebar</Box>
      <Box gridArea="content" background="red">content</Box>
      <Box gridArea="footer" background="yellow">footer</Box>
    </>
  ]
}

export default App;
