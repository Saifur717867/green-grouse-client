

const MyBidsCard = ({ bid }) => {
    const { title, email, price, clientDeadline } = bid;
    return (
        <div>
            <tr>
                
                <td>{title}</td>
                <td>{email}</td>
                <td>{clientDeadline}</td>
                <td>{price}</td>
                <td>Pending</td>
                <td><button className='border-green-500 border py-3 px-6 text-green-600 rounded-lg'>completed</button></td>
            </tr>
        </div>
    );
};

export default MyBidsCard;