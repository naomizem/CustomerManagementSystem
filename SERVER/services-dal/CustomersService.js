const Customer = require('../models/customer.model');
const logChange = require('../logService');

class CustomersService {

    async getAll() {
        return await Customer.find();
    }

    async get(id) {
        return await Customer.findOne({ id });
    }

    async insert(newCustomer) {
        const existing = await Customer.findOne({ id: newCustomer.id });
        if (existing) throw new Error('invalid new customer id');

        const customer = new Customer(newCustomer);
        await customer.save();
        logChange('insert', 'customers', newCustomer);
        return customer;
    }

    async update(id, customerToUpdate) {
        const updated = await Customer.findOneAndUpdate(
            { id },
            customerToUpdate,
            { new: true }
        );
        if (!updated) throw new Error(`could not update customer id ${id}, not found`);
        logChange('update', 'customers', customerToUpdate);
        return updated;
    }

    async delete(id) {
        const deleted = await Customer.findOneAndDelete({ id });
        if (deleted) {
            logChange('delete', 'customers', deleted);
            return true;
        }
        return false;
    }
}

module.exports = new CustomersService();
