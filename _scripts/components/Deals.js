import React, {Component} from 'react';

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTrue: false,
      dealAmount: document.getElementById("numberOfDeals").value
    }
  }

  componentDidMount() {
    let inputs = document.querySelectorAll("input:not(.chooseNumber)")
    let blocks = document.querySelectorAll(".deal-block")
    let _this = this
    let links = document.querySelector(".generate-links")
    let genCSV = document.getElementById("genCSV")
    let dealAmount = document.getElementById("numberOfDeals")
    let data = []
    let x

    dealAmount.addEventListener("keyup", function() {
      _this.setState({
        dealAmount: dealAmount.value
      })
      let inputs = document.querySelectorAll("input")
      data.length = _this.state.dealAmount
      _this.createDownloadJSONButton(data)
      genCSV.addEventListener("click", function(e) {
        _this.DownloadJSON2CSV(data)
      })
    })

    for(let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", function(e) {
        _this.setState({
          inputTrue: true
        })
        data.length = 0

        for(x = 0; x < _this.state.dealAmount; x++ ) {
          data.push(
            {
              "Name": document.querySelector("#name" + (x+1)).value,
              "Spec": document.querySelector("#variant" + (x+1)).value,
              "Image": document.querySelector("#image" + (x+1)).value,
              "Monthly": parseInt(document.querySelector("#monthly" + (x+1)).value),
              "Deposit": parseInt(document.querySelector("#deposit" + (x+1)).value),
              "Months": parseInt(document.querySelector("#months" + (x+1)).value),
              "USP": parseInt(document.querySelector("#usp" + (x+1)).value)
            }
          )
        }
        _this.createDownloadJSONButton(data)
      })
    }

    genCSV.addEventListener("click", function(e) {
      _this.DownloadJSON2CSV(data)
    })
  }

  /* Render blocks function */
  renderBlocks() {
    let blksToRender = []
    let dealAmount = parseInt(this.state.dealAmount)
    for(let i = 0; i < dealAmount; i++) {
      blksToRender.push({"number": i+1})
    }
    const blks = blksToRender.map(blk => (
      <div className="col-md-6 deal-block" key={blk.number}>
        <div className="mb-4 border border-info rounded p-2 p-sm-4">
          <h5>{"Deal " + blk.number + ":"}</h5>
          <div className="form-group d-block">
            <label htmlFor={"name" + blk.number} className="d-block mb-0">Car name</label>
            <input type="text" name="Name" id={"name" + blk.number} className="d-block form-control" />
          </div>
          <div className="form-group d-block">
            <label htmlFor={"variant" + blk.number} className="d-block mb-0">Variant</label>
            <input type="text" name="Spec" id={"variant" + blk.number} className="d-block form-control" />
          </div>
          <div className="form-group d-block">
            <label htmlFor={"deposit" + blk.number} className="d-block mb-0">Deposit (Dont include £)</label>
            <input type="number" name="Deposit" id={"deposit" + blk.number} className="d-block form-control" />
          </div>
          <div className="form-group d-block">
            <label htmlFor={"monthly" + blk.number} className="d-block mb-0">Monthly (Dont include £)</label>
            <input type="number" name="Monthly" id={"monthly" + blk.number} className="d-block form-control" />
          </div>
          <div className="form-group d-block">
            <label htmlFor={"image" + blk.number} className="d-block mb-0">Image URL</label>
            <input type="text" name="Image" id={"image" + blk.number} className="d-block form-control" />
          </div>
          <div className="form-group d-block">
            <label htmlFor={"usp" + blk.number} className="d-block mb-0">USP (e.g Quick deliver or Special offer)</label>
            <input type="text" name="USP" id={"usp" + blk.number} className="d-block form-control" />
          </div>
          <div className="form-group d-block">
            <label htmlFor={"months" + blk.number} className="d-block mb-0">Term (months)</label>
            <input type="number" name="Months" id={"months" + blk.number} className="d-block form-control" />
          </div>
        </div>
      </div>
    ))
    return blks
  }

  /* Download button functions */
  DownloadJSON2CSV(objArray) {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray
    let str = 'Name, Spec, Image, Monthly, Deposit, Months, USP' + '\r\n'

    for (let i = 0; i < array.length; i++) {
      let line = ''

      for (let index in array[i]) {
        line += array[i][index] + ','
      }

      line.slice(0, line.Length - 1)

      str += line + '\r\n'
    }
    let blob = new Blob([str], {
      type: "text/csv"
    })
    let url = URL.createObjectURL(blob)
    genCSV.href = url
  }

  createDownloadJSONButton(data){
    let json = JSON.stringify(data)
    let blob = new Blob([json], {
      type: "application/json"
    })
    let url = URL.createObjectURL(blob)

    document.querySelector("#genJSON").href = url
  }

  render() {
    return (
      <div className="row">
      {this.renderBlocks()}
        <div className={"generate-links " + (this.state.inputTrue ? 'd-block' : 'd-none')}>
          <div className="form-group d-block">
            <a href="#" id="genJSON" className="btn btn-primary" download="affinity-deals.json">Generate JSON</a>
            <a href="#" id="genCSV" className="btn btn-info" download="affinity-deals.csv">Generate CSV</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Data
