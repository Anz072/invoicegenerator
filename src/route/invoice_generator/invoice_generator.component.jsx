import BuyerFields from "../../components/buyer/buyer.component";
import DateInput from "../../components/date_input/date_input.component";
import DropdownExample from "../../components/dropdown/dropdown.component";
import MainInput from "../../components/input/input.component";
import SellerFields from "../../components/seller/seller.component";
import ServicesFields from "../../components/services/services.component";
import "./invoice_generator.styles.css";

function InvoiceGenerator() {
  return (
    <div className="dashboard-main">
      <div className="invoice_gen_container">
        <div className="dashboard_block1">
          <div className="block1_left">
            <div>
              <p>Invoice type</p>
              <DropdownExample />
            </div>
            <div>
              <p>Series</p>
              <MainInput />
            </div>
            <div>
              <p>Identification</p>
              <MainInput />
            </div>
          </div>
          <div className="block1_right">
            <div>
              <p>Creation Date</p>
              <DateInput />
            </div>
            <div>
              <p>Payment Date</p>
              <DateInput />
            </div>
          </div>
        </div>
        <div className="invoice_gen_divider"></div>
        <div className="dashboard_block2">
          <SellerFields />
          <BuyerFields />
        </div>
        <div className="invoice_gen_divider"></div>
        <div>
          <ServicesFields />
        </div>
      </div>
    </div>
  );
}

export default InvoiceGenerator;
