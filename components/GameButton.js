import Link from 'next/link';
import { gameButton } from './buttons.module.css'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

const imageStyle = {
  width:'100%'
};

const GameButton = (props) => (
    <Link href={props.link}>
      <button className={gameButton} style={{}}>
        <img style={imageStyle} src={props.banner}/>
        <br></br>
      </button>
    </Link>
);

export default GameButton;
