'use strict';

describe('Controller: SecureDemoCtrl', function () {

  // load the controller's module
  beforeEach(module('angularSpringbootUiApp'));

  var SecureDemoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SecureDemoCtrl = $controller('SecureDemoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SecureDemoCtrl.awesomeThings.length).toBe(3);
  });
});
