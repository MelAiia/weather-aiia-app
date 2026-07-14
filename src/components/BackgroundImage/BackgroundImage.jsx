import "./BackgroundImage.css";

function BackgroundImage({ image }) {
  return (
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${image})`,
      }}
    />
  );
}

export default BackgroundImage;
