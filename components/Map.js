import { Component } from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends Component {

  state = {
    viewport: {
      width: '100vw',
      height: '100vh',
      latitude: 38.89628315907695,
      longitude: -77.02367155674042,
      zoom: 11,
    },
    geojson: {}
  };

  componentDidMount() {
    const map = this.reactMap.getMap(); 

    map.on('load', () => {
      console.log("Starting to pull data!")
      this.pullNewData(0);
  })
    
  }

  pullNewData(chunk){

    console.log("pulling more data...");

    let url = 'http://192.168.86.34:3001/crash/coordinates/geojson?chunk=' + chunk;

      fetch(url)
      .then(res => res.json())
      .then(data => this.displayDataOnMap(data.data,chunk));

  }

  displayDataOnMap(geojson,chunk){

    const map = this.reactMap.getMap(); 

    // add initial chunk of data
    if(chunk == 0){

      this.state.geojson = geojson;

      map.addSource('crash-data',this.state.geojson)

      map.addLayer(
        {
        'id': 'crash-heat',
        'type': 'heatmap',
        'source': 'crash-data',
        });

      map.addLayer({
          'id': 'points',
          'type': 'circle',
          'source': 'crash-data',
          'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
            'base': 1.75,
            'stops': [
            [2, 2],
            [22, 22]
            ]
            }},
          'layout': {}});
    } else {

      if(geojson.data.features.length==0){
        console.log("All crashes loaded in!");
        return;
      }

      Array.prototype.push.apply(this.state.geojson.data.features, geojson.data.features);

      map.getSource('crash-data').setData(this.state.geojson.data)

      
    }

    this.pullNewData(chunk+1);

  }

  render() {
    return (
      <ReactMapGL
        ref={(reactMap) => this.reactMap = reactMap}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoieW9tYW40NyIsImEiOiJjampxM2g3YjUyMzFyM3ZvMXNjZ2R3d2ZtIn0.r0zXd8hAqa1haG3lkjlDwA"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      />
    );
  }
}

export default Map;
