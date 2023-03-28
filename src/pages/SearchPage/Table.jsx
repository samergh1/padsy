export const Table = ({ list, setOpen, setSelectedDoctor }) => {
  return (
    <div className="p-1.5 w-full inline-block align-middle px-3.5 lg:px-10">
      <div className="overflow-hidden border rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 ">
          <thead className="bg-[#00786A]">
            <tr>
              <th scope="col" className="py-3 pl-4"></th>
              <th
                scope="col"
                className="pl-0 pr-6 py-3 text-xs font-bold text-left text-white uppercase "
              >
                NAME
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
              >
                SPECIALTY
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
              >
                ADDRESS
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
              >
                COST
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
              >
                RATING
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {list.map((doctor, doctorIdx) => {
              const even = doctorIdx % 2 == 0;
              return (
                <tr
                  key={doctorIdx}
                  onClick={() => {
                    setOpen(true);
                    setSelectedDoctor(doctor);
                  }}
                  className={`hover:bg-gray-200 border cursor-pointer ${
                    even ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="py-3 pl-4 pr-0">
                    <div className="flex-shrink-0 pl-4 pr-0">
                      <img
                        className="w-8 h-8 rounded-full pr-0"
                        src={doctor.profileImage}
                        alt={doctor.name}
                      />
                    </div>
                  </td>
                  <td className="pl-0 pr-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    {doctor.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {doctor.specialty}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {doctor.address}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {doctor.cost}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {doctor.rating}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
