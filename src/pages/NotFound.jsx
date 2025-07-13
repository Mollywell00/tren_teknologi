const NotFound = () => {
  return (
    <div className="mx-auto max-w-[1444px] p-4 text-left text-(--text-color-black)">
      <h2 className="font-barlow text-6xl font-bold">404</h2>
      <div className="mt-1 flex items-center gap-2 text-lg font-semibold">
        <i className="fa fa-chevron-right rotate-x-180"></i>
        NOT FOUND
      </div>
    </div>
  );
};

export default NotFound;
