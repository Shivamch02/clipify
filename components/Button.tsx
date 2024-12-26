const Button = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <div>
      <button className="bg-white hover:bg-black hover:text-white text-black rounded-full px-4 py-1 flex gap-2 items-center hover:border hover:border-white">
        {icon} <span className="hidden sm:block">{text}</span>
      </button>
    </div>
  );
};

export default Button;
