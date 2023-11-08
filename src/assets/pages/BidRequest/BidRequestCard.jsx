import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";


const BidRequestCard = ({ bids, handleAccept }) => {

    const { user } = useContext(AuthContext);
    const userEmail = user.email;
    const { _id, Title, email, seller, price, clientDeadline, status } = bids;
    const sellerEmail = bids.seller;
    const showTable = userEmail == sellerEmail;

    return (
        <>
            {
                showTable
                    ?
                    <tr>
                        <td>{Title}</td>
                        <td>{email}</td>
                        <td>{clientDeadline}</td>
                        <td>$ {price}.00</td>
                        {

                            status == 'confirm' ? <th><button className="bg-orange-600 py-3 px-6 rounded-lg text-white">in Progress</button></th>
                             :
                        <td><button className="bg-orange-600 py-3 px-6 rounded-lg text-white">Pending</button></td>
                        }
                        {
                        status == 'confirm' ? "" :
                        <div>
                            <th><button onClick={() => handleAccept(_id)} className="bg-green-600 py-3 px-6 rounded-lg text-white">Accept</button></th>
                            <th><button className="bg-red-600 py-3 px-6 rounded-lg text-white">Reject</button></th>
                        </div>
                        }
                    </tr>
                    :
                    " "
            }
        </>
    );
};

export default BidRequestCard;