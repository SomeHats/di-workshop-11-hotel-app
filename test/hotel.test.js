const chai = require('chai')
const expect = chai.expect

var Hotel = require('../models/hotel')

describe('Hotel', function() {
  describe('constructor', function() {
    it('sets the name attribute from its inputs', function() {
      var hotel = new Hotel('Hilton Metropole', 'London')
      expect(hotel.name).to.equal('Hilton Metropole')
    })

    it('sets the city attribute from its inputs', function() {
      var hotel = new Hotel('Hilton Metropole', 'London')
      expect(hotel.city).to.equal('London')
    })

    it('sets the reviews attribute to an empty array', function() {
      var hotel = new Hotel('Hilton Metropole', 'London')
      expect(hotel.reviews).to.deep.equal([])
    })
  })

  describe('reviewCount', function() {
    it('returns 0 when there are no reviews', function() {
      var hotel = new Hotel('Hilton Metropole', 'London')
      var result = hotel.reviewCount()
      expect(result).to.equal(0)
    })
  })
})
