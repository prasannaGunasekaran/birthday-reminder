
const List = ({person,removePerson}) => {
  return (
    <div >
        <h1 className="title">{person.length}Birthday Reminder</h1>
        {person.map((persons) => {
        const { id, img, name, age } = persons;

        return (
          <div className="names" key={id}>
            <div className="card">
            <img src={img} alt="dog" className="dog" />
            <div>
              <h3>{name}</h3>
              <h5>{age}</h5>
            </div>
            </div>
            
            <button
              type="button"
              className="button"
              onClick={() => removePerson(id)}
            >
              Del
            </button>
          </div>
        );
      })}
    </div>
        
  )
}

export default List