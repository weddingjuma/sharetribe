import Immutable from 'immutable';

export const Image = Immutable.Record({
  type: ':square',
  height: 408,
  width: 408,
  url: null,
});

export const ImageRefs = Immutable.Record({
  square: new Image(),
  square2x: new Image(),
});

const ListingModel = Immutable.Record({
  id: 'uuid',
  title: 'Listing',
  images: new Immutable.List([new ImageRefs({
    square: new Image(),
    square2x: new Image(),
  })]),

  // these need to be updated
  listingURL: 'https://example.com/listing/1',
  avatarURL: 'https://placehold.it/40x40',
  profileURL: 'https://example.com/anonym',
  price: 1,
  priceUnit: '$',
  per: '/ day',
  distance: 1,
  distanceUnit: 'km',
});

export const parse = (l) => new ListingModel({
  id: l.get(':id'),
  title: l.getIn([':attributes', ':title']),
  images: l.getIn([':attributes', ':images']),
});

export default ListingModel;
