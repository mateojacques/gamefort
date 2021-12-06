import { gameBox } from "./gameBox.module.css";

const GameBox = ({ title, thumbnail, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`${gameBox} col-12 d-flex align-items-end px-5 py-3`}
      style={{ background: `url(${thumbnail})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
    > </a>
  );
};

export default GameBox;
