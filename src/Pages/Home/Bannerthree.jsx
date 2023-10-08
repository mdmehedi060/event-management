const Bannerthree = () => {
  return (
    <div className="shadow-lg bg-slate-100 mb-10">
      <h2 className="text-4xl font-bold text-center p-4">
        WHY CHOOSE US FOR YOUR EVENT?
      </h2>
      <p className="text-center">Event that you will Remember</p>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="p-10">
          <h3 className="text-2xl font-bold">
            ALL KIND OF LOGISTICS AND RESOURCES SUPPORT
          </h3>
          <p>
            As an experienced Event Management company, we have all kind of
            Event equipment, logistics and resources available
          </p>
        </div>
        <div className="p-10">
          <h3 className="text-2xl font-bold">EXPERIENCED EVENT PLANNER AND MANAGER</h3>
          <p>
            When its about making your Event successful, it's all about making
            a good plan, managing and executing successfully. And, we have
            experienced who will make your event unique and memorable!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bannerthree;
