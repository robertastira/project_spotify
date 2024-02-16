import { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



class ThirdRowComponent extends Component{
    state = {
        songs2: [],
    }

    fetchSongs3 = () => {
        fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem')
          .then((response) => {
            if (response.ok) {
              return response.json()
            } else {
              throw new Error('Errore nella ricezione dati dal server')
            }
          })
          .then((arrayOfSongs3) => {
            console.log('Canzoni Metallica', arrayOfSongs3.data)
            this.setState({
              songs2: arrayOfSongs3.data
            })
          })
          .catch((err) => {
            console.log(err)
          })
      }

      
      componentDidMount() {

        this.fetchSongs3()
      }

      render() {
        return (
            <>
            <h2 className='ms-4'>Rap</h2>
            <Row className='d-flex flex-row justify-content-evenly mt-4'>
                {
                    this.state.songs2.slice(0, 4).map((song2)=> {
                        console.log("Metallica", song2)
                        return (
                                <Col md={2} lg={2} key={song2.id}>
                                <div>
                                    <img src={song2.album.cover} alt="Cover" width={150} height={150}/>
                                    <p className='fw-bold'>Track: {song2.title} Artist: {song2.artist.name} </p>
                                </div>
                                <div className='text-center'><Button variant="outline-light">Play</Button></div>

                            </Col>
                        )
                    })
                }
                  </Row>
                  </>
        )
    }
}

export default ThirdRowComponent