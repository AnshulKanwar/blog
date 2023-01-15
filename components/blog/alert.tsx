interface Props {
  type: string;
  children: string;
}

const Alert = ({ type, children }: Props) => {
  return (
    <div className="bg-emerald-100 border-2 border-emerald-200 rounded-md">
      <div className="px-5 bg-emerald-200 font-bold">{type}</div>
      <div className="px-5">
        {children}
      </div>
    </div>
  );
};

export default Alert;
