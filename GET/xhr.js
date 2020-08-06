let txnType = 'debit';
let uid = 4;

const sendHttpRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = 'json';

    if (data) {
      xhr.setRequestHeader('Content-Type', 'application/json');
    }

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject('Something went wrong!');
    };

    xhr.send(JSON.stringify(data));
  });
  return promise;
};

const getPages = () => {
    let datamine = []
  sendHttpRequest('GET', 'https://jsonmock.hackerrank.com/api/transactions/search?txmType=' + txnType +'/&page=1/&userId=' + uid).then(responseData => {
    console.log(responseData);
    let pages = JSON.stringify(responseData.total_pages)
    console.log(pages)
    for(let i = 0; i < pages; i++){
        sendHttpRequest('GET', 'https://jsonmock.hackerrank.com/api/transactions/search?txmType=' + txnType +'/&page='+i+'/&userId=' + uid).then(responseData => {
            for()Console.log(responseData.data.id)
        }
    }
  });
};

console.log(getPages() + "wtf");

