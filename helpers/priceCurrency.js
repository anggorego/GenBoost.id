function symbolRp(data){
  return data.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });
}
// console.log(rp(1000000));
// rp(data)
module.exports = symbolRp