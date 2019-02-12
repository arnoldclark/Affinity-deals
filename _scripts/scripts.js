
let submitBtn = document.querySelectorAll("input");

for(let i = 0; i < submitBtn.length; i++ ) {
  submitBtn[i].addEventListener("input", function () {
    let data = [
      {
        "Name": document.querySelector("#name1").value,
        "Spec": document.querySelector("#variant1").value,
        "Image": document.querySelector("#deposit1").value,
        "Monthly": "£" + document.querySelector("#monthly1").value,
        "Deposit": "£" + document.querySelector("#image1").value
      },
      {
        "Name": document.querySelector("#name2").value,
        "Spec": document.querySelector("#variant2").value,
        "Image": document.querySelector("#deposit2").value,
        "Monthly": "£" + document.querySelector("#monthly2").value,
        "Deposit": "£" + document.querySelector("#image2").value
      },
      {
        "Name": document.querySelector("#name3").value,
        "Spec": document.querySelector("#variant3").value,
        "Image": document.querySelector("#deposit3").value,
        "Monthly": "£" + document.querySelector("#monthly3").value,
        "Deposit": "£" + document.querySelector("#image3").value
      },
      {
        "Name": document.querySelector("#name4").value,
        "Spec": document.querySelector("#variant4").value,
        "Image": document.querySelector("#deposit4").value,
        "Monthly": "£" + document.querySelector("#monthly4").value,
        "Deposit": "£" + document.querySelector("#image4").value
      },
    ]
    createDownloadButton(data)
  });
}

function createDownloadButton(data) {
  let json = JSON.stringify(data);
  let blob = new Blob([json], {type: "application/json"});
  let url  = URL.createObjectURL(blob);

  document.querySelector("#submitBtn").href = url;
}
