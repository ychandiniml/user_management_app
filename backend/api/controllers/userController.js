import prisma from "../../lib/prisma.js";

export const registerUser = async (req, res) => {
    const { username, email, description, role, registeredAt } = req.body;
    
    try {
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                description,
                role,
                registeredAt: registeredAt
            },
        });

        return res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        if (error.code === 'P2002') { 
            return res.status(400).json({ message: "Username or Email already exists" });
        }

        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};


export const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

export const deleteUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const deletedUser = await prisma.user.delete({
            where: { userId },
        });
        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        if (error.code === 'P2025') { 
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}
