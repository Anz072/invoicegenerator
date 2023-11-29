
import './dashboard-table-item.styles.css';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';

const DashboardTableItem = ({client,id,creation,sum}) => {
    return (
        <div className="invoice-item">
          <div className="invoice-item-left">
            <span>{client}</span>
            <span>{id}</span>
            <span>{creation}</span>
            <span>{sum}</span>
          </div>
          <div className="invoice-item-right">
            <LinkOutlinedIcon/>
            <MailOutlineOutlinedIcon/>
            <CloudDownloadOutlinedIcon/>
          </div>
        </div>
      );
}

export default DashboardTableItem;



