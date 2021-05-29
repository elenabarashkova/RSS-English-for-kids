export const FORM_INPUTS = [
  {
    fieldName: 'First name',
    id: 'firstName',
    type: 'text',
    placeholder: 'Lena',
    pattern: `pattern="^[\\p{L}0-9\\\\-]*[\\p{L}]{1}[\\p{L}0-9\\\\-]*$"`,
    required: 'required',
  },
  {
    fieldName: 'Last name',
    id: 'lastName',
    type: 'text',
    placeholder: 'Barashkova',
    pattern: `pattern="^[\\p{L}0-9\\\\-]*[\\p{L}]{1}[\\p{L}0-9\\\\-]*$"`,
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
];

export const FIELDS_IDS = FORM_INPUTS.map(({id}) => id);