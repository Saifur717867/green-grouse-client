import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";


const BidRequestCard = ({ bids }) => {

    const { user } = useContext(AuthContext);
    const userEmail = user.email;
    console.log(userEmail)

    const { Title, email, seller, price, clientDeadline } = bids;
    console.log(bids)
    const sellerEmail = bids.seller;
    console.log(sellerEmail)

    const showTable = userEmail == sellerEmail;
    console.log(showTable)

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
                        <th><button className="bg-green-600 py-3 px-6 rounded-lg text-white">Confirm</button></th>
                        <th><button className="bg-red-600 py-3 px-6 rounded-lg text-white">Reject</button></th>
                    </tr>
                    :
                    " "
            }
        </>
    );
};

export default BidRequestCard;