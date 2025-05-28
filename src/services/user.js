// user_service.js
// Handles business logic for users, using userRepository

const userRepository = require('../repository/user');

const userService = {
    getAllUsers: async () => {
        return await userRepository.findAll();
    },
    getUserByIdWithValidation: async (id) => {
        if (!id) {
            return { status: 400, data: 'Invalid user ID' };
        }
        const user = await userRepository.findById(id);
        if (!user) {
            return { status: 404, data: 'User not found' };
        }
        return { status: 200, data: user };
    },
    createUserWithValidation: async (userData) => {
        const { name, email, password } = userData;
        if (!name || !email || !password) {
            return { status: 400, data: 'Missing required fields' };
        }
        const newUser = await userRepository.create({ name, email, password });
        return { status: 201, data: newUser };
    },
    deleteUserWithValidation: async (id) => {
        if (!id) {
            return { status: 400, data: 'Invalid user ID' };
        }
        const deletedUser = await userRepository.delete(id);
        return { status: 200, data: deletedUser };
    },
    updateUserWithValidation: async (id, userData) => {
        const { name, email, password } = userData;
        if (!id) {
            return { status: 400, data: 'Invalid user ID' };
        }
        if (!name || !email || !password) {
            return { status: 400, data: 'Missing required fields' };
        }
        const updatedUser = await userRepository.update(id, { name, email, password });
        return { status: 200, data: updatedUser };
    },
};

module.exports = userService;
