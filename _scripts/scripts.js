
let inputs = document.querySelectorAll("input");
let links = document.querySelector(".generate-links")

for(let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", function () {
    links.classList.remove("d-none")
    links.classList.add("d-block")
    let data = [
      {
        "Name": document.querySelector("#name1").value,
        "Spec": document.querySelector("#variant1").value,
        "Image": document.querySelector("#image1").value,
        "Monthly": "£" + document.querySelector("#monthly1").value,
        "Deposit": "£" + document.querySelector("#deposit1").value
      },
      {
        "Name": document.querySelector("#name2").value,
        "Spec": document.querySelector("#variant2").value,
        "Image": document.querySelector("#image2").value,
        "Monthly": "£" + document.querySelector("#monthly2").value,
        "Deposit": "£" + document.querySelector("#deposit2").value
      },
      {
        "Name": document.querySelector("#name3").value,
        "Spec": document.querySelector("#variant3").value,
        "Image": document.querySelector("#image3").value,
        "Monthly": "£" + document.querySelector("#monthly3").value,
        "Deposit": "£" + document.querySelector("#deposit3").value
      },
      {
        "Name": document.querySelector("#name4").value,
        "Spec": document.querySelector("#variant4").value,
        "Image": document.querySelector("#image4").value,
        "Monthly": "£" + document.querySelector("#monthly4").value,
        "Deposit": "£" + document.querySelector("#deposit4").value
      },
    ]
    createDownloadButton(data)
  });
}

function createDownloadButton(data) {
  let json = JSON.stringify(data);
  let blob = new Blob([json], {type: "application/json"});
  let url  = URL.createObjectURL(blob);

  document.querySelector("#genJSON").href = url;
}
