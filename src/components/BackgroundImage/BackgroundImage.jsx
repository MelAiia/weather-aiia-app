import "./BackgroundImage.css";

function BackgroundImage({ image, theme }) {
  return (
    <div
      key={image}
      className={`background-image fade ${theme}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    />
  );
}

export default BackgroundImage;
