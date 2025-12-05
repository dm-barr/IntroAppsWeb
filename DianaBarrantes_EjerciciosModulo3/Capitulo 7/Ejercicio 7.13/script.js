const ARTICULOS = [
  { id: 1, nombre: "Artículo 1", precio: 239.99 },
  { id: 2, nombre: "Artículo 2", precio: 129.75 },
  { id: 3, nombre: "Artículo 3", precio: 99.95 },
  { id: 4, nombre: "Artículo 4", precio: 350.89 }
];

const SUELDO_BASE = 200;
const PORC_COMISION = 0.09;

const tbody = document.getElementById("items-body");
const clearBtn = document.getElementById("clear-all");
const calculateBtn = document.getElementById("calculate");
const resultadoDiv = document.getElementById("resultado");

const currencyFormatter = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

function renderRows(){
  tbody.innerHTML = "";
  ARTICULOS.forEach(item => {
    const tr = document.createElement("tr");

    const tdCheck = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `check-${item.id}`;
    checkbox.dataset.id = item.id;
    tdCheck.appendChild(checkbox);

    const tdName = document.createElement("td");
    tdName.textContent = `${item.nombre}`;

    const tdPrice = document.createElement("td");
    tdPrice.textContent = currencyFormatter.format(item.precio);

    const tdQty = document.createElement("td");
    tdQty.className = "right";
    const qtyInput = document.createElement("input");
    qtyInput.type = "number";
    qtyInput.min = "1";
    qtyInput.value = "1";
    qtyInput.className = "qty";
    qtyInput.id = `qty-${item.id}`;
    qtyInput.disabled = true;
    tdQty.appendChild(qtyInput);

    checkbox.addEventListener("change", () => {
      qtyInput.disabled = !checkbox.checked;
      if(!checkbox.checked) qtyInput.value = 1;
    });

    tr.appendChild(tdCheck);
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    tr.appendChild(tdQty);

    tbody.appendChild(tr);
  });
}

function clearSelection(){
  ARTICULOS.forEach(item => {
    const checkbox = document.getElementById(`check-${item.id}`);
    const qtyInput = document.getElementById(`qty-${item.id}`);
    if(checkbox) checkbox.checked = false;
    if(qtyInput){ qtyInput.disabled = true; qtyInput.value = 1; }
  });
  resultadoDiv.style.display = "none";
  resultadoDiv.innerHTML = "";
}

function calcularIngresos(){
  let ventasBrutas = 0;
  const desgloses = [];

  ARTICULOS.forEach(item => {
    const checkbox = document.getElementById(`check-${item.id}`);
    const qtyInput = document.getElementById(`qty-${item.id}`);
    if(checkbox && checkbox.checked){
      let qty = Number(qtyInput.value);
      if(!Number.isFinite(qty) || qty < 1) qty = 1;
      const subtotal = item.precio * qty;
      ventasBrutas += subtotal;
      desgloses.push({ nombre: item.nombre, precio: item.precio, cantidad: qty, subtotal });
    }
  });

  if(ventasBrutas === 0){
    resultadoDiv.style.display = "block";
    resultadoDiv.innerHTML = `<strong>No se han marcado ventas.</strong>`;
    return;
  }

  const comision = ventasBrutas * PORC_COMISION;
  const sueldoTotal = SUELDO_BASE + comision;

  let html = `<h3 style="margin-top:0;margin-bottom:6px">Resultado</h3>`;
  html += `<div class="small">Sueldo base: <strong>${currencyFormatter.format(SUELDO_BASE)}</strong></div>`;
  html += `<table><thead><tr><th>Artículo</th><th>Precio</th><th class="right">Cantidad</th><th class="right">Subtotal</th></tr></thead><tbody>`;
  desgloses.forEach(d => {
    html += `<tr><td>${d.nombre}</td><td>${currencyFormatter.format(d.precio)}</td><td class="right">${d.cantidad}</td><td class="right">${currencyFormatter.format(d.subtotal)}</td></tr>`;
  });
  html += `</tbody></table>`;
  html += `<div class="small">Ventas brutas: <strong>${currencyFormatter.format(ventasBrutas)}</strong></div>`;
  html += `<div class="small">Comisión (9%): <strong>${currencyFormatter.format(comision)}</strong></div>`;
  html += `<div style="margin-top:8px;font-weight:700">Sueldo total (base + comisión): <span style="float:right">${currencyFormatter.format(sueldoTotal)}</span></div>`;

  resultadoDiv.style.display = "block";
  resultadoDiv.innerHTML = html;
}

renderRows();
clearBtn.addEventListener("click", clearSelection);
calculateBtn.addEventListener("click", calcularIngresos);
