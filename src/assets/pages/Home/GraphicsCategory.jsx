import GraphTab from "./GraphTab";


const GraphicsCategory = ({graphics}) => {
    console.log(graphics)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                graphics.map(graph => <GraphTab key={graph._id} graph={graph}></GraphTab>)
            }
        </div>
    );
};

export default GraphicsCategory;