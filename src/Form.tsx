import { useState } from "react";

const Form = () => {
  let [tags, setTags] = useState<{}[]>([]);
  console.log(tags);
  //Add to the array
  const handleAdd = () => {
    setTags([...tags, { firstName: "Elias", lastName: "AHMAD" }]);
  };

  return (
    <div>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Form;
