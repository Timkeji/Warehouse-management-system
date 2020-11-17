
var SERVER_PATH = 'http://project.phonbe.cn';

$.ajax({

    type: "GET",
    url: SERVER_PATH + '/api/superadmin/traninformationdropdis',
    dataType: "json",
    data:{

      warehouse_name:"成都龙泉储存库",
      status:"不足"

    },
    success: function (data) {
      console.log(data)
     
        if (data.code == 200) {
            var tab = $("#form");
            var str = "";
            for (let i = 0; i < data.data.length; i++) {
                str += `    <tr>
                   <td>${data.data[i].warehouse_name}</td>
                   <td>${data.data[i]. product_name}</td>
                   <td>${data.data[i]. product_id}</td>
                   <td  ><span>${data.data[i]. status}</span></td>
                   <td><span   class="approval" onclick="trans(this)">调货</span></td>
                 
                 </tr>
              `
            }
            tab.empty()
            tab.append(str)
    //         if(status="不足"){
    //  console.log("不足");
    //         }
            console.log("成功了"),
                console.log(data)
        } else {
            alert("信息错误")
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



  function trans(a){   
    var self = $(a).parent().prev().prev().text();
    var hourse=$(a).parent().prev().prev().prev().prev().text();
    var productname=$(a).parent().prev().prev().prev().text();
    console.log(self) 
    console.log(hourse) 
    console.log(productname) 
window.location.href="../html/Transfer-fill.html?formid="+self+"&&hourse="+hourse+"&&name="+productname
  }
  function category(){
    var select=$("#city option:selected").text()
    console.log(select);
    var selectsta=$("#status option:selected").text()
    console.log(selectsta);

    $.ajax({
      
      type: "GET",
      url: SERVER_PATH + '/api/superadmin/traninformationdropdis',
      dataType: "json",
      data:{
  
        warehouse_name:select,
        status:selectsta
  
      },
      success: function (data) {
        console.log(data)
       
          if (data.code == 200) {
              var tab = $("#form");
              var str = "";
              for (let i = 0; i < data.data.length; i++) {
                  str += `    <tr>
                     <td>${data.data[i].warehouse_name}</td>
                     <td>${data.data[i]. product_name}</td>
                     <td>${data.data[i]. product_id}</td>
                     <td ><span>${data.data[i]. status}</span></td>
                     <td><span   class="approval" onclick="trans(this)">调货</span></td>
                   
                   </tr>
                `
              }
              tab.empty()
              tab.append(str)
      //         if(status="不足"){
      //  console.log("不足");
      //         }
              console.log("成功了"),
                  console.log(data)
          } else {
              alert("信息错误")
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