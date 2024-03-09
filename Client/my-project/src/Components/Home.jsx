import Yourpost from "./Yourpost";
const Home = ({ data }) => {
  return (
    <div>
      <div className="flex flex-col bg-grey-500 p-4 justify-center items-center ">
        {data.map((data, index) => (
          <Yourpost data={data} key={index} />
        ))}
      </div>
    </div>
  );
};
export default Home;
