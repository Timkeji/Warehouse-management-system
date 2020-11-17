
var SERVER_PATH = 'http://project.phonbe.cn';

$.ajax({

    type: "GET",
    url: SERVER_PATH + '/api/superadmin/inboundinformationplus',
    dataType: "json",
    success: function (data) {
     
        if (data.code == 200) {
            var tab = $("#form");
            var str = "";
            for (let i = 0; i < data.data.length; i++) {
                str += `    <tr>
                   <td>${data.data[i].product_name}</td>
                   <td>${data.data[i].product_num}</td>
                   <td><span>${data.data[i].warehouse_name}</span></td>
                   <td><span>${data.data[i].super_id}</span></td>
                   <td><span>${data.data[i].management}</span></td>
                 
                 </tr>
              `
            }
            tab.append(str)
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

