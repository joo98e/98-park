interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <div className="shadow-lg rounded-lg p-6 bg-slate-400">
      <h3 className="text-xl font-semibold">Card title</h3>
      <p className="text-gray-500 mt-3">Card description</p>
      <span>{children}</span>
    </div>
  );
};

export default Card;
