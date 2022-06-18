export const Button = ({ textButtonn, ...rootDOMAttributes }) => {
  // {textButtonn, action}
  return (
    <button className="btn-profile" {...rootDOMAttributes}>
      {textButtonn}
    </button>
  );
};
