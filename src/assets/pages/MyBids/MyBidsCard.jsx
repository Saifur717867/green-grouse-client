

const MyBidsCard = ({ bid, handleComplete }) => {
    const { _id, Title, email, price, seller, clientDeadline, status, done } = bid;
    return (

        <tr>
            <td>{Title}</td>
            <td>{seller}</td>
            <td>{clientDeadline}</td>
            <td>$ {price}.00</td>
            <>
                {
                    status === 'confirm' ? 
                    <>
                        {
                            done === 'complete' ? <>
                            <th><button className="bg-green-600 py-3 px-6 rounded-lg text-white">Completed</button></th>
                            </> : ''
                             
                        }
                        <>
                         <th><button className="bg-orange-600 py-3 px-6 rounded-lg text-white">in Process</button></th>
                            <th><button onClick={() => handleComplete(_id)} className="bg-green-600 py-3 px-6 rounded-lg text-white">Complete</button></th>
                         </>
                    </>
                        :
                        <> {
                            done === 'complete' ? '' : <>
                            <th><button className="bg-orange-600 py-3 px-6 rounded-lg text-white">Pending</button></th>
                            <th><button className="bg-green-300 py-3 px-6 rounded-lg text-white disabled cursor-not-allowed">Complete</button></th>
                            </>
                        }
                            
                        </>
                }
            </>
        </tr>

    );
};

export default MyBidsCard;