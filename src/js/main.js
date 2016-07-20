import angular from 'angular';
import {ButtonController} from './controllers/button.controller';

console.log(angular);

angular
   .module('app',[])
   .controller('ButtonController', ButtonController);
