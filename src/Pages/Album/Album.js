import React ,{ useState, useEffect } from 'react';
import getMusics from '../../Services/musicsAPI';
// import AppContext from '../../Context/AppContext';
import Header from '../../Components/Header/Header';
import { Container, Spinner, Image } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import './Album.css';

function Album() {
  const { id } = useParams();
  const [musics, setMusics] = useState({});

  useEffect(() => {
    getMusics(id).then((data) => {
     setMusics(data);
     console.log(data);
    });
  }, [id])

  return (
    <Container>
      <Header n="1"/>
      <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px', flexWrap: 'wrap'}}>
        <div className="imageAlbum">
          {musics.length > 1 ? (
            <Image src={musics[0].artworkUrl100} alt="artista" fluid />
          ) : null}
        </div>

        <div className="conatinerMusics">
        {musics.length > 1 ? (
          musics.map((value, index) => (
            <section key={index}>
                <audio data-testid="audio-component" src={ value.previewUrl } controls>
                  <track kind="captions" />
                    O seu navegador não suporta o elemento <code>audio</code>.
                </audio>
              </section>
            ))
          ) : <Spinner />}
        </div>
      </section>
    </Container>
  )
}

export default Album;
