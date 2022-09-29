import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import product from './product';
import banner from './banner';
import livingArea from './livingArea';
import bedRoom from './bedRoom.js';
import kidsRoom from './kidsRoom';
import office from './office';
import restaurant from './restaurant';
import dining  from './dining';
import outdoor from './outdoor';
import tvcabinets from './tvcabinets';


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([product, banner, livingArea, bedRoom,kidsRoom,office, restaurant,dining, outdoor,tvcabinets]),
})
