import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import { Spinner, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CardAlbum() {
  const { albuns } = useContext(AppContext);
  return (
    <section style={{ marginTop: '20px'}}>
      {albuns.length > 0 ? (
        <Row xs={1} md={5} className="mb-4 justify-content-md-center">
          {albuns.map((value, idx) => (
          <Link key={idx} to={`/album/${value.collectionId}`} style={{ textDecoration: 'none', textTransform: 'none', color: 'black' }}>
            <Card className="card" bg="light" style={{ margin: '10px' }}>
              <Card.Img
                variant="top"
                src={value.artworkUrl100}
              />
              <Card.Title style={{ fontSize: "12px", textAlign: 'center', marginTop: '5px' }}>
                {value.collectionName}
              </Card.Title>
              
              <Card.Footer style={{ alignSelf: 'border'}}>
                <Card.Text style={{ textAlign: "center", fontWeight: "600" }}>{value.artistName}</Card.Text>
              </Card.Footer>
            </Card>
          </Link>
          ))}
        </Row>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "61.05rem",
            height: "80vh",
          }}
        >
          <Spinner style={{ margin: "auto" }} animation="border" />
        </div>
      )}
    </section>
  )
}

export default CardAlbum;
