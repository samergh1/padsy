
export const Table = ({name, speciality, location, cost, rating}) => {
    return(
        <div className="p-1.5 w-full inline-block align-middle px-3.5 lg:px-10">
            <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 ">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3 pl-4">
                            </th>
                            <th scope="col" className="pl-0 pr-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "                                    >
                                NAME
                            </th>
                            <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                                SPECIALITY
                            </th>
                            <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                                LOCATION
                            </th>
                            <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                                COST
                            </th>
                            <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                                RATING
                            </th>
                                </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="py-3 pl-4 pr-0">
                                <div className="flex-shrink-0 pl-4 pr-0">
                                    <img className="w-8 h-8 rounded-full pr-0" src="https://cdn-icons-png.flaticon.com/512/4792/4792929.png" alt="Neil image"/>
                                </div>
                            </td>
                            <td className="pl-0 pr-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                {name}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                {speciality}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                {location}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                {cost}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                {rating}
                            </td>
                                    
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
