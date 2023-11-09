

const MyBidsCard = ({ bid, handleCompleted }) => {
    const { _id, Title, email, price, seller, clientDeadline, status } = bid;
    return (

        <tr>
            <td>{Title}</td>
            <td>{seller}</td>
            <td>{clientDeadline}</td>
            <td>$ {price}.00</td>
            {
                status == 'completed' ? <th><button className="bg-green-500 py-3 px-6 rounded-lg text-white -ml-4">Completed</button></th>
                    :
                    <>
                        {
                            status == 'confirm' ? <button className="bg-yellow-500 py-3 px-6 rounded-lg text-white my-3">In Progress</button>
                                :
                                <>
                                    {
                                        status == 'reject' ? <button className="bg-red-500 py-3 px-6 rounded-lg text-white my-3">Canceled</button> :
                                            <button className="bg-yellow-500 py-3 px-6 rounded-lg text-white my-3">Pending</button>
                                    }
                                </>
                        }
                    </>
            }
            {
                status == 'confirm' || status == 'reject' || status == 'completed' ? "" :
                    <div className="inline-block">
                        <th><button className="bg-green-300 py-3 px-6 rounded-lg disabled cursor-not-allowed text-white">complete</button></th>
                    </div>
            }
            {
                status == 'confirm' && <button onClick={() => handleCompleted(_id)} className="bg-green-500 py-3 px-6 rounded-lg text-white ml-4">complete</button>
            }

        </tr>

    );
};

export default MyBidsCard;