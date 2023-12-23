import MainInput from "../input/input.component";
import "./serviceItem.styles.css";

const ServiceInput = () => {
  return (
    <div className="serviceItem-container">
      <MainInput label={"Pavadinimas"} />
      <MainInput label={"Matas"} />
      <MainInput label={"Kiekis"} />
      <MainInput label={"Kaina"} />
      <MainInput label={"Viso"} />
    </div>
  );
};

export default ServiceInput;
