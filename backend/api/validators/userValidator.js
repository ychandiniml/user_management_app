import {body} from 'express-validator'


export const registerUserValidator = () => {
    return [        
    body('username')
        .isString()
        .isLength({ min: 2 })
        .withMessage('Username must be at least 2 characters long'),
    body('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    body('description')
        .isString()
        .withMessage('Description must be a string'),
    body('role')
        .optional()
        .isString()
        .withMessage('Role must be a string'),
    body('registeredAt')
        .optional()
        .isDate()
        .withMessage('RegisteredAt must be a valid date')
    ]
};