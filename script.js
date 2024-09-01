document.getElementById('apiButton').addEventListener('click', function() {
    // API 的 URL (示例使用一个公开的API)
    const apiUrl = 'https://api.example.com/data';

    // 使用 fetch 方法调用 API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // 将响应解析为 JSON 格式
        })
        .then(data => {
            // 将返回的数据展示在页面上
            document.getElementById('apiResponse').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            // 处理任何错误
            document.getElementById('apiResponse').innerText = 'Error: ' + error;
        });
});
