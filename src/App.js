import './App.css';
import pokedex from './helpers/pokemon'
import List from './components/list/List';
import { Container } from '@mui/material';

function App() {
  return (
    <Container>
      <List pokedex={pokedex.slice(0,10) }/>
    </Container>
        
    
  );
}

export default App;
