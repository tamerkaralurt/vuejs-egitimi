/**
 * faker: fake veri oluşturmamıza yarayan bir kütüphanedir.
 * lodash: işlevsel programlama paradigmasını kullanarak genel programlama görevleri için faydalı işlevler sağlayan bir JavaScript kütüphanesidir.
 * json-server -p 3001 generate.js
 * */
module.exports = function () {
  var faker = require('faker');
  var _ = require('lodash');

  return {
      //lodash.times yardımıyla 100 tane rastgene sayı üretiliyor.
      products: _.times(100, function (n) {
         return {
             id: n,
             baslik: faker.lorem.sentence(),
             kategori: faker.lorem.sentence(2),
             tutar: faker.finance.amount(10, 100, 2, '₺'),
             resim: faker.image.imageUrl(320, 240, 'technics')
         }
      }),
      categories: _.times(20, function (n) {
          return {
              id: n,
              title: faker.lorem.sentence(2),
          }
      }),
  }
};