import { LuSearch } from 'react-icons/lu';

const CardsSearch = ({changeHandler}) => {
  return (
    <div className="form-group">
        <input type="text" onChange={changeHandler} name="name" id="name" placeholder="Поиск..."/>
        <div className="icon">
            <LuSearch size={24} />
        </div>
    </div>
  );
};

export default CardsSearch;