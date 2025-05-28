// user_repository.js
// Handles direct database operations for the User model

const prisma = require('../db');

const userRepository = {
    findAll: () => prisma.user.findMany(),
    findById: (id) => prisma.user.findUnique({ where: { id } }),
    create: (data) => prisma.user.create({ data }),
    update: (id, data) => prisma.user.update({ where: { id }, data }),
    delete: (id) => prisma.user.delete({ where: { id } }),
};

module.exports = userRepository;
