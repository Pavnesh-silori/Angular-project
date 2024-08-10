export enum InvalidForm {
    INVALID_FORM_TITLE = 'Invalid details!',
    INVALID_FORM_MESSAGE = 'Please fill valid details.'
}

export enum FormAction {
    CREATE = 'CREATE',
    UPDATE = 'UPDATE',
    ADD = 'ADD',
    DELETE = 'DELETE',
    CONFIRM = 'CONFIRM',
    VIEW = 'VIEW',
    CANCEL = 'CANCEL'
}

export enum FormErrorEnum {
    REQUIRED = 'Required field',
    EMAIL = 'Invalid email',
    NEGATIVE = "This field can't be negative",
    PATTERN = 'Invalid pattern'
}
