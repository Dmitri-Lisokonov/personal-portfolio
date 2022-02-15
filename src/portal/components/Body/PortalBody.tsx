import PortalTable from "../PortalTable/PortalTable";
import "./PortalBody.css"

const PortalBody = () => {
    return (
        <div className="portal__body">
            <div className="portal__body__portal-table">
                <PortalTable />
            </div>
        </div>
    )
}

export default PortalBody;