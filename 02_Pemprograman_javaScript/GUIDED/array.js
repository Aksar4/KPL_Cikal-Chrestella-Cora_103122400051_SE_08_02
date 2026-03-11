const kotaDikunjungi = ["Jakarta", "Bandung", "Surabaya", "Yogyakarta"];

kotaDikunjungi.unshift("Medan"); 
kotaDikunjungi.push("Bali"); 
kotaDikunjungi.pop(); // hapus array dari belakang
// kotaDikunjungi.reverse();
kotaDikunjungi.splice(0,1); // hapus array by index target

console.log(kotaDikunjungi.slice(1,kotaDikunjungi.length)); 
