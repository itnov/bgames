import CardGrid from '../molecules/CardGrid';

const cards = Array.from(Array(51).keys());

function Numbers() {
  return (
    <div className="App">
      <CardGrid data={cards} />
    </div>
  );
}

export default Numbers;