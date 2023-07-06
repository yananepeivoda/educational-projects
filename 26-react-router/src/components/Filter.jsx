const Filter = ({ options, selectedOption, onChange }) => {
  return (
    <select value={selectedOption} onChange={onChange}>
      <option value="">None</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Filter;
