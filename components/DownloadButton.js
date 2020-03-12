import Link from 'next/link';
import { dlButton } from './buttons.module.css'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';


const DownloadButton = (props) => (
    <Link href={props.link}>
      <button className={dlButton}>
      {props.children}
      </button>
    </Link>
);

export default DownloadButton;
