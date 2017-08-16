import Mixin from '@ember/object/mixin';
import { readOnly } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Mixin.create({
  layoutService: service('device/layout'),
  classNameBindings: ['isMobile', 'isTablet', 'isDesktop', 'isHuge'],
  isMobile: readOnly('layoutService.isMobile'),
  isTablet: readOnly('layoutService.isTablet'),
  isDesktop: readOnly('layoutService.isDesktop'),
  isHuge: readOnly('layoutService.isHuge')
});
