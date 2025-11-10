import axios from "axios";

const BASE_URL = "https://customermanagementsystem-gsu9.onrender.com";

class CustomersService {
    getCustomers() {
        return axios.get(`${BASE_URL}/api/customers`);
    }

    getCustomerById(id: string) {
        return axios.get(`${BASE_URL}/api/customers/${id}`);
    }

    insertCustomer(customerData: any) {
        return axios.post(`${BASE_URL}/api/customers`, customerData);
    }

    updateCustomerById(id: string, customerData: any) {
        return axios.put(`${BASE_URL}/api/customers/${id}`, customerData);
    }

    deleteCustomerById(id: string) {
        return axios.delete(`${BASE_URL}/api/customers/${id}`);
    }
}

export default new CustomersService();
