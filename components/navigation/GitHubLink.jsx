import Link from 'next/link'
import {GitHubIcon} from './../icons/'
function GitHubLink() {
    return ( 
      <Link href="https://github.com/abraara/all-things-basketball.git"  passHref={true} target="_blank"> <GitHubIcon /></Link>
     );
}

export default GitHubLink;