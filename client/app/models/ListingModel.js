import Immutable from 'immutable';
import { Image, ImageRefs } from './ImageModel';

const ListingModel = Immutable.Record({
  id: 'uuid',
  title: 'Listing',
  images: new Immutable.List([new ImageRefs({
    square: new Image(),
    square2x: new Image(),
  })]),
  price: 1,
  priceUnit: '$',
  per: '/ day',
  distance: 1,
  distanceUnit: 'km',
  authorId: 'foo',
  author: new Immutable.Record(),

  // these need to be updated
  listingURL: 'https://example.com/listing/1',
});

export const parse = (l) => new ListingModel({
  id: l.get(':id'),
  title: l.getIn([':attributes', ':title']),
  images: l.getIn([':attributes', ':images']),
  authorId: l.getIn([':relationships', ':author', ':id']),
});

export default ListingModel;
