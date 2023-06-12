export const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: "hsl(181.62deg 86.05% 8.43%)",
    border: state.isFocused ? "none" : "none",
    borderRadius: "4px",
    boxShadow: state.isFocused ? "none" : "none",
    "&:hover": {
      border: "none",
    },
  }),
  input: (provided: any) => ({
    ...provided,
    color: "rgba(255, 255, 255, 0.4)",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "rgba(255, 255, 255, 0.4)",
  }),
  menu: (provided: any) => ({
    ...provided,
    background: "#000A08",
    borderRadius: "4px",
    color: "white",
    maxHeight: "120px",
    overflowY: "scroll",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color: "white",
    cursor: "pointer",
    background: state.isFocused ? "#00A388" : "#000A08",
    "&:hover": {
      background: state.isSelected ? "#00A388" : "#00A388",
    },
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    color: "rgba(255, 255, 255, 0.4)",
  }),
};
