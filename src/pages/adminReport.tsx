import React, { useState } from "react";
import { ContainerAdmin } from "../components/layouts/container/containerAdmin";
import axios from "axios";
import { Loading } from "../components/ui/loading/loading";
import { formatRupiah } from "../helpers/formatRupiah";
import { Helmet } from "react-helmet";

export const AdminReport = () => {
  const [startDate, setStartDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [reports, setReports] = useState<any>();
  console.log(reports);

  const handleSubmitReports = async () => {
    setIsLoading(true);
    const payload = {
      start_date: startDate,
      end_date: endDate,
    };

    try {
      const res = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/report`,
        data: payload,
      });
      setReports(res.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ContainerAdmin>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Toko Maelo - Laporan</title>
      </Helmet>
      <div className="space-y-4">
        <h1 className="text-xl font-bold">Laporan</h1>
        {/* filter */}
        <div className="flex justify-between space-x-2 md:justify-start">
          <input
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            type="date"
            className="p-2 rounded-md shadow-md outline-none"
          />
          <input
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            type="date"
            className="p-2 rounded-md shadow-md outline-none"
          />
          <button
            onClick={() => handleSubmitReports()}
            className="p-1 text-white rounded-md shadow-md bg-secondary-200"
          >
            Submit
          </button>
        </div>
        {/* table */}
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-gray-200 border-b">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                      >
                        Nama Pembeli
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                      >
                        Alamat
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                      >
                        Nomor Wa
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                      >
                        Jumlah Beli
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                      >
                        Total Beli
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {reports?.reports?.map((report: any, idx: number) => {
                      return (
                        <tr
                          key={report.id}
                          className="transition duration-300 ease-in-out bg-white border-b hover:bg-gray-100"
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                            {idx + 1}
                          </td>
                          <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                            {report.user_name}
                          </td>
                          <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                            {report.user_address}
                          </td>
                          <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                            {report.user_no_wa}
                          </td>
                          <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                            {report.order_quantity}
                          </td>
                          <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                            {report.order_total_price}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="flex justify-end mt-4">
                  <span className="font-bold">
                    Total : {reports?.total ? formatRupiah(reports?.total) : 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerAdmin>
  );
};
