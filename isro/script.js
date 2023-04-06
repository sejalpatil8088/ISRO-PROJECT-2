// Fetch space craft data

fetch("https://isro.vercel.app/api/spacecrafts")
  .then((res) => {
    return res.json();
  })
  .then((objdata) => {
    let markup = "";
    objdata.spacecrafts.map((element) => {
      markup += `<li>${element.name}</li>`;
    });
    document.getElementById("spacecraftData").innerHTML = markup;
  });

// Fetch space launchers data

fetch("https://isro.vercel.app/api/launchers")
  .then((res) => {
    return res.json();
  })
  .then((objdata) => {
    let markup = "";
    objdata.launchers.map((element) => {
      markup += `<li>${element.id}</li>`;
    });
    document.getElementById("launcherstData").innerHTML = markup;
  });

// Fetch center data

fetch("https://isro.vercel.app/api/centres")
  .then((res) => {
    return res.json();
  })
  .then((objdata) => {
    let markup = "";
    objdata.centres.map((element) => {
      markup += `<tr>
      <td>${element.name}</td>
      <td>${element.Place}</td>
      <td>${element.State}</td>
    </tr>`;
    });
    document.getElementById("table-body").innerHTML = markup;
  });

// Search function

const searchFun = () => {
  let filter = document.getElementById("myInput").value.toUpperCase();

  let myTable = document.getElementById("table-data");

  let tr = myTable.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[2];

    if (td) {
      let textValue = td.textContent || td.innerHTML;

      if (textValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};
