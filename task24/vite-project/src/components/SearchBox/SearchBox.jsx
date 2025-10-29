
function SearchBox({ value, onChange }) {
  return (
    <div>
      <p>Пошук за іменем</p>
      <input
        type="text"
        value={value}       
        onChange={onChange} 
      />
    </div>
  );
}
export default SearchBox;