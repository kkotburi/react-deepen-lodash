import _ from "lodash";
import { useCallback, useState } from "react";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [inputText, setInputText] = useState("");

  const debounce = (callback, delay) => {
    let timerId = null;
    return (...args) => {
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(() => {
        callback(...args);
      }, [delay]);
    };
  };

  // useCallback
  const handleSearchText = useCallback(
    debounce((text) => {
      setSearchText(text);
    }, 2000),
    []
  );

  // 공통함수
  const handleChange = (event) => {
    setInputText(event.target.value);
    handleSearchText(event.target.value);
  };

  return (
    <div
      style={{
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <h1>debouncing</h1>
      <input
        style={{ width: "300px" }}
        type="text"
        placeholder="입력 값을 넣고 debouncing test를 해보세요!"
        onChange={handleChange}
      />
      <p>Search Text : {searchText}</p>
      <p>Input Text : {inputText}</p>
    </div>
  );
};

export default App;
