'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('AngularCasts App', function() {

  beforeEach(function() {
    browser().navigateTo('/');
    pause()
  });

  it('should show a list of angular casts', function() {
      expect(repeater('#screencast-list-container li').count()).toBeGreaterThan(5);
  });

//
//
//  describe('view1', function() {
//
//    beforeEach(function() {
//      browser().navigateTo('#/view1');
//    });
//
//
//    it('should render view1 when user navigates to /view1', function() {
//      expect(element('[ng-view] p:first').text()).
//        toMatch(/partial for view 1/);
//    });
//
//  });
//
//
//  describe('view2', function() {
//
//    beforeEach(function() {
//      browser().navigateTo('#/view2');
//    });
//
//
//    it('should render view2 when user navigates to /view2', function() {
//      expect(element('[ng-view] p:first').text()).
//        toMatch(/partial for view 2/);
//    });
//
//  });
});
