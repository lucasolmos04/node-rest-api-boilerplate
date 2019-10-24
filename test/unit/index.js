const assert = require('chai').assert;
const expect = require('chai').expect;
const UsersCtrl = new (require('../../src/application/controllers/users.controller'))();

describe('Dummy test', () => {
  it('Should just be here as to make tests pass', (done) => {
    assert(true);
    done();
  });
});

describe('Api Users', () => {
	it('Should return all users', () => {
		const mockRes = {
      "users": [
        {
            "id": 3515721999,
            "name": "Lucas Olmos",
            "lastname": "Maxi",
            "birthday": "1990-04-27",
            "is_active": true,
            "email": "lucolmos@gmail.com",
            "genre": "Masculino",
        }
      ]
		};

		const result = UsersCtrl.getUsers(null, mockRes);

		expect(result).to.be.an('array');
	
		expect(result[0]).to.have.all.keys('user');
  });
  
});