import { useState } from "react";
import ServiceInput from "../serviceItem/serviceItem.component";
import "./services.styles.css";
import generateUID from "../../functions/randomIDgenerator";
import MainButton from "../button/button.component";

const ServicesFields = () => {
  const [serviceItems, setServiceItems] = useState([
    {
      id: generateUID(),
      Name: "",
      Lastname: "",
      Amount: "",
      Price: "",
      Total: "",
    },
  ]);

  const addServiceItem = () => {
    setServiceItems([
      ...serviceItems,
      {
        id: generateUID(),
        Name: "",
        Lastname: "",
        Amount: "",
        Price: "",
        Total: "",
      },
    ]);
  };

  const removeServiceItem = (id) => {
    setServiceItems((prev) => {
      const updatedItems = prev.filter((item) => item.id !== id);
      return updatedItems;
    });
  };

  return (
    <div className="services_contianer">
      <h4>Prekės / Paslaugos</h4>
      {serviceItems.map((item) => {
        return (
          <div key={item.id}>
            <ServiceInput />
            <button onClick={() => removeServiceItem(item.id)}>Delete</button>
          </div>
        );
      })}
      <button onClick={addServiceItem}>Add new Item</button>
      <MainButton content="Generate an Invoice" />
    </div>
  );
};

export default ServicesFields;
