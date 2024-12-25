export const Input = ({
  type,
  placeholder,
}: {
  type: string;
  placeholder: string;
}) => {
  {
    return (
      <div className="w-full">
        <input
          type={type}
          placeholder={placeholder}
          className="bg-gray-800 text-white px-4 py-2 rounded-full w-full"
        />
      </div>
    );
  }
};
