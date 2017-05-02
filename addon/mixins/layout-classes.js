import Mixin from 'ember-metal/mixin';
import { readOnly } from 'ember-computed';
import service from 'ember-service/inject';

export default Mixin.create({
  layoutService: service('device/layout'),
  classNameBindings: ['isMobile', 'isTablet', 'isDesktop', 'isHuge'],
  isMobile: readOnly('layoutService.isMobile'),
  isTablet: readOnly('layoutService.isTablet'),
  isDesktop: readOnly('layoutService.isDesktop'),
  isHuge: readOnly('layoutService.isHuge')
});
