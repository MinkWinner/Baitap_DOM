// Fuction -------------------------------------------------------
function tinhLuong() {
  /**
   * Khối 1:
   * Tiền lương 1 ngày: num1
   * Số ngày làm: num2
   *
   * Khối 2:
   *  Gán giá trị cho biến: num1,num2
   *  Lập công thức tính tiền lương = tiền lương 1 ngày * số  ngày làm
   *    num3=num1*num2
   *
   * Khối 3:
   *  Tiền lương: num3
   */

  document.getElementById("txtSalary").innerHTML =
    document.getElementById("inputNum1").value *
    document.getElementById("inputNum2").value;
}

function tinhGiaTriTrungBinh() {
  /**
   * Khối 1:
   *  Số thứ 1: n1
   *  Số thứ 2: n2
   *  Số thứ 3: n3
   *  Số thứ 4: n4
   *  Số thứ 5: n5
   *
   * Khối 2:
   *  Gán giá trị cho biến: n1,n2,n3,n4,n5
   *  Tính trung bình cộng bằng cách lấy tổng các biến chia tổng số lượng biến
   *    tb = (n1+n2+n3+n4+n5)/5
   * Khối 3:
   *  Trung bình cộng: tb
   */

  var n1 = Number(document.getElementById("n1_priceAvg").value);
  var n2 = Number(document.getElementById("n2_priceAvg").value);
  var n3 = Number(document.getElementById("n3_priceAvg").value);
  var n4 = Number(document.getElementById("n4_priceAvg").value);
  var n5 = Number(document.getElementById("n5_priceAvg").value);
  document.getElementById("txtPriceAvg").innerHTML =
    (n1 + n2 + n3 + n4 + n5) / 5;
}

function USDtoVND() {
  /**
   * Khối 1:
   *  Số tiền cần đổi: val
   *
   * Khối 2:
   *  Gán giá trị cho biến: val
   *  Chuyển mệnh giá tiền USD sang Việt bằng cách lấy số tiền cần đổi * mệnh giá
   *    VND = val * 23500
   *  Đổi format giá trị VND (ví dụ: 23500 -> 23,500)
   * Khối 3:
   *  Giá trị sau khi chuyển đổi: VND
   */
  var val = document.getElementById("n1_USDtoVND").value;
  document.getElementById("txtUSDtoVND").innerHTML = Intl.NumberFormat(
    "de-DE",
    {
      style: "currency",
      currency: "VND",
    }
  ).format(val * 23500);
}

const dientich = function (l, w) {
  /**
   * Khối 1:
   *  Chiều dài: l
   *  Chiều rộng: w
   *
   * Khối 2:
   *  Gán giá trị chiều dài và rộng cho biến: l,w
   *  Tính diện tích bằng dài * rộng
   *    s = l * w
   * Khối 3:
   *  Diện tích: s
   */
  return l * w;
};

const chuvi = function (l, w) {
  /**
   * Khối 1:
   *  Chiều dài: l
   *  Chiều rộng: w
   *
   * Khối 2:
   *  Gán giá trị chiều dài và rộng cho biến: l,w
   *  Tính chu vi bằng (dài + rộng)/2
   *    p = (l+w)/2
   * Khối 3:
   *  Chu vi: p
   */
  return (l + w) * 2;
};

function tinhTong() {
  /**
   * Khối 1:
   *  Số có 2 chữ số: numb
   *
   * Khối 2:
   *  Gán giá trị cho biến: numb
   *  Lấy hàng chục của biến: ten
   *  Lấy hàng đơn vị của biến: unit
   *  Cách lấy giá trị hàng chục bằng cách numb/10 và dùng phép toán Math.floor lấy phần nguyên
   *   ten = Math.floor(numb/10)
   *  Cách lấy giá trị hàng đơn vị bằng cách numb%10 (chia lấy phần dư)
   *    unit = numb%10
   *  Tổng của 2 chữ số bằng hàng chục + hàng đơn vị
   *    sum = ten + unit
   * Khối 3:
   *  Tổng 2 chữ số: sum
   */

  var numb = document.getElementById("n1_sum").value;
  if (numb < 100 && numb >= 10) {
    document
      .getElementsByClassName("alert")[4]
      .classList.remove("alert-danger");
    document.getElementsByClassName("alert")[4].classList.add("alert-success");
    var ten = Math.floor(numb / 10);
    var unit = numb % 10;
    document.getElementById("txtSum").innerHTML = ten + unit;
  } else {
    document
      .getElementsByClassName("alert")[4]
      .classList.remove("alert-success");
    document.getElementsByClassName("alert")[4].classList.add("alert-danger");
    document.getElementById("txtSum").innerHTML = "Nhập số có 2 chữ số !!!";
  }
}

// Button call fuction -------------------------------------------------------
document.getElementById("btnSalary").onclick = tinhLuong;

document.getElementById("btnPriceAvg").onclick = tinhGiaTriTrungBinh;

document.getElementById("btnUSDtoVND").addEventListener("click", USDtoVND);

document.getElementById("btnArea_Perimeter").onclick = function () {
  var l = Number(document.getElementById("n1_length").value);
  var w = Number(document.getElementById("n2_width").value);
  document.getElementById("txtArea_Perimeter").innerHTML =
    "Diện tích: " + dientich(l, w) + "; Chu vi: " + chuvi(l, w);
};
