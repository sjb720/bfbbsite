import React from 'react';
import axios from 'axios';
import PageLayout from '../components/PageLayout.js'
import { Button, InputGroup, FormControl, Container, Col, Row, Image, Table } from 'react-bootstrap'
import BACKEND_URL from '../components/backendurl.js'
import AddArea from '../components/AddArea.js';
import AddStrat from '../components/AddStrat.js';
import InformationContainer from '../components/InformationContainer.js'

const button_style = {
  width: "100%",
  marginTop: 20
}

export default class Index extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      authorized: false,
      username: "",
      password: "",
      token: "",
      levels: [],
      areas: [],
      strats: [],
    }
  }

  componentDidMount() {
    this.setState({ username: window.sessionStorage.getItem("username"), token: window.sessionStorage.getItem("token") },
      () => this.verify())

  }

  getData = (()=> {
    fetch(BACKEND_URL + 'bfbb-site/levels')
      .then(res => res.json())
      .then(data => {
        if (data.success == true)
          this.setState({ levels: data.info })
      });

    fetch(BACKEND_URL + 'bfbb-site/areas')
      .then(res => res.json())
      .then(data => {
        if (data.success == true)
          this.setState({ areas: data.info })
      });

    fetch(BACKEND_URL + 'bfbb-site/strats')
      .then(res => res.json())
      .then(data => {
        if (data.success == true)
          this.setState({ strats: data.info })
      });
  }).bind(this);

  verify() {
    let data = { username: this.state.username, token: this.state.token }

    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }


    fetch(BACKEND_URL + 'bfbb-site/verify', options)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({ authorized: true })
          this.getData()
          console.log("verified")
        } else {
          console.log(data.error)
        }
      });
  }

  login() {
    let data = { username: this.state.username, password: this.state.password }

    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }


    fetch(BACKEND_URL + 'bfbb-site/login', options)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({ authorized: true, token: data.token })

          window.sessionStorage.setItem("username", this.state.username)
          window.sessionStorage.setItem("token", data.token)

          this.getData()
        } else {
          console.log(data.error)
        }
      });
  }

  deleteStrat(strat_id){

    let data = { username: this.state.username, token: this.state.token, strat_id:strat_id }

    let options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }


    fetch(BACKEND_URL + 'bfbb-site/strats/delete', options)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.getData()
        } else {
          console.log(data.error)
        }
      });
  }

  deleteArea(area_id){

    let data = { username: this.state.username, token: this.state.token, area_id:area_id }

    let options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }


    fetch(BACKEND_URL + 'bfbb-site/areas/delete', options)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.getData()
        } else {
          console.log(data.error)
        }
      });
  }


  render() {
    return (
      <PageLayout>
        <title>&#128680;Admin Console&#128680;</title>


        <Container fluid style={{ textAlign: "Center" }}>

          {!this.state.authorized ?
            <InformationContainer>
              <h1>
                Prove you belong here.
              </h1>
              <FormControl
                onChange={(e) => this.setState({ username: e.target.value })}
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <FormControl
                onChange={(e) => this.setState({ password: e.target.value })}
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
              <Button onClick={() => this.login()}>Verify Me</Button>
            </InformationContainer>

            :
            <>
              <InformationContainer>
                Levels
                <Table variant="dark" striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Sock Count</th>
                      <th>Spatula Requirement</th>
                      <th>Secondary Character</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.levels.map(level =>
                      <tr>
                        <td>{level.name}</td>
                        <td>{level.description}</td>
                        <td>{level.sock_count}</td>
                        <td>{level.spatula_requirement}</td>
                        <td>{level.secondary_character}</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </InformationContainer>

              <InformationContainer>

                <AddArea getDataMethod={this.getData}></AddArea>

                Areas
                <Table variant="dark" striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Level</th>
                      <th>Name</th>
                      <th>Internal Name</th>
                      <th>Sock Count</th>
                      <th>Spatula Count</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.areas.map(area =>
                      <tr>
                        <td>{area.level}</td>
                        <td>{area.name}</td>
                        <td>{area.internal_name}</td>
                        <td>{area.sock_count}</td>
                        <td>{area.spatula_count}</td>
                        <td><Button variant="danger" onClick={()=>this.deleteArea(area._id)}>Delete</Button></td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </InformationContainer>


              <InformationContainer>
                <AddStrat getDataMethod={this.getData}></AddStrat>
                Strats
              <Table variant="dark" striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Methods</th>
                      <th>Area</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.strats.map(strat =>
                      <tr>
                        <td>{strat.name}</td>
                        <td style={{whiteSpace:"pre-wrap"}}>{strat.description}</td>
                        <td>Methods here</td>
                        <td>{strat.area}</td>
                        <td><Button variant="danger" onClick={()=>this.deleteStrat(strat._id)}>Delete</Button></td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </InformationContainer>
            </>
          }


        </Container>


        <style>{`body{
        background-image: url("police.png");
        background-repeat: no-repeat;
        background-attachment: fixed;
      }`}</style>
      </PageLayout >


    )
  }
}