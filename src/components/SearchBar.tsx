interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="search-bar">
      <span className="search-icon">⌕</span>

      <input
        type="text"
        placeholder="Search tasks..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="clear-search"
        >
          ×
        </button>
      )}
    </div>
  );
}

export default SearchBar;