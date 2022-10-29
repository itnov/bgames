import CardGrid from '../molecules/CardGrid';

const cards = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function Letters() {
  return (
    <div className="App">
      <CardGrid data={cards} />
    </div>
  );
}

export default Letters;