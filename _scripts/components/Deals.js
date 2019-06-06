import React, {Component} from 'react';

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTrue: false,
      dealAmount: document.getElementById("numberOfDeals").value,
      showHTML: false
    }
  }

  componentDidMount() {
    let inputs = document.querySelectorAll("input:not(.chooseNumber)")
    let blocks = document.querySelectorAll(".deal-block")
    let _this = this
    let links = document.querySelector(".generate-links")
    let genCSV = document.getElementById("genCSV")
    let genEmail = document.getElementById("genEmail")
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

      genEmail.addEventListener("click", function(e) {
        // e.preventDefault();
        _this.downloadHTML(data)
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
              "C02": document.querySelector("#c02" + (x+1)).value,
              "MPG": document.querySelector("#mpg" + (x+1)).value,
              "Image": document.querySelector("#image" + (x+1)).value,
              "Monthly": parseInt(document.querySelector("#monthly" + (x+1)).value),
              "Deposit": parseInt(document.querySelector("#deposit" + (x+1)).value),
              "Months": parseInt(document.querySelector("#months" + (x+1)).value),
              "USP": document.querySelector("#usp" + (x+1)).value
            }
          )
          console.log(data)
        }
        _this.createDownloadJSONButton(data)
      })
    }

    genCSV.addEventListener("click", function(e) {
      _this.DownloadJSON2CSV(data)
    })

    genEmail.addEventListener("click", function(e) {
      // e.preventDefault();
      _this.downloadHTML(data)
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
      <div className="sm:ch-col--12 md:ch-col--6 deal-block" key={blk.number}>
        <div className="ch-mb--4 ch-ba--1 ch-bc--grey-3 ch-rounded ch-pa--2 sm:ch-pa--4 ch-bg--grey-1">
          <h3>{"Deal " + blk.number + ":"}</h3>
          <div className="ch-form__group ch-display--block">
            <label htmlFor={"name" + blk.number} className="ch-display--block ch-mb--0">Car name</label>
            <input type="text" name="Name" id={"name" + blk.number} className="ch-display--block ch-form__control" />
          </div>
          <div className="ch-form__group ch-display--block">
            <label htmlFor={"variant" + blk.number} className="ch-display--block ch-mb--0">Variant</label>
            <input type="text" name="Spec" id={"variant" + blk.number} className="ch-display--block ch-form__control" />
          </div>
          <div className="ch-row">
            <div className="xs:ch-col--6 ch-mh--0">
              <div className="ch-form__group ch-display--block">
                <label htmlFor={"c02" + blk.number} className="ch-display--block ch-mb--0">C0₂</label>
                <input type="text" name="c02" id={"c02" + blk.number} className="ch-display--block ch-form__control" />
              </div>
            </div>
            <div className="xs:ch-col--6 ch-mh--0">
              <div className="ch-form__group ch-display--block">
                <label htmlFor={"mpg" + blk.number} className="ch-display--block ch-mb--0">MPG</label>
                <input type="text" name="mpg" id={"mpg" + blk.number} className="ch-display--block ch-form__control" />
              </div>
            </div>
          </div>
          <div className="ch-row">
            <div className="xs:ch-col--6 ch-mh--0">
              <div className="ch-form__group ch-display--block">
                <label htmlFor={"deposit" + blk.number} className="ch-display--block ch-mb--0">Deposit (£)</label>
                <input type="number" name="Deposit" id={"deposit" + blk.number} className="ch-display--block ch-form__control" />
              </div>
            </div>
            <div className="xs:ch-col--6 ch-mh--0">
              <div className="ch-form__group ch-display--block">
                <label htmlFor={"monthly" + blk.number} className="ch-display--block ch-mb--0">Monthly (£)</label>
                <input type="number" name="Monthly" id={"monthly" + blk.number} className="ch-display--block ch-form__control" />
              </div>
            </div>
          </div>
          <div className="ch-form__group ch-display--block">
            <label htmlFor={"image" + blk.number} className="ch-display--block ch-mb--0">Image URL</label>
            <input type="text" name="Image" id={"image" + blk.number} className="ch-display--block ch-form__control" />
          </div>
          <div className="ch-row">
            <div className="xs:ch-col--6 ch-mh--0">
              <div className="ch-form__group ch-display--block">
                <label htmlFor={"usp" + blk.number} className="ch-display--block ch-mb--0">USP</label>
                <input type="text" name="USP" id={"usp" + blk.number} className="ch-display--block ch-form__control" />
              </div>
            </div>
            <div className="xs:ch-col--6 ch-mh--0">
              <div className="ch-form__group ch-display--block">
                <label htmlFor={"months" + blk.number} className="ch-display--block ch-mb--0">Term (months)</label>
                <input type="number" name="Months" id={"months" + blk.number} className="ch-display--block ch-form__control" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
    return blks
  }

  /* Download button functions */
  DownloadJSON2CSV(objArray) {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray
    let str = 'Name, Spec, C02, MPG, Image, Monthly, Deposit, Months, USP' + '\r\n'

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

  downloadHTML(data) {
    let str = ``;
    for (let i = 0; i < data.length; i++) {
      str +=
`<table class="container bg-white" bgcolor="#ffffff">
  <tr>
    <td>
      <table class="row row--white">
        <tr class="article">
          <td class="wrapper content">
            <table class="six columns article-image">
              <tr>
                <td class="text-pad-left">
                  <center>
                    <table class="row--white">
                      <tr>
                        <td class="text-pad">
                          <img width="215" label="Car image" src="${data[i].Image}" alt="${ data[i].Name }" class="center"/>
                        </td>
                      </tr>
                    </table>
                  </center>
                </td>
              </tr>
            </table>
          </td>
          <td class="wrapper content last">
            <table class="six columns article-image">
              <tr>
                <td class="text-pad-right">
                  <center>
                    <table class="row--white">
                      <tr>
                        <td class="text-pad">
                          <h5 class="mobile-center make-model">${ data[i].Name }</h5>
                          <p class="mobile-center variant">${ data[i].Spec }</p>
                          <p class="mobile-center emissions">${ data[i].MPG } mpg | ${ data[i].C02 } g/km CO₂</p>
                          <p class="from-price mobile-center">First rental<br><strong><span class="from-price--number">£${ data[i].Deposit }</span></strong></p>
                          <p class="saving mobile-center">Monthly rental<br><strong><span class="saving--number">£${ data[i].Monthly }</span></strong></p>
                          <a href="https://autocentre.acvm.com/cgi-bin/tools/?type=affinity" class="blue-link mobile-center link" color="#00a3e0">Find out more</a>
                        </td>
                      </tr>
                    </table>
                  </center>
                </td>
                <td class="expander"></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

<table class="container bg-white" bgcolor="#ffffff">
  <tr>
    <td>
      <table class="row row--white">
        <tr>
          <td class="wrapper content last">
            <table class="twelve columns">
              <tr>
                <td class="text-pad">
                  <hr>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

`;
    }
    let htmlblob = new Blob([str], {
      type: "text/html"
    })
    let htmlurl = URL.createObjectURL(htmlblob)

    document.querySelector("#genEmail").href = htmlurl
  }

  render() {
    return (
      <>
        <div className="form">
          <div className="ch-container">
            <div className="ch-row">
              {this.renderBlocks()}
            </div>
          </div>
        </div>
      
        <div className="generate-links ch-bt--1 ch-bc--grey-3">
          <div className="ch-form__group ch-display--block">
            <a href="#" id="genJSON" className="ch-mh--2 ch-btn ch-btn--success" download="affinity-deals.json">Generate JSON</a>
            <a href="#" id="genCSV" className="ch-mh--2 ch-btn ch-btn--secondary" download="affinity-deals.csv">Generate CSV</a>
            <a href="#" id="genEmail" className="ch-mh--2 ch-btn ch-btn--primary" download="affinity-deals.html">Generate HTML</a>
          </div>
        </div>
      </>
    );
  }
}

export default Data
