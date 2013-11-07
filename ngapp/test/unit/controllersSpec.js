'use strict';

/* jasmine specs for controllers go here */

describe('AngularCasts Controllers', function(){
  beforeEach(module('AngularCasts'));

    describe('ScreencastsCtrl', function(){
        var scope, ctrl, $httpBackend, screencast;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
//            $httpBackend = _$httpBackend_;
//            $httpBackend.expectGET('phones/phones.json').
//                respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

            scope = $rootScope.$new();
            screencast = null;
            ctrl = $controller('ScreencastsCtrl', {$scope: scope});
        }));

        it('should set the default value of selectedScreencast model', function() {
            expect(scope.selectedScreencast).toBeNull();
        });

        it('should set the default value of selectedRow model', function() {
            expect(scope.selectedRow).toBeNull();
        });

    });

//  it('should ....', inject(function() {
//    //spec body
//  }));
});
