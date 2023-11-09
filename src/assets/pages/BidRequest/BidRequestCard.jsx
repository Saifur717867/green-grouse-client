import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";


const BidRequestCard = ({ bids, handleAccept, handleReject, handleBidDelete }) => {

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
                        <button onClick={() => handleBidDelete(_id)} className="mt-3 bg-red-500 text-white w-[30px] h-[30px] rounded-full">X</button>
                        <td>{Title}</td>
                        <td>{email}</td>
                        <td>{clientDeadline}</td>
                        <td>$ {price}.00</td>
                        {
                            status == 'completed' ? <th><button className="bg-green-500 py-3 px-6 rounded-lg text-white -ml-4">Completed</button></th>
                                :
                                <>
                                    {
                                        status == 'confirm' ? <button className="bg-yellow-500 py-3 px-6 rounded-lg text-white mb-3">In Progress</button>
                                            :
                                            <>
                                                {
                                                    status == 'reject' ? <button className="bg-red-500 py-3 px-6 rounded-lg text-white mb-3">Canceled</button> :
                                                        <button className="bg-yellow-500 py-3 px-6 rounded-lg text-white mb-3">Pending</button>
                                                }
                                            </>
                                    }
                                </>
                        }
                        {
                            status == 'confirm' || status == 'reject' || status == 'completed' ? "" :
                                <div className="inline-block">
                                    <th><button onClick={() => handleAccept(_id)} className="bg-green-600 py-3 px-6 rounded-lg text-white">Accept</button></th>
                                    <th><button onClick={() => handleReject(_id)} className="bg-red-600 py-3 px-6 rounded-lg text-white">Reject</button></th>
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