
var SERVER_PATH = 'http://project.phonbe.cn';
var userToken = window.localStorage.getItem("yq_token");
function clear(str) {
  str = str.replace(/,/g, "");//取消字符串中出现的所有逗号 
  return str;
}
clear(userToken),
  console.log(userToken);

$.ajax({

  type: "GET",
  url: SERVER_PATH + '/api/superadmin/wareinformationdropdis',
  // 将json数据转化为字符串
  // cache: false,
  dataType: "json",
  data: {
    product_name: "",
    warehouse_name: "成都龙泉储存库"
  },
  success: function (data) {
    console.log(data)
    if (data.code == 200) {
      var tab = $("#form");
      var str = "";
      var str2 = '';
      var str3 = '';

      for (let i = 0; i < data.data.length; i++) {
        if (data.data[i].status === "不足") {
          str += `    <tr>
                <td>${data.data[i].product_name}</td>
                <td>${data.data[i].product_num}</td>
                <td style="display: none;">${data.data[i].product_id}</td>
                <td class="nopass">${data.data[i].status}</td>
                <td class="info"><span class="trsfor" onclick="Purchase(this)">进货</span><span class="purchase"
                onclick="Transfer(this)"> 调货</span></td>

               
              </tr>
           `
        } if (data.data[i].status === "充足") {
          str2 += `    <tr>
                <td>${data.data[i].product_name}</td>
                <td>${data.data[i].product_num}</td>
                <td style="display: none;">${data.data[i].product_id}</td>
                <td class="pass">${data.data[i].status}</td>
                <td class="info"><span class="trsfor" onclick="Purchase(this)">进货</span><span class="purchase"
                onclick="Transfer(this)"> 调货</span></td>

               
              </tr>
           `
        }
        if (data.data[i].status === "比较充足") {
          str3 += `    <tr>
                <td>${data.data[i].product_name}</td>
                <td>${data.data[i].product_num}</td>
                <td style="display: none;">${data.data[i].product_id}</td>
                <td class="approval">${data.data[i].status}</td>
                <td class="info"><span class="trsfor" onclick="Purchase(this)">进货</span><span class="purchase"
                onclick="Transfer(this)"> 调货</span></td>

               
              </tr>
           `
        }

      }

      tab.append(str)
      tab.append(str3)
      tab.append(str2)
      console.log("成功了")

    } else {
      alert("表单填写错误")
    }

  },
  error: function (data) {

    console.log("失败了");
    console.log(data);
  }
})
$.ajax({

  type: "GET",
  url: SERVER_PATH + '/api/superadmin/fillpurchaseorderdis',
  // 将json数据转化为字符串
  // cache: false,
  dataType: "json",
  data: {
    product_name: "",
    warehouse_name: "成都龙泉储存库"
  },
  success: function (data) {
    console.log(data)
    console.log(data.data.length)
    if (data.code == 200) {
      var tab = $("#Warehouseid");
      var str = "";

      for (let i = 0; i < data.data.length; i++) {

        str += ` <option >${data.data[i].management_id}</option> `
      }
    }

    tab.append(str)

    console.log("成功了")


  },
  error: function (data) {

    console.log("失败了");
    console.log(data);
  }
})
function Purchase(self) {
  var house = $("#trscity option:selected").text()
  var fillproname = $(self).parent().prev().prev().prev().prev().text();
  var productid = $(self).parent().prev().prev().text()
  var workid = $("#Warehouseid option:selected").text()
  $("#fillproname").val(fillproname)
  $("#fillhouse").val(house)
  $("#product_id").val(productid)


  // var $ = layui.jquery;
  layui.use('layer', function () {
    // var $ = layui.jquery
    var layer = layui.layer;
    layer.open({
      type: 1,
      content: layui.jquery('.outcomemoreinfo'),

      end: function (res) {
        layui.jquery('.outcomemoreinfo').css("display", 'none');
      },
      btnAlign: 'c',
      shade: 0,

      btn: ['确定'],
      yes: function (index, layero) {
        var phone = $("#fillphone").val()
        var mgname = $("#fillname").val()
        var mgid=$("#Warehouseid option:selected").text()
        var number = $("#fillpronb").val()

        $("#showmgname").text(mgname)

        $("#showmgid").text(mgid)
        $("#showphone").text(phone)

        $("#showhouse").text(house)

        $("#showproname").text(fillproname)
        $("#shownumber").text(number)
        $("#showproid").text(productid)
        layer.close(layer.index)
        layui.use('layer', function () {
          var layer = layui.layer;
          layer.open({
            type: 1,
            content: layui.jquery('.sureinfo'),

            end: function (res) {
              layui.jquery('.sureinfo').css("display", 'none');
            },
            btnAlign: 'c',
            shade: 0,

            btn: ['确定'],
            yes: function (index, layero) {
              layer.close(layer.index)
              $.ajax({

                type: "POST",
                url: SERVER_PATH + '/api/superadmin/fillpurchaseorder',
              
                dataType: "json",
                data: {
                  product_name: fillproname ,
                  management_id: mgid,
                  warehouse_name:  $("#trscity option:selected").text(),
                  product_id: productid ,
                  product_num: number,
                  token:userToken


                },
                success: function (data) {
                
             
                  if (data.code == 200) {
                  alert("提交成功")
                 
                  }
              else{
                alert("提交失败")
          
              }
              
              
                },
                error: function (data) {
              
                  alert("提交失败")
                 
                }
              })


            },

            // anim: 6,



          });
        });

      },

      // anim: 6,



    });
  });

}

function category() {
  var a = $("#trscity option:selected").text()
  var b = $("#import").val()
  console.log(a);
  console.log(b);
  $.ajax({

    type: "GET",
    url: SERVER_PATH + '/api/superadmin/wareinformationdropdis',
    // 将json数据转化为字符串a
    // cache: false,
    dataType: "json",
    data: {
      product_name: b,
      warehouse_name: a,
    },
    success: function (data) {
      console.log(data)
      if (data.code == 200) {

        var tab = $("#form");
        var str = "";
        var str2 = '';
        var str3 = '';

        for (let i = 0; i < data.data.length; i++) {
          if (data.data[i].status === "不足") {
            str += `    <tr>
                  <td>${data.data[i].product_name}</td>
                  <td>${data.data[i].product_num}</td>
                  <td class="nopass">${data.data[i].status}</td>
                  <td class="info"><span class="trsfor" onclick="Purchase(this)">进货</span><span class="purchase"
                  onclick="Transfer(this)"> 调货</span></td>
  
                 
                </tr>
             `
          } if (data.data[i].status === "充足") {
            str2 += `    <tr>
                  <td>${data.data[i].product_name}</td>
                  <td>${data.data[i].product_num}</td>
                  <td class="pass">${data.data[i].status}</td>
                  <td class="info"><span class="trsfor" onclick="Purchase(this)">进货</span><span class="purchase"
                  onclick="Transfer(this)"> 调货</span></td>
  
                 
                </tr>
             `
          }
          if (data.data[i].status === "比较充足") {
            str3 += `    <tr>
                  <td>${data.data[i].product_name}</td>
                  <td>${data.data[i].product_num}</td>
                  <td class="approval">${data.data[i].status}</td>
                  <td class="info"><span class="trsfor" onclick="Purchase(this)">进货</span><span class="purchase"
                  onclick="Transfer(this)"> 调货</span></td>
  
                 
                </tr>
             `
          }

        }
        tab.empty()

        tab.append(str)
        tab.append(str3)
        tab.append(str2)
        console.log("成功了")

      } else {
        alert("表单填写错误")
      }

    },
    error: function (data) {
      // console.log(XMLHttpRequest.status);
      // console.log(XMLHttpRequest.readyState);
      // console.log(textStatus);
      console.log("失败了");
      console.log(data);
    }
  })

}
function Transfer(a) {
  var productname = $(a).parent().prev().prev().prev().prev().text();
  var proid = $(a).parent().prev().prev().text();
  var hourse = $("#trscity option:selected").text()

  console.log(hourse)
  console.log(productname)
  window.location.href = "../html/Transfer-fill.html?hourse=" + hourse + "&&name=" + productname+"&&formid="+proid
}
function foreach() {
  var a = $("#trscity option:selected").text()
  var b = $("#import").val()
  $.ajax({

    type: "GET",
    url: SERVER_PATH + '/api/superadmin/wareinformationdropdis',
    // 将json数据转化为字符串a
    // cache: false,
    dataType: "json",
    data: {
      product_name: b,
      warehouse_name: a,
    },
    success: function (data) {
      console.log(data)
      if (data.code == 200) {

        var tab = $("#form");
        var str = "";
        var str2 = '';
        var str3 = '';

        for (let i = 0; i < data.data.length; i++) {
          if (data.data[i].status === "不足") {
            str += `    <tr>
                  <td>${data.data[i].product_name}</td>
                  <td>${data.data[i].product_num}</td>
                  <td class="nopass">${data.data[i].status}</td>
                  <td class="info"><span class="trsfor" onclick="Purchase(this)">进货</span><span class="purchase"
                  onclick="Transfer(this)"> 调货</span></td>
  
                 
                </tr>
             `
          } if (data.data[i].status === "充足") {
            str2 += `    <tr>
                  <td>${data.data[i].product_name}</td>
                  <td>${data.data[i].product_num}</td>
                  <td class="pass">${data.data[i].status}</td>
                  <td class="info"><span class="trsfor" onclick="Purchase(this)">进货</span><span class="purchase"
                  onclick="Transfer(this)"> 调货</span></td>
  
                 
                </tr>
             `
          }
          if (data.data[i].status === "比较充足") {
            str3 += `    <tr>
                  <td>${data.data[i].product_name}</td>
                  <td>${data.data[i].product_num}</td>
                  <td class="approval">${data.data[i].status}</td>
                  <td class="info"><span class="trsfor" onclick="Purchase(this)">进货</span><span class="purchase"
                  onclick="Transfer(this)"> 调货</span></td>
  
                 
                </tr>
             `
          }

        }
        tab.empty()

        tab.append(str)
        tab.append(str3)
        tab.append(str2)
        console.log("成功了")

      } else {
        alert("表单填写错误")
      }

    },
    error: function (data) {
      // console.log(XMLHttpRequest.status);
      // console.log(XMLHttpRequest.readyState);
      // console.log(textStatus);
      console.log("失败了");
      console.log(data);
    }
  })

}
function showinfo() {

  var a = $("#Warehouseid option:selected").text()
  $.ajax({

    type: "GET",
    url: SERVER_PATH + '/api/superadmin/fillpurchaseorderlink',
    dataType: "json",
    data: {
      management_id: a
    },
    success: function (data) {

      if (data.code == 200) {
        var a = data.data[0].management
        var b = data.data[0].phone
        $("#fillphone").val(b)
        $("#fillname").val(a)

      } else {
        alert("表单错误")
      }



    },
    error: function (data) {

      console.log("失败了");
      console.log(data);
    }
  })
}