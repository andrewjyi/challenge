const Album = ({ info, index }) => {
  const handleClick = () => {
    console.log("modal open");
    // open modal with all info?
  };

  return (
    <li onClick={() => handleClick}>
      <picture className="drop-shadow-xl">
        <img
          className="h-60 w-60 rounded"
          meta={info["im:name"].label}
          src={info["im:image"][2].label}
        />
      </picture>
      <div className="text-xs mt-2">
        <div className="font-semibold">{index}</div>
        <div className="font-light">{info["im:name"].label}</div>
        <div className="font-extralight">{info["im:artist"].label}</div>
      </div>
    </li>
  );
};

export default Album;
