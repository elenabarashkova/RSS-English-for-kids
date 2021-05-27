export const FORM_INPUTS = [
  {
    fieldName: 'First name',
    id: 'firstName',
    type: 'text',
    placeholder: 'Lena',
    pattern: `pattern="^[A-Za-zА-Яа-я0-9\\-]*[a-zA-ZА-Яа-я]{1}[A-Za-zА-Яа-я0-9\\-]*$"`,
    required: 'required',
  },
  {
    fieldName: 'Last name',
    id: 'lastName',
    type: 'text',
    placeholder: 'Barashkova',
    pattern: `pattern="^[A-Za-zА-Яа-я0-9\\-]*[a-zA-ZА-Яа-я]{1}[A-Za-zА-Яа-я0-9\\-]*$"`,
    required: 'required',
  },
  {
    fieldName: 'Email',
    id: 'email',
    type: 'email',
    placeholder: 'lenabarashkova@mail.ru',
    pattern: '',
    required: 'required',
  }
]