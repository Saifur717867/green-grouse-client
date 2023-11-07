

const MyBidsCard = ({ bid }) => {
    const { Title, email, price, seller, clientDeadline } = bid;
    return (

        <tr>
            <td>{Title}</td>
            <td>{seller}</td>
            <td>{clientDeadline}</td>
            <td>$ {price}.00</td>
            <div>
            <th><button className="bg-orange-600 py-3 px-6 rounded-lg text-white">Pending</button></th>
            <th><button className="bg-green-300 py-3 px-6 rounded-lg text-white disabled cursor-not-allowed">Complete</button></th>
            </div>
        </tr>

    );
};

export default MyBidsCard;