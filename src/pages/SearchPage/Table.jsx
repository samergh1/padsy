export const Table = ({
  name,
  speciality,
  location,
  cost,
  rating,
  setOpen,
}) => {
  return (
    // <div className="p-1.5 w-full inline-block align-middle px-3.5 lg:px-10">
    //   <div className="overflow-hidden border rounded-lg">
    //     <table className="min-w-full divide-y divide-gray-200 ">
    //       <thead className="bg-gray-50">
    //         <tr>
    //           <th scope="col" className="py-3 pl-4"></th>
    //           <th
    //             scope="col"
    //             className="pl-0 pr-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
    //           >
    //             NAME
    //           </th>
    //           <th
    //             scope="col"
    //             className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
    //           >
    //             SPECIALITY
    //           </th>
    //           <th
    //             scope="col"
    //             className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
    //           >
    //             LOCATION
    //           </th>
    //           <th
    //             scope="col"
    //             className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
    //           >
    //             COST
    //           </th>
    //           <th
    //             scope="col"
    //             className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
    //           >
    //             RATING
    //           </th>
    //         </tr>
    //       </thead>

    //       <tbody className="divide-y divide-gray-200">
    //         <tr>
    //           <td className="py-3 pl-4 pr-0">
    //             <button onClick={changeState} className="bg-black"></button>
    //           </td>
    //           <td className="py-3 pl-4 pr-0">
    //             <div className="flex-shrink-0 pl-4 pr-0">
    //               <img
    //                 className="w-8 h-8 rounded-full pr-0"
    //                 src="https://cdn-icons-png.flaticon.com/512/4792/4792929.png"
    //                 alt="Neil image"
    //               />
    //             </div>
    //           </td>
    //           <td className="pl-0 pr-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
    //             {name}
    //           </td>
    //           <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
    //             {speciality}
    //           </td>
    //           <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
    //             {location}
    //           </td>
    //           <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
    //             {cost}
    //           </td>
    //           <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
    //             {rating}
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>
    // </div>

    <button
      onClick={() => setOpen(true)}
      className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 w-50  lg: h-15 w-17"
    >
      <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray- rounded-md sm:py-2">
        <div className="hidden sm:block lg: w-16">Search</div>
      </span>
    </button>
    /* // inline-block align-middle  --> 1
    //-
    /* <div className="p-1.5 w-full inline-block align-middle px-3.5 lg:px-7">
    <div className="border rounded-lg lg:overflow-hidden">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Position
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" alt="Jese image"/>
                    <div className="pl-3">
                        <div className="text-base font-semibold">Neil Sims</div>
                        <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                    </div>  
                </th>
                <td className="px-6 py-4">
                    React Developer
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                    </div>
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" alt="Jese image"/>
                    <div className="pl-3">
                        <div className="text-base font-semibold">Bonnie Green</div>
                        <div className="font-normal text-gray-500">bonnie@flowbite.com</div>
                    </div>
                </th>
                <td className="px-6 py-4">
                    Designer
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                    </div>
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" alt="Jese image"/>
                    <div className="pl-3">
                        <div className="text-base font-semibold">Jese Leos</div>
                        <div className="font-normal text-gray-500">jese@flowbite.com</div>
                    </div>
                </th>
                <td className="px-6 py-4">
                    Vue JS Developer
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                    </div>
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" alt="Jese image"/>
                    <div className="pl-3">
                        <div className="text-base font-semibold">Thomas Lean</div>
                        <div className="font-normal text-gray-500">thomes@flowbite.com</div>
                    </div>
                </th>
                <td className="px-6 py-4">
                    UI/UX Engineer
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                    </div>
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" alt="Jese image"/>
                    <div className="pl-3">
                        <div className="text-base font-semibold">Leslie Livingston</div>
                        <div className="font-normal text-gray-500">leslie@flowbite.com</div>
                    </div>
                </th>
                <td className="px-6 py-4">
                    SEO Specialist
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
                    </div>
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
        </tbody>
        </table> 
    </div>
</div>   */
  );
};
