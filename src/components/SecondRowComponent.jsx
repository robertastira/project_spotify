import { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class SecondRowComponent extends Component{
    state = {
        songs1: [],
    }

    fetchSongs1 = () => {
        fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=subsonica')
          .then((response) => {
            if (response.ok) {
              return response.json()
            } else {
              throw new Error('Errore nella ricezione dati dal server')
            }
          })
          .then((arrayOfSongs1) => {
            console.log('Canzoni Subsonica', arrayOfSongs1.data)
            this.setState({
              songs1: arrayOfSongs1.data
            })
          })
          .catch((err) => {
            console.log(err)
          })
      }

      
      componentDidMount() {

        this.fetchSongs1()
      }

      render() {
        return (
            <>
            <h2>Italian Rock</h2>
            <Row className='d-flex flex-row justify-content-evenly'>
                {
                    this.state.songs1.slice(0, 4).map((song1)=> {
                        console.log("Song1:", song1)
                        return (
                                <Col md={2} lg={2} key={song1.id}>
                                <div>
                                    <img src={song1.album.cover} alt="Cover" width={150} height={150}/>
                                    <p className='fw-bold'>Track: {song1.title} Artist: {song1.artist.name} </p>
                                </div>

                            </Col>
                        )
                    })
                }
                  </Row>
                  </>
        )
    }
}

export default SecondRowComponent