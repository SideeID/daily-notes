/**
 * @TODO
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */

const util = require('util');

function getProvinces(countryId, callback) {
  setTimeout(() => {
    if (countryId === 'id') {
      callback(null, [
        { id: 'id-jk', name: 'Jakarta' },
        { id: 'id-bt', name: 'Banten' },
        { id: 'id-jr', name: 'Jawa Barat' },
      ]);
      return;
    }

    callback(new Error('Country not found'), null);
  }, 1000);
}

const getProvincesPromise = util.promisify(getProvinces);
module.exports = { getProvinces: getProvincesPromise };

function withDrawMoney (amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount > 100) {
                reject(new Error('Not enough money to withdraw'))
            }
            resolve(amount)
        }, 1000);
    })
}

function buyCinemaTicket (money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 10) {
                reject(new Error('not enough money to buy ticket'))
            }
            resolve('ticket-1')
        }, 1000);
    })
}

function foInsideCinema (ticket) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!ticket) {
                reject(new Error('No ticket'))
            }
            resolve('enjoy the movie')
        }, 1000);
    })
}

function watchMovie() {
    withDrawMoney(10)
      .then((money) => buyCinemaTicket(money))
      .then((ticket) => goInsideCinema(ticket))
      .then((result) => console.log(result))
      .catch((error) => console.log(error.message));
  }

watchMovie();

async function nonton () {
    
}