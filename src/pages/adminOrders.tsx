import { useState, useCallback, useEffect } from "react";
import { ContainerAdmin } from "../components/layouts/container/containerAdmin";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Loading } from "../components/ui/loading/loading";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

export const AdminOrders = () => {
  const [orders, setOrders] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const fetchAllOrders = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/order/get-all-orders`,
      });
      setOrders(res.data);
      setIsLoading(false);
    } catch (error) {
      navigate("/server-error");
    }
  }, [navigate]);

  const handleDelete = useCallback(async (id: string) => {
    setIsLoading(true);
    Swal.fire({
      title: "Apakah kamu ingin menghapus product ini?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Iya",
      denyButtonText: `Jangan`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios({
            method: "DELETE",
            url: `${process.env.REACT_APP_API_URL}/order/delete-order/${id}`,
            headers: {
              Accept: "application/json",
            },
          });
          Swal.fire("Terhapus!", "", "success");
          window.location.reload();
        } catch (error) {
          Swal.fire("Produk tidak terhapus", "", "error");
          setIsLoading(false);
        }
      } else if (result.isDenied) {
        Swal.fire("Produk tidak terhapus", "", "info");
        setIsLoading(false);
      }
      setIsLoading(false);
    });
  }, []);

  const handleUpdateStatus = async (e: any, id: any, userId: any) => {
    let value = e.target.value;
    const payload = {
      status: value,
      id: id,
      user_id: userId,
    };
    try {
      await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/order/update-status-order`,
        data: payload,
      });
    } catch (error) {}
  };

  useEffect(() => {
    fetchAllOrders();
  }, [fetchAllOrders]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ContainerAdmin>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Toko Maelo - Order</title>
      </Helmet>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Table Pesanan</h1>
        </div>
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
                        Username
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                      >
                        Status
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
                        Nomor WhatsApp
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                      >
                        Jumlah Pesan
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                      >
                        Total
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                      >
                        Aksi
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {orders.map((order: any, idx: number) => {
                      return (
                        <tr
                          key={order.id}
                          className="transition duration-300 ease-in-out bg-white border-b hover:bg-gray-100"
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                            {idx + 1}
                          </td>
                          <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                            {order.user_name}
                          </td>
                          <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                            <select
                              onChange={(e) =>
                                handleUpdateStatus(e, order.id, order.user_id)
                              }
                            >
                              <option
                                value="pending"
                                selected={
                                  order.order_status === "pending"
                                    ? true
                                    : false
                                }
                              >
                                Pending
                              </option>
                              <option
                                value="diantar"
                                selected={
                                  order.order_status === "diantar"
                                    ? true
                                    : false
                                }
                              >
                                Diantar
                              </option>
                              <option
                                value="selesai"
                                selected={
                                  order.order_status === "selesai"
                                    ? true
                                    : false
                                }
                              >
                                Selesai
                              </option>
                            </select>
                          </td>
                          <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                            {order.user_address}
                          </td>
                          <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                            {order.user_no_wa}
                          </td>
                          <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                            {order.order_quantity}
                          </td>
                          <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                            {order.order_total_price}
                          </td>
                          <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                            <div className="flex justify-between space-x-4">
                              {/* <Link
                                to={`/admin-product/update/${product.product_slug}`}
                                className="text-blue-400"
                              >
                                Edit
                              </Link> */}
                              <button
                                onClick={() => handleDelete(order.id)}
                                className="text-red-500"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerAdmin>
  );
};
