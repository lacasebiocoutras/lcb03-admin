requirejs.config({paths:{jquery:"vendor/jquery.2.2.0.min",moment:"vendor/moment-with-fr.2.12.0.min",picturefill:"vendor/picturefill.min",lunr:"vendor/lunr.min",sticky:"plugin/jquery.sticky.min","throttle-debounce":"plugin/jquery.ba-throttle-debounce.min"},shim:{"throttle-debounce":{deps:["jquery"],exports:"throttle-debounce"}}}),requirejs(["app/common"],function(){requirejs(["app/common-sticky"],function(){requirejs(["app/main-default-search"])})});