import { userCreation } from "../PageObject/UserCreation";


describe('creacion de usuario nuevo en tranforma', () => { 
    beforeEach(function() {
        userCreation.visit();
    });
  it('creacion de usuario nuevo ', () => {
      userCreation.create(3185447801,"Colombia +57","Otro")
  });
});
