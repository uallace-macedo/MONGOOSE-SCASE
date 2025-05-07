const bcrypt = require('bcryptjs');

module.exports = {
  cnpj: 12345678,
  corporate_name: 'administrator',
  name: 'administrator',
  email: 'administrator@administrator.com',
  password_hash: bcrypt.hashSync('admin', 8),
  address: {
    street: 'not found',
    zip_code: 123456,
    city: 'not found',
    state: 'BR'
  },
  telephone: {
    commercial_telephone: 123456789,
    cellphone: 123456789,
  },
  admin: true,
  active: true
}
