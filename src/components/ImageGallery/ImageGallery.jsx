import Image from "../ImageCard/ImageCard";

const Images = ({ images }) => {
  return (
    <ul>
      {images.map((image) => (
        <div key={image.id}>
          <li>
            <Image image={image} />
          </li>
        </div>
      ))}
    </ul>
  );
};

export default Images;

// const ContactList = ({ contactUser, onDelete }) => {
//   return (
//     <ul className={css.list}>
//       {contactUser.map((item) => (
//         <li className={css.contact} key={nanoid()}>
//           <Contact contacts={item} onDelete={onDelete} />
//         </li>
//       ))}
//     </ul>
//   );
// };
