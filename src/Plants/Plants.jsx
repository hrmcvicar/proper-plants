import Plant from "./Plant"; //import a single food component
//bc instead of returning a list, we can return a single component
//single food component needs to know the info from the parent
//pass aas a prop
//every plant is an obect in data
//can pass down a string or object, just need to know what type it is

const Plants = ({ plants, addToCart }) => {
  return (
    //mapping over plants (looping over the state which has 5 componrnts)
    <div>
      <ul>
        {plants.map((plant) => {
          return <Plant plant={plant} key={plant.id} addToCart={addToCart} />;
        })}
      </ul>
    </div>
  );
};

export default Plants;
