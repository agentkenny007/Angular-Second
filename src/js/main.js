import angular from 'angular';
import GifController from './controllers/gif.controller';
import { serverConstant } from './server.constant'

angular
   .module('app',[])
   .constant('SERVER', serverConstant)
   .controller('GifController', GifController);
