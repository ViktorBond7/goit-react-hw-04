const Image = ({ image }) => {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
      <p>
        <b>Likes</b>${image.likes}
      </p>
      <p>
        <b>Views</b>${image.alt_description}
      </p>
    </div>
  );
};
export default Image;
