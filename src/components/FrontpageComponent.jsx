import { Component } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SidebarComponent from './SidebarComponent';
import SecondRowComponent from './SecondRowComponent';
import ThirdRowComponent from './ThirdComponent';



class FrontPageComponent extends Component{
    state = {
        songs: [],
    }


    fetchSongs = () => {
        fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=queen')
          .then((response) => {
            if (response.ok) {
              return response.json()
            } else {
              throw new Error('Errore nella ricezione dati dal server')
            }
          })
          .then((arrayOfSongs) => {
            console.log('Songs', arrayOfSongs.data)
            this.setState({
              songs: arrayOfSongs.data
            })
          })
          .catch((err) => {
            console.log(err)
          })
      }


      componentDidMount() {

        this.fetchSongs()
      }

      render() {
        return (
        <Container fluid className='text-white'>
            <Row className='bg-dark bg-gradient'>
            <SidebarComponent/>
            <Col>
            <div className='d-flex flex-row justify-content-evenly'><p>TRENDING</p><p>PODCAST</p><p>MOOD AND GENRES</p><p>NEW RELEASES</p><p>DISCOVER</p></div>
            <h2>Rock Classics</h2>
            <Row className='d-flex flex-row justify-content-evenly'>
                {
                    this.state.songs.slice(0, 4).map((song)=> {
                        console.log("Song2:", song)
                        return (
                                <Col md={2} lg={2} key={song.id}>
                                <div>
                                    <img src={song.album.cover} alt="Cover" width={150} height={150}/>
                                    <p className='fw-bold'>Track: {song.title} Artist: {song.artist.name} </p>
                                </div>

                            </Col>
                        )
                    })
                }

                  </Row>
                  <SecondRowComponent/>
                  <ThirdRowComponent/>
                </Col>
            </Row>
            </Container>

        )
    }
}

export default FrontPageComponent