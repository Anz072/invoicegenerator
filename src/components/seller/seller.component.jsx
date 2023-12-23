import MainInput from "../input/input.component";
import "./seller.styles.css";

const SellerFields = () => {
  return (
    <div className="seller_contianer">
      <h4>Seller</h4>
      <div className="seller_first_container">
        <MainInput label={"Vardas"} />
        <MainInput label={"Pavardė"} />
      </div>
      <MainInput label={"IV pažymos nr."} />
      <MainInput label={"PVM mokėtojo kodas"} />
      <MainInput label={"Adresas"} />
      <MainInput label={"El. paštas"} />
      <MainInput label={"Tel. nr."} />
    </div>
  );
};

export default SellerFields;
