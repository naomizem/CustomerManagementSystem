const Murshe = require('../models/murshe.model');
const logChange = require('../logService');

class MursheService {
    async getAll() {
        return await Murshe.find();
    }

    async get(id) {
        return await Murshe.findOne({ id });
    }

    async insert(newMursheDetalis) {
        const existing = await Murshe.findOne({ id: newMursheDetalis.id });
        if (existing) throw new Error('invalid new murshe id');

        const murshe = new Murshe(newMursheDetalis);
        await murshe.save();
        logChange('insert', 'mursheDetalis', newMursheDetalis);
        return murshe;
    }

    async update(id, mursheDetalisToUpdate) {
        const updated = await Murshe.findOneAndUpdate(
            { id },
            mursheDetalisToUpdate,
            { new: true }
        );
        if (!updated) throw new Error(`could not update murshe id ${id}, not found`);
        logChange('update', 'mursheDetalis', mursheDetalisToUpdate);
        return updated;
    }

    async delete(id) {
        const deleted = await Murshe.findOneAndDelete({ id });
        if (deleted) {
            logChange('delete', 'mursheDetalis', deleted);
            return true;
        }
        return false;
    }
}

module.exports = new MursheService();
