import { banners } from "../../utils/exportImg";

export const Banner = () => {
  return (
    <>
      <div className="cabecalho-banner">
        <img src={banners.banner} alt="Banner da oficina off road garage" />
      </div>
    </>
  );
};
