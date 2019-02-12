(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var submitBtn = document.querySelectorAll("input");

for (var i = 0; i < submitBtn.length; i++) {
  submitBtn[i].addEventListener("input", function () {
    var data = [{
      "Name": document.querySelector("#name1").value,
      "Spec": document.querySelector("#variant1").value,
      "Image": document.querySelector("#deposit1").value,
      "Monthly": "£" + document.querySelector("#monthly1").value,
      "Deposit": "£" + document.querySelector("#image1").value
    }, {
      "Name": document.querySelector("#name2").value,
      "Spec": document.querySelector("#variant2").value,
      "Image": document.querySelector("#deposit2").value,
      "Monthly": "£" + document.querySelector("#monthly2").value,
      "Deposit": "£" + document.querySelector("#image2").value
    }, {
      "Name": document.querySelector("#name3").value,
      "Spec": document.querySelector("#variant3").value,
      "Image": document.querySelector("#deposit3").value,
      "Monthly": "£" + document.querySelector("#monthly3").value,
      "Deposit": "£" + document.querySelector("#image3").value
    }, {
      "Name": document.querySelector("#name4").value,
      "Spec": document.querySelector("#variant4").value,
      "Image": document.querySelector("#deposit4").value,
      "Monthly": "£" + document.querySelector("#monthly4").value,
      "Deposit": "£" + document.querySelector("#image4").value
    }];
    createDownloadButton(data);
  });
}

function createDownloadButton(data) {
  var json = JSON.stringify(data);
  var blob = new Blob([json], {
    type: "application/json"
  });
  var url = URL.createObjectURL(blob);
  document.querySelector("#submitBtn").href = url;
}

},{}]},{},[1])

