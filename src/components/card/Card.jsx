import { Link } from "react-router-dom";
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import ChatIcon from '@mui/icons-material/Chat';
import SaveIcon from '@mui/icons-material/FavoriteBorder';
import "./card.css";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <BedIcon/>
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <BathtubIcon/>
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <SaveIcon/>
            </div>
            <div className="icon">
              <ChatIcon/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;