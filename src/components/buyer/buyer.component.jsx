import { useState } from "react";
import MainDropdown from "../dropdown/dropdown.component";
import MainInput from "../input/input.component";
import "./buyer.styles.css";

const BuyerFields = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="buyer_contianer">
      <h4>Buyer</h4>
      <MainDropdown
        label={"Tipas"}
        options={["Company", "Person"]}
        holder={selectedOption}
        stateFunction={setSelectedOption}
      />

      {selectedOption === "Company" && (
        <>
          <MainInput label={"Įmonės pavadinimas"} />
          <MainInput label={"Įmonės kodas"} />
        </>
      )}
      {selectedOption === "Person" && (
        <>
          <div className="buyer_first_container">
            <MainInput label={"Vardas"} />
            <MainInput label={"Pavardė"} />
          </div>
          <MainInput label={"IV pažymos nr."} />
        </>
      )}
      <MainInput label={"PVM mokėtojo kodas"} />
      <MainInput label={"Adresas"} />
      <MainInput label={"El. paštas"} />
      <MainInput label={"Tel. nr."} />
    </div>
  );
};

export default BuyerFields;
