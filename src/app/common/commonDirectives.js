/**
 * Created by U160964 on 9/25/2017.
 */
(function(){
  "use strict";

  angular.module('commonDirectives').directive('cdsLabel', [function () {
    return {
      restrict: 'E',
      require: 'labelKey',
      template: function(scope, elm, attrs){
        var labelKey = elm.labelKey;
        var tipKey = elm.tooltipKey;
        var label = springMessages["label."+labelKey];
        var tip = springMessages["tooltip."+labelKey];
        var tipLocation= elm.tipLocation;
        var disableEllipsis = elm.disableEllipsis;
        if (disableEllipsis==null){
          var ellipsis = "";
        }else var ellipsis = "| ellipsis";
        if (tipLocation==null){
          tipLocation = "top";
        }
        else{
          tipLocation = "left";
        }
        if(tipKey){
          tip=springMessages["tooltip."+tipKey];
        }
        if(tip && label){
          return '<span class="tooltipLabel" tooltip-placement="'+tipLocation+'" tooltip="'+tip+'" disable-ellipsis="'+disableEllipsis+'"><label for="'+labelKey+'">'+label+'</label> <i class="glyphicon glyphicon-info-sign info-color"></i></span>';


        }else if(label){
          return '<label  for="'+labelKey+'">'+label+'</label>';
        }else{
          return '<label  for="'+labelKey+'">'+labelKey+'</label>';
        }
      },
      scope: {
        labelKey: '@',
        tipLocation: '@',
        disableEllipsis: '@',
        ellipsis:'@'
      }
    }
  }]);

  angular.module('commonDirectives').directive('cdsRefreshButton', [function () {
    return {
      restrict: 'E',
      require: 'buttonId',
      replace: true,
      template: function(scope, elm, attrs){
        var buttonId=elm.buttonId;
        return '<div  id="commonBtn" class="chase-button-container refresh">'+
          '<a id="'+buttonId+'" href="javascript:void(0)" '+
          ' 	type="submit" role="button" class="chase-button primary-button large-button">'+
          '	<span class="glyphicon glyphicon-refresh"></span></a>'+
          '</div>';

      }
    }
  }]);
  angular.module('commonDirectives').directive('cdsPageModalButton', [function () {
    return {
      restrict: 'E',
      transclude: true,
      require: ['buttonId'],
      replace: true,
      template: function(scope, elm, attrs){
        var buttonId=elm.buttonId;
        var modalSection = elm.modalId?' href="#'+elm.modalId+'" data-toggle="modal" ':' href="javascript:void(0);" ';
        return '<div  id="commonBtn" '+'class="chase-button-container">'+
          '<a id="'+buttonId+'" '+
          modalSection+
          ' class="chase-button primary-button large-button">'+
          ' <ng-transclude></ng-transclude> </a> </div>';
      },
      controller: ['$scope', function($scope) {
        //console.log("ngIf = "+$scope.ngIfExpression);
      }]
    }
  }]);
  angular.module('commonDirectives').directive('itsmOrTicketInput', [function ($compile) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/uds/pages/common/itsm_ticket/itsm_ticket_input_template.jsp' ,
      transclude: true,
      scope: true,
      compile: function(tElem, tAttrs) {
        var formName = tAttrs['formName'];
        var model = tAttrs['model'];
        tElem.html(tElem.html().replace(/%formName%/g, formName).replace(/%model%/g, model));
        //console('model ============='+tElem.find("input").data().$ngModelController.$modelValue);
        //console.log('compile');

        /*
         var bypassItsmValidation = $('#bypassItsmValidation').val()=='true';
         if (bypassItsmValidation) {
         tElem.find("input").attr('ng-disabled', true);
         tElem.find("input").attr('ng-readonly', true);
         }*/

        //console.log(name + ': compile => ' + tElem.html());
        return {
          pre: function(scope, iElem, iAttrs){
            //console.log('formName2===>'+iElem.formName);
            //console.log('pre formName===>'+iAttrs['formName']);
            //console.log(name + ': pre link => ' + iElem.html());
            //iElem.find("input").attr('ng-disabled', true)
          },
          post: function(scope, iElem, iAttrs){
            //console.log('formName3===>'+iElem.formName);
            //console.log('post formName===>'+iAttrs['formName']);
            //console.log(name + ': post link => ' + iElem.html());
            // console.log("post")
            //scope.element=iElem;
            //console.log('scope.bypassItsmValidation====='+scope.bypassItsmValidation)
            //scope.element.find("input").attr('ng-disabled', true)
            //console.log('disabled='+scope.element.find("input").attr('ng-disabled') );
          }
        }
      },
      controller: ['$scope', 'CoreService',  function($scope, CoreService) {
        var bypassItsmValidation = commonUtils.isBypassItsmValidation();
        $scope.bypassItsmValidation = bypassItsmValidation;
      }]
    }
  }]);

  angular.module('commonDirectives').directive('itsmOrTicketInputForRollback', [function ($compile) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/uds/pages/common/itsm_ticket/itsm_ticket_input_template_for_rollback.jsp' ,
      transclude: true,
      scope: true,
      compile: function(tElem, tAttrs) {
        var formName = tAttrs['formName'];
        var model = tAttrs['model'];
        tElem.html(tElem.html().replace(/%formName%/g, formName).replace(/%model%/g, model));
        return {
          pre: function(scope, iElem, iAttrs){
          },
          post: function(scope, iElem, iAttrs){
          }
        }
      },
      controller: ['$scope', 'CoreService',  function($scope, CoreService) {
        var bypassItsmValidationForRollback = commonUtils.isBypassItsmValidationForRollback();
        $scope.bypassItsmValidationForRollback = bypassItsmValidationForRollback;
      }]
    }
  }]);

  angular.module('commonDirectives').directive('onFinishRender', function ($timeout) {
    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        if (scope.$last === true) {

          $timeout(function(){
              $("body").addClass("modal-open");
              scope.$emit('ngRepeatFinished');
            },
            1000);

          /*
           setTimeout(function(){
           $("body").addClass("modal-open");
           },100);
           */

          scope.$evalAsync(attr.onFinishRender);
        }
      }
    }
  });

  angular.module('commonDirectives').directive('ngMouseWheelUp', function() {
    return function(scope, element, attrs) {
      element.bind("DOMMouseScroll mousewheel onmousewheel", function(
        event) {

        // cross-browser wheel delta
        var event = window.event || event; // old IE support
        var delta = Math.max(-1, Math.min(1,
          (event.wheelDelta || -event.detail)));

        if (delta > 0) {
          scope.$apply(function() {
            scope.$eval(attrs.ngMouseWheelUp);
          });

          /*
           // for IE
           event.returnValue = false;
           //for Chrome and Firefox
           if (event.preventDefault) {
           event.preventDefault();
           }
           */
        }
      });
    };
  });

  (function(){
    var mouseWheel= function(scope,element,attrs){
      element.bind("DOMMouseScroll mousewheel onmousewheel", function(
        event) {
        // cross-browser wheel delta
        var event = window.event || event; // old IE support
        var delta = Math.max(-1, Math.min(1,
          (event.wheelDelta || -event.detail)));
        var method=undefined;
        if (delta > 0 && attrs.mouseWheelUp) {
          method = attrs.mouseWheelUp;
        }else if(delta < 0 && attrs.mouseWheelDown){
          method = attrs.mouseWheelDown;
        }
        if(method){
          scope.$apply(function() {
            scope.$eval(method);
          });
        }
      });
    }
    angular.module('commonDirectives').directive('mouseWheel', function() {
      return function(scope, element, attrs) {
        mouseWheel(scope,element,attrs);
      };
    });

  }());

  angular.module('commonDirectives').directive('autoScroller', function() {
    return {
      restrict: 'A',
      scope: {
        autoScroller:"="
      },
      link: function (scope, element, attrs) {
        scope.raw = element[0];
        scope.increaseAmount=attrs.increaseAmount?attrs.increaseAmount:25;
        element.bind('scroll', function () {
          scope.scrollListener();
        });
      },
      controller: ['$scope', function($scope) {
        var lastScrolledTime = new Date().getTime();
        var minScrollTime = 500;
        $scope.scrollListener= function(){
          var now = new Date().getTime();
          if(now-lastScrolledTime<minScrollTime){
            return;
          }
          var raw = $scope.raw;
          if (raw.scrollTop + raw.offsetHeight > (raw.scrollHeight*0.6)) {
            $scope.autoScroller+=$scope.increaseAmount;
            $scope.$apply();
          }
          lastScrolledTime=now;
        }
      }]
    };
  });
  angular.module('commonDirectives')
    .filter('ellipsis', function($sce) {
      return function(input,tooltipPlacement,limit,width) {
        //return function(input,tooltipPlacement="top",limit=5,width="100%") won't work in IE

        if (!tooltipPlacement) {
          tooltipPlacement="top";
        }
        if (!limit) {
          limit=5;
        }
        if (!width) {
          width="100%";
        }
        input = input || 'N/A';
        return $sce.trustAsHtml(commonUtils.massagePairDisplayLimit(input,tooltipPlacement));
      };
    });
  angular.module('commonDirectives')
    .directive('labelValueDisplay', function() {
      return {
        restrict: 'E',
        scope: {
          labelKey:"@",
          value:"=",
          labelTooltip:"@",
          disableEllipsis:"@",
          ellipsis:"@"
        },
        template: function(scope, elm,attrs) {
          var disableEllipsis = elm.disableEllipsis;
          if(disableEllipsis){
            var ellipsis = "";
          }else var ellipsis = "| ellipsis"
          return '<cds-label style="inline-block; vertical-align: bottom;" label-key="'+elm.labelKey+'" tooltip-key="'+elm.labelTooltip+'" disable-ellipsis="'+elm.disableEllipsis+'"></cds-label>'+
            ': <div style="display: inline-block; vertical-align: bottom;" ng-bind-html="value'+ellipsis+'"></div>';
        }};
    });
  angular.module('commonDirectives')
    .directive('labelValueDisplayFull', function() {
      return {
        restrict: 'E',
        scope: {
          labelKey:"@",
          value:"=",
          labelTooltip:"@"
        },
        template: function(scope, elm,attrs) {
          return '<cds-label style="inline-block; vertical-align: bottom;" label-key="'+elm.labelKey+'" tooltip-key="'+elm.labelTooltip+'"></cds-label>'+
            ': <div style="display: inline-block; vertical-align: bottom;" ng-bind-html="value"></div>';
        }};
    });
  angular.module('commonDirectives')
    .directive('domainSetValueDisplay', function() {
      return {
        restrict: 'E',
        scope: {
          sorValue:"=",
          entityValue:"="
        },
        template: function(scope, elm,attrs) {
          return '<label-value-display label-key="sorName" value=sorValue></label-value-display>' +
            '&nbsp; &nbsp;<label-value-display label-key="entityName" value=entityValue></label-value-display>'
        }};
    });
  angular.module('commonDirectives').directive('draggableStart', function($parse) {
    return function(scope, element, attrs) {
      var fn = $parse(attrs.draggableStart);
      element.ondragstart=null;
      element.bind("dragstart", function(event) {
        scope.$apply(function() {
          fn(scope,{$event:event});
        });
      });
    };
  });
  angular.module('commonDirectives').directive('draggableDrop', function($parse) {
    return function(scope, element, attrs) {
      var fn = $parse(attrs.draggableDrop);
      element.ondragstart=null;
      element.bind("drop", function(event) {
        fn(scope,{$event:event});
      });
      element.bind("dragover", function(event) {
        event.preventDefault();
      });
    };
  });
  angular.module('commonDirectives').directive('checkBoxFilter', function () {
    return {
      restrict: 'E',
      scope: {
        'ngModel':'=',
        'onChange': '&'
      },
      template: '<textarea rows="3" class="form-control" ng-change="filterNames(filter)" ng-model="filter"></textarea>',
      link: function (scope, element, attrs) {
        scope.filter='';
        scope.filterNames = function filterNames(s) {
          var concat = [];
          scope.ngModel.inputFilterArray = concat.concat(scope.filter.split(/[\r?\n,]+/))
          scope.onChange();
        }
        scope.$watch('ngModel.inputFilterArray', function(newValue, oldValue) {
          if(newValue.length != oldValue.length)
            scope.filter = scope.ngModel.inputFilterArray.join('\r\n');
          scope.onChange();
        });
        element.bind("keydown keypress", function (event) {
          scope.filterNames(scope.filter);
        });
      }
    }
  });
})();

(function(){
  "use strict";
  angular.module('commonDirectives').directive('fieldNameUnique', [function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        ngModel.$validators.unique = function(modelValue, viewValue){
          var prop = ngModel.$name,
            list = scope[attrs.fieldNameUnique],
            currentValue = modelValue || viewValue;

          if (!ngModel || !element.val()) {
            return false;
          }
          if (scope.$eval(attrs.ngReadonly) || scope.$eval(attrs.ngDisabled)){
            return true;
          }

          var inUse = list.some(function(item) {
            if(item[prop].trim){
              return item[prop].trim().toUpperCase() === currentValue.trim().toUpperCase();
            }else{
              return item[prop] + '' === currentValue;
            }
          });
          return !inUse;
        };
      }
    }
  }])
})();

(function(){
  "use strict";
  angular.module('commonDirectives').directive('validatePattern', [function () {
    var validation = {
      'all':{
        regesp:  'all'
      },
      //Usage ID field
      'all-no-space':{
        regesp:  /^[^\s]{0,100}$/,
        message: 'No Space',
        width: '100'
      },
      'alpha':{
        regesp: /^[a-zA-Z\d\_\.\s]+$/i,
        message: 'No Special Chars',
        width: '150'
      },
      //Usage ID field
      'alpha-no-space':{
        regesp:  /^[a-zA-Z0-9\-_]{0,100}$/,
        message: 'No Special Chars or Space',
        width: '170'
      },
      'num':{
        regesp:  /^-?[0-9]\d*(\.\d+)?$/,
        message: 'Numbers Only',
        width: '130px'
      },
      'phone':{
        regesp:  /^[789]\d{9}$/,
        message: 'Phone format',
        width: '130px'
      },
      'url':{
        regesp:  /^((?:http|ftp)s?:\/\/)(?:(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+(?:[A-Z]{2,6}\.?|[A-Z0-9-]{2,}\.?)|localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::\d+)?(?:\/?|[\/?]\S+)$/i,
        message: 'Url format',
        width: '130px'
      },
      //Usage in Path
      'path':{
        regesp: /^[\da-z\/\-\_]+$/i,
        message: 'Path format',
        width: '130px'
      },
      'email':{
        regesp:   /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
        message: 'Email format',
        width: '130px'
      }
    };

    return {
      restrict:'A',
      link: function(scope, elm, attr) {
        var valobj = validation[attr.validatePattern] || validation['all'];
        elm.on("blur",function() {
          setTimeout(function(){
            if(valobj.regesp !== 'all') $(elm).parent().find('.valpattern').css('width',valobj.width).html(valobj.message);
          }, 10);
        });
        elm.on("keyup",function(){
          valobj.regesp !== 'all'? elm.scope().patternValidation = valobj.regesp : elm.scope().patternValidation = false;
        });
      }
    }
  }])
})();
