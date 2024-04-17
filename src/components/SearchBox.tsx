import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import { useRecoilState } from "recoil";
import searchValueState from "../recoil/atom/SearchValue";
import useAllFruits, { Data } from "../hooks/useAllFruits";

const SearchBox: React.FC = () => {
  const { data: allFruits } = useAllFruits();
  const [value, setValue] = useRecoilState(searchValueState);
  const [options, setOptions] = useState<Data[]>([]);
  const fruitOptions: Data[] = allFruits? allFruits.map((fruit:any) => ({ value: fruit.name, name: fruit.name })) : [];

  const onSelect = (data: string) => {
    setValue(data);
  };

  const onChange = (data: string) => {
    setValue(data);
    if (data.length > 0) {
      const filteredOptions = fruitOptions.filter((option) =>
        option.name.toLowerCase().includes(data.toLowerCase())
      );
      setOptions(filteredOptions);
    } else {
      setOptions([]);
    }
  };

  return (
    <>
      <div className="flex justify-center mt-14">
  
          <AutoComplete
            className="w-1/2"
            value={value}
            options={options}
            onSearch={onChange}
            onSelect={onSelect}
            placeholder="input here"
          />
  
      </div>
    </>
  );
};

export default SearchBox;