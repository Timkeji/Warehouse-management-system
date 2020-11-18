var SERVER_PATH = 'http://project.phonbe.cn'

function remove(){
    //    alert("123")
    layui.use('layer', function(){
        var layer = layui.layer;
        layer.open({
            content: '确认删除吗？',
            btnAlign: 'c',
            shade: 0,
            anim: 6,
            skin:'remove',
            icon: 5
          });
      });      
   }

function hwc_inmoreinfo(self){
    var inventory_id=$(self).parent().prev().text()
    console.log(inventory_id)
    $.get(SERVER_PATH+'/api/superadmin/inboundinformationmax?inventory_id='+inventory_id, function (data) {
        let Str = '';
        for (var i = 0; i < data.data.length; i++) {
            $(data.data[i]).each(function () {
                Str += `
                       <tr>
              <td>时间</td>
              <td>
                <p>${data.data[i].created_at}</p>
              </td>
            </tr>

            <tr>
              <td>发送地点</td>
              <td>
                <p>${data.data[i].company}</p>
              </td>
            </tr>
            <tr>
              <td>仓库名</td>
              <td>
                <p>${data.data[i].warehouse_name}</p>
              </td>
            </tr>
            <tr>
              <td>仓库管理员</td>
              <td>
                <p>${data.data[i].management_name}</p>
              </td>
            </tr>
            <tr>
              <td>仓库管理员工号</td>
              <td>
                <p>${data.data[i].management_id}</p>
              </td>
            </tr>
            <tr>
              <td>工人工号</td>
              <td>
                <p>${data.data[i].worker_id}</p>
              </td>
            </tr>
            <tr>
              <td>产品名字</td>
              <td>
                <p>${data.data[i].product_name}</p>
              </td>
            </tr>
            <tr>
              <td>数量</td>
              <td>
                <p>${data.data[i].product_num}</p>
              </td>
            </tr>
            <tr>
              <td>类型</td>
              <td>
                <p>${data.data[i].product_id}</p>
              </td>
            </tr>`;
            });
        }
        $('#forminfo').empty();
        $('#forminfo').append(Str);
    })
    // var $ =layui.jquery;
    layui.use('layer', function(){
        // var $ = layui.jquery
        var layer = layui.layer;
        layer.open({
            type: 1,
            content:layui.jquery('.outcomemoreinfo'),
            end:function (res) {
                layui.jquery('.outcomemoreinfo').css("display",'none');
            },
            btnAlign: 'c',
            shade: 0,
            closeBtn:0,
            btn: ['确定'],
            yes:function(index,layero){
                layer.close(layer.index)
            },
        });
    });
}

$.get(SERVER_PATH+'/api/superadmin/inboundinformation', function (data) {
    console.log(data)
    let Str = '';
    for (var i = 0; i < data.data.length; i++) {
        $(data.data[i]).each(function () {
            Str += `
           <tr>
             <td>${data.data[i].product_id}</td>
             <td>${data.data[i].warehouse_name}</td>
             <td><span>出库</span></td>
             <td style="display: none">${data.data[i].inventory_id}</td>
             <td class="info"><span class="pass" onclick="hwc_inmoreinfo(this)">详情</span></td>
           </tr>`;
        });
    }
    $('#form').empty();
    $('#form').append(Str);
})

function hwc_inboundSeI(){
    var impor = document.getElementById("import").value;
    $.get(SERVER_PATH+'/api/superadmin/inboundseinformation?product_id='+impor, function (data) {
        console.log(data)
        let Str = '';
        for (var i = 0; i < data.data.length; i++) {
            $(data.data[i]).each(function () {
                Str += `
          <tr>
            <td>${data.data[i].product_id}</td>
            <td>${data.data[i].warehouse_name}</td>
            <td><span>出库</span></td>
            <td style="display: none">${data.data[i].inventory_id}</td>
            <td class="info"><span class="pass" onclick="hwc_inmoreinfo(this)">详情</span></td>
          </tr>`;
            });
        }
        $('#form').empty();
        $('#form').append(Str);
    })
}