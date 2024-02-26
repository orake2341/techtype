import { useEffect, useState } from "react";

const PCBuildingForm = ({ data, setData, id }: PCBuildingProp) => {
  const [processor, setProcessorValue] = useState(data.processor);
  const [graphicsCard, setGraphicsCardValue] = useState(data.graphicsCard);
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
      processor: processor,
      graphicsCard: graphicsCard,
      description: description,
    });
  }, [processor, graphicsCard, description]);

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

export default PCBuildingForm;
