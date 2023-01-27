import React from 'react';
import Select from 'react-select';
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

// export const CountrySelect = () => {
//   const [value, setValue] = useState("");
//   const options = useMemo(() => countryList().getData(), []);

//   const changeHandler = (value) => {
//     setValue(value);
//   };

//   return <Select options={options} value={value} onChange={changeHandler} />;
// };
export const CountrySelect = () => {
  return <Select options={options} value={value}  />;
};
