
var SERVER_PATH = 'http://project.phonbe.cn';

$.ajax({

    type: "GET",
    url: SERVER_PATH + '/api/lowadmin/getcargo',
    // 将json数据转化为字符串
    // cache: false,
    dataType: "json",
    success: function (data) {
        if (data.code == 200) {
            var tab = $("#form");
            var str = "";
            for (let i = 0; i < data.data.length; i++) {
                str += `    <tr>
                   <td>${data.data[i].cargo_id}</td>
                   <td>${data.data[i].enough_warehouse}</td>
                   <td><span>调货</span></td>
                   <td class="info"><span class="pass" onclick="trincomeinfo(this)">详情</span></td>
                 </tr>
              `
            }
            tab.append(str)
            console.log("成功了"),
                console.log(data)
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

function trincomeinfo(a) {


    var self = $(a).parent().prevAll().prevAll().prevAll().text();
    console.log(self)
    $.ajax({

        type: "GET",
        url: SERVER_PATH + '/api/lowadmin/checkcargo',
        dataType: "json",
        data: {
            cargo_id: self
        },
        success: function (data) {



            if (data.code == 200) {

                var tab = $("#trsinfo");

                var str = `  
              <tr>
              <td>缺货仓库</td>
              <td>
                <p>${data.data[0].unenough_warehouse}</p>
              </td>
            </tr>
    
            <tr>
              <td>调货仓库</td>
              <td>
                <p>${data.data[0].enough_warehouse}</p>
              </td>
            </tr>
            <tr>
              <td>产品名称</td>
              <td>
                <p>${data.data[0].product_name}</p>
              </td>
            </tr>
            <tr>
              <td>数量</td>
              <td>
                <p>${data.data[0].product_num}</p>
              </td>
            </tr>
            <tr>
              <td>仓库管理员工号</td>
              <td>
                <p>${data.data[0].super_id}</p>
              </td>
            </tr>
            <tr>
              <td>创建时间</td>
              <td>
                <p>${data.data[0].created_at}</p>
              </td>
            </tr>
             
                        
              `
                tab.empty()

                tab.append(str)
                status = data.data[0].type
                console.log(data.data[0].type)
                //流程图判断
                if (status == 1) {
                    $(".complete").addClass("app_pass");
                    $(".lablinear").eq(0).addClass("app_pass");

                }
                else {
                    $(".complete").addClass("app_pass");
                    $(".lablinear").eq(0).addClass("app_pass");
                    $(".labcircle").eq(0).addClass("app_pass");
                }
                layui.use('layer', function () {
                    // var $ = layui.jquery
                    var layer = layui.layer;
                    layer.open({
                        type: 1,
                        content: layui.jquery('.transfermoreinfo'),
            
                        end: function (res) {
                            layui.jquery('.transfermoreinfo').css("display", 'none');
                        },
                        btnAlign: 'c',
                        shade: 0,
            
                        btn: ['确定'],
                        yes: function (index, layero) {
                            layer.close(layer.index)
                            // var userToken = window.localStorage.getItem("yq_token"); 
                            // function clear(str) { 
                            //     str = str.replace(/,/g, "");//取消字符串中出现的所有逗号 
                            //     return str; 
                            //     }
                            //     clear(userToken),
                            //     console.log(userToken);
                            console.log("123")
                            $.ajax({
            
                                type: "GET",
                                url: SERVER_PATH + '/api/lowadmin/updatetype',
                                 data:{
                                    cargo_id: self,
                                    token:"123456",
                                 },
                                dataType: "json",
                                success: function (data) {
                                    if (data.code == 200) {
                                     
                                      alert("消息接收成功")
                                       
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
            
                        },
            
                        // anim: 6,
            
            
            
                    });
                });

            } else {
                alert("表单错误")
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
