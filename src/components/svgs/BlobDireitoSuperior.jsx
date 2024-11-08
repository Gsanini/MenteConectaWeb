import imgLogo from "../../assets/blob.svg";

const Blob = () => {
  return (
    <div className="absolute -top-0 w-full z-[1]">
      <img
        src={imgLogo}
        alt="logoConecta"
        className="w-full opacity-90 pointer-events-none"
      />
    </div>
  );
};

export default Blob;
