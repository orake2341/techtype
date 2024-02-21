import Select from "./select";
import Switch from "./switch";
import { useState, useEffect } from "react";

type KeyboardModdingData = {
  id: string;
  typeofservice: string;
  typeofkeyboardmods: string;
  keyboarddeepclean: boolean;
  keycapcleaning: boolean;
  switchlubing: boolean;
  description: string;
};

type KeyboardModdingFormProps = {
  data: KeyboardModdingData;
  setData: (data: KeyboardModdingData) => void;
};

const KeyboardModdingForm = ({ data, setData }: KeyboardModdingFormProps) => {
  const [keyboardmoddingtype, setKeyboardModdingTypeValue] = useState(
    data.typeofkeyboardmods
  );
  const [keyboarddeepclean, setKeyboardDeepCleanValue] = useState(
    data.keyboarddeepclean
  );
  const [keycapcleaning, setKeyCapCleaningValue] = useState(
    data.keycapcleaning
  );
  const [switchlubing, setSwitchLubingValue] = useState(data.switchlubing);
  const [description, setDescription] = useState(data.description);

  const options = [
    { value: "", label: " --Please Select--" },
    { value: "Foam mod", label: "Foam mod" },
    { value: "Holee mod", label: "Holee mod" },
    { value: "Tape mod", label: "Tape mod" },
  ];

  useEffect(() => {
    setData({
      ...data,
      typeofkeyboardmods: keyboardmoddingtype,
      keyboarddeepclean: keyboarddeepclean,
      keycapcleaning: keycapcleaning,
      switchlubing: switchlubing,
      description: description,
    });
  }, [
    keyboardmoddingtype,
    keyboarddeepclean,
    keycapcleaning,
    switchlubing,
    description,
  ]);

  const handleKeyboardModdingTypeChange = (value: string) => {
    setKeyboardModdingTypeValue(value);
  };

  const handleKeyboardDeepCleanToggle = (checked: boolean) => {
    setKeyboardDeepCleanValue(checked);
  };

  const handleKeyCapCleaningToggle = (checked: boolean) => {
    setKeyCapCleaningValue(checked);
  };

  const handleSwitchLubingToggle = (checked: boolean) => {
    setSwitchLubingValue(checked);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  return (
    <div className=" flex flex-col gap-8">
      <Select
        label="Type of Keyboard Mods:"
        value={keyboardmoddingtype}
        onChange={handleKeyboardModdingTypeChange}
        options={options}
      />
      <div className="flex">
        <h2 className="flex-grow">keyboard deep clean</h2>
        <Switch
          value={keyboarddeepclean}
          onChange={handleKeyboardDeepCleanToggle}
        />
      </div>
      <div className="flex gap-8">
        <h2 className="flex-grow">Keycap cleaning</h2>
        <Switch value={keycapcleaning} onChange={handleKeyCapCleaningToggle} />
      </div>
      <div className="flex">
        <h2 className="flex-grow">Switch Lubing</h2>
        <Switch value={switchlubing} onChange={handleSwitchLubingToggle} />
      </div>
      <label className="flex items-center">Description:</label>
      <textarea
        className="border-2"
        name="postContent"
        rows={4}
        cols={40}
        value={description}
        onChange={handleDescriptionChange}
      />
    </div>
  );
};

export default KeyboardModdingForm;
