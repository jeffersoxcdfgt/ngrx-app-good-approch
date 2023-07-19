import { LoginFunction } from './functions/utils.cy';

describe('Login process Succesfully', () => {
  it('Login user with right data', () => {
    LoginFunction('admin@admin.com','admin')
  })

  it('Login user with wrong data', () => {
    LoginFunction('admin@admin.com','admin111')
  })

})