import './cards.css';

export const Cards = (items) => {
  const cards = items.items;
  return (
    <section id="wrap-cards">
    {
      cards.map((item) => (
        <div className="card" key={item.name}>
          
            <div className='card-title'>
              <h3>{item.name}</h3>
              <h4>{item.nickName}</h4>
            </div>
            <div className='card-body'>
              <img src={item.imageUrl} />
              <p>{item.background}</p>
            </div>
          </div>
      ))
    }
    </section>
  )
}
