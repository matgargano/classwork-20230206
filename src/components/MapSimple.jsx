const items = [
    'Item 1',
    'Item 2',
    'Item 3',
  ];
  //https://csc436.matgargano.com/movies
  const MapSimple = ()  => {
  
    return <ul>
      {items.map((item, index) => {
          return <li key={index}>{item.split('').reverse().join('').toUpperCase()}</li>
      })}
    </ul>;
  
  }
  
  export default MapSimple;
  
  