import { useEffect, useState } from "react";

const PCCleaningForm = ({ data, setData, id }: PCCleaningProp) => {
  const [cleaningMethod, setGraphicsCardValue] = useState(data.cleaningMethod);
  const [description, setDescription] = useState(data.description);

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  useEffect(() => {
    setData({
      ...data,
      id: id,
      cleaningMethod: cleaningMethod,
      description: description,
    });
  }, [cleaningMethod, description]);

  return (
    <div className="flex flex-col gap-8">
      <label className="flex items-center">Write your post:</label>
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

export default PCCleaningForm;
