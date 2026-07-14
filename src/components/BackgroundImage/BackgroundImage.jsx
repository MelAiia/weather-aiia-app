import "./BackgroundImage.css";

function BackgroundImage({ image }) {
  return (
    <div
      key={image}
      className="background-image fade"
      style={{
        backgroundImage: `url(${image})`,
      }}
    />
  );
}

export default BackgroundImage;
