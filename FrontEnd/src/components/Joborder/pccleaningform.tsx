type PCCleaningProp = {
  servicetype: string;
};

const PCCleaningForm = ({ servicetype }: PCCleaningProp) => {
  return (
    <div className="flex flex-col gap-8">
      <p className="flex-grow">Chosen Service: {servicetype}</p>
      <label className="flex items-center">Write your post:</label>
      <textarea className="border-2" name="postContent" rows={4} cols={40} />
    </div>
  );
};

export default PCCleaningForm;
