const Avatar = ({ url, className }) => {
  return (
    <img
      loading="lazy"
      src={url}
      alt="profile pic"
      className={`h-10 w-10 cursor-pointer rounded-full object-cover transition first-letter:
       duration-150 transform hover:scale-110
      ${className}`}
    />
  );
};

export default Avatar;
