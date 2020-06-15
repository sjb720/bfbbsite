import { Button} from 'react-bootstrap';
import React from 'react';

class VideoThumbnail extends React.Component {

    constructor(props) {
        super(props);
    }

    selectVideo(){
        this.props.changeVideo("https://www.youtube.com/watch?v=" + this.props.videoId)
    }

    render() {

        const thumbnail = this.props.thumbnail;

    return(
    <input type="button" onClick={()=>this.selectVideo()}
    style={{background:`url('`+thumbnail+`') center no-repeat`, height:180, width:320, border:0,display:"inline-block"}}></input>
    );
  }
}
export default VideoThumbnail;
//{this.props.title} {this.props.videoId}