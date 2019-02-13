(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var inputs = document.querySelectorAll("input");
var links = document.querySelector(".generate-links");
var genCSV = document.getElementById("genCSV");
var data;

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", function () {
    links.classList.remove("d-none");
    links.classList.add("d-block");
    data = [{
      "Name": document.querySelector("#name1").value,
      "Spec": document.querySelector("#variant1").value,
      "Image": document.querySelector("#image1").value,
      "Monthly": document.querySelector("#monthly1").value,
      "Deposit": document.querySelector("#deposit1").value,
      "Months": document.querySelector("#months1").value
    }, {
      "Name": document.querySelector("#name2").value,
      "Spec": document.querySelector("#variant2").value,
      "Image": document.querySelector("#image2").value,
      "Monthly": document.querySelector("#monthly2").value,
      "Deposit": document.querySelector("#deposit2").value,
      "Months": document.querySelector("#months2").value
    }, {
      "Name": document.querySelector("#name3").value,
      "Spec": document.querySelector("#variant3").value,
      "Image": document.querySelector("#image3").value,
      "Monthly": document.querySelector("#monthly3").value,
      "Deposit": document.querySelector("#deposit3").value,
      "Months": document.querySelector("#months3").value
    }, {
      "Name": document.querySelector("#name4").value,
      "Spec": document.querySelector("#variant4").value,
      "Image": document.querySelector("#image4").value,
      "Monthly": document.querySelector("#monthly4").value,
      "Deposit": document.querySelector("#deposit4").value,
      "Months": document.querySelector("#months4").value
    }];
    createDownloadButton(data);
  });
}

genCSV.addEventListener("click", function (e) {
  DownloadJSON2CSV(data);
});

function DownloadJSON2CSV(objArray) {
  var array = _typeof(objArray) != 'object' ? JSON.parse(objArray) : objArray;
  var str = 'Name, Spec, Image, Deposit, Monthly, Months' + '\r\n';

  for (var _i = 0; _i < array.length; _i++) {
    var line = '';

    for (var index in array[_i]) {
      line += array[_i][index] + ',';
    }

    line.slice(0, line.Length - 1);
    str += line + '\r\n';
  } // window.open("data:text/csv;charset=utf-8," + escape(str))


  var blob = new Blob([str], {
    type: "text/csv"
  });
  var url = URL.createObjectURL(blob);
  genCSV.href = url;
}

function createDownloadButton(data) {
  var json = JSON.stringify(data);
  var blob = new Blob([json], {
    type: "application/json"
  });
  var url = URL.createObjectURL(blob);
  document.querySelector("#genJSON").href = url;
}

},{}]},{},[1])

