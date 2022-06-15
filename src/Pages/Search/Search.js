import React, { useState, useContext } from 'react';
import Header from '../../Components/Header/Header';
import CardAlbum from '../../Components/CardAlbum/CardAlbum';
import { Form, Container, Button } from 'react-bootstrap';
import searchAlbumsAPI from '../../Services/searchAlbumsAPI';
import AppContext from '../../Context/AppContext';

function Search() {
  const { setAlbuns } = useContext(AppContext);
  const [searchName , setSearchName] = useState('');
  
  function handleChange({ target }) {
    const { value } = target;
    setSearchName(value);
  }
 
  function searchAlbuns(value) {
    setAlbuns('')
    searchAlbumsAPI(value).then((data) => {
      setAlbuns(data)
    });
  }

  return(
    <Container>
      <Header n="1"/>
      <section>
        <Form style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', }}>
          <Form.Control placeholder="Nome do artista" type="text"   onChange={handleChange} style={{ width: '50%', marginRight: '10px'}}/>
          <Button variant="dark" type="reset" onClick={() => searchAlbuns(searchName)}>
            Procurar
          </Button>
        </Form>
      </section>
      <section>
        <CardAlbum />
      </section>
    </Container>
  )
}

export default Search;
