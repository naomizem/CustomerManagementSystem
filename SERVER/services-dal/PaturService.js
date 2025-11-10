const Patur = require('../models/patur.model');
const logChange = require('../logService');

class PaturService {
    async getAll() {
        return await Patur.find();
    }

    async get(id) {
        return await Patur.findOne({ id });
    }

    async insert(newPaturDetalis) {
        const existing = await Patur.findOne({ id: newPaturDetalis.id });
        if (existing) throw new Error('invalid new patur id');

        const patur = new Patur(newPaturDetalis);
        await patur.save();
        logChange('insert', 'paturDetalis', newPaturDetalis);
        return patur;
    }

    async update(id, paturDetalisToUpdate) {
        const updated = await Patur.findOneAndUpdate(
            { id },
            paturDetalisToUpdate,
            { new: true }
        );
        if (!updated) throw new Error(`could not update patur id ${id}, not found`);
        logChange('update', 'paturDetalis', paturDetalisToUpdate);
        return updated;
    }

    async delete(id) {
        const deleted = await Patur.findOneAndDelete({ id });
        if (deleted) {
            logChange('delete', 'paturDetalis', deleted);
            return true;
        }
        return false;
    }
}

module.exports = new PaturService();
