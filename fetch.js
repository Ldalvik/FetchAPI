function getRequest(url, callback, _headers) {
  var request;
  if(_headers === undefined){
    request = new Request(url, {
      method: 'GET'
    });
  } else {
    request = new Request(url, {
      method: 'GET',
      headers: _headers
    });
  }
  fetch(request).then(function(r) {
    return r.text();
  }).then(function(response) {
    callback(response);
  }).catch(function(err) {
    callback(err);
  });
}

function postRequest(url, callback, _headers) {
  var request;
  if(_headers === undefined){
    request = new Request(url, {
      method: 'POST'
    });
  } else {
    request = new Request(url, {
      method: 'POST',
      headers: _headers
    });
  }
  fetch(request).then(function(r) {
    return r.text();
  }).then(function(response) {
    callback(response);
  }).catch(function(err) {
    callback(err);
  });
}

function loopObjectKeys(json, callback) {
  for (var key in json) {
    callback(json[key]);
  }
}

function loopObjectValues(json, callback) {
  for (var value in json) {
    callback(json[value]);
  }
}

function loopArray(json, callback) {
  for (var i in json) {
    callback(json[i]);
  }
}

function parse(json){
  return JSON.parse(json);
}
