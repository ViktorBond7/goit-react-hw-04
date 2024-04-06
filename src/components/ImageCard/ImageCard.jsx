import css from "./ImageCard.module.css";
const Image = ({ image }) => {
  return (
    <>
      <div className={css.container}>
        <img
          className={css.galleryImage}
          src={image.urls.small}
          alt={image.alt_description}
        />
      </div>
      {/* <div className={css.description}>
        <p>
          <b>Likes</b>${image.likes}
        </p>
        <p>
          <b>${image.alt_description}</b>
        </p>
      </div> */}
    </>
  );
};
export default Image;
