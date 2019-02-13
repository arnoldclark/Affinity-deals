let inputs = document.querySelectorAll("input");
let links = document.querySelector(".generate-links")
let genCSV = document.getElementById("genCSV")
let data

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", function() {
    links.classList.remove("d-none")
    links.classList.add("d-block")
    data = [{
        "Name": document.querySelector("#name1").value,
        "Spec": document.querySelector("#variant1").value,
        "Image": document.querySelector("#image1").value,
        "Monthly": document.querySelector("#monthly1").value,
        "Deposit": document.querySelector("#deposit1").value,
        "Months": document.querySelector("#months1").value
      },
      {
        "Name": document.querySelector("#name2").value,
        "Spec": document.querySelector("#variant2").value,
        "Image": document.querySelector("#image2").value,
        "Monthly": document.querySelector("#monthly2").value,
        "Deposit": document.querySelector("#deposit2").value,
        "Months": document.querySelector("#months2").value
      },
      {
        "Name": document.querySelector("#name3").value,
        "Spec": document.querySelector("#variant3").value,
        "Image": document.querySelector("#image3").value,
        "Monthly": document.querySelector("#monthly3").value,
        "Deposit": document.querySelector("#deposit3").value,
        "Months": document.querySelector("#months3").value
      },
      {
        "Name": document.querySelector("#name4").value,
        "Spec": document.querySelector("#variant4").value,
        "Image": document.querySelector("#image4").value,
        "Monthly": document.querySelector("#monthly4").value,
        "Deposit": document.querySelector("#deposit4").value,
        "Months": document.querySelector("#months4").value
      }
    ]
    createDownloadButton(data)
  });
}

genCSV.addEventListener("click", function(e) {
  DownloadJSON2CSV(data)
})

function DownloadJSON2CSV(objArray) {
  let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
  let str = 'Name, Spec, Image, Deposit, Monthly, Months' + '\r\n';

  for (let i = 0; i < array.length; i++) {
    let line = '';

    for (let index in array[i]) {
      line += array[i][index] + ',';
    }

    line.slice(0, line.Length - 1);

    str += line + '\r\n';
  }
  // window.open("data:text/csv;charset=utf-8," + escape(str))
  let blob = new Blob([str], {
    type: "text/csv"
  });
  let url = URL.createObjectURL(blob);
  genCSV.href = url;
}

function createDownloadButton(data) {
  let json = JSON.stringify(data);
  let blob = new Blob([json], {
    type: "application/json"
  });
  let url = URL.createObjectURL(blob);

  document.querySelector("#genJSON").href = url;
}
