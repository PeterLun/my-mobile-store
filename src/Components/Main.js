import { Link} from 'react-router-dom';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap'

export default function Main() {
  return (
    <div>

<>
  <Card className="my-2">

    <CardBody>
      <CardTitle tag="h5">
        Mobile City Mall
      </CardTitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
    </CardBody>
  </Card>
 
</>
  
    </div>
  );
}
