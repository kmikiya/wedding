document.getElementById('password').addEventListener('input', function(e) {
    const correctPassword = document.getElementById('correctPassword').value;  // HTMLからパスワードを取得
    const inputPassword = e.target.value;

    if (inputPassword === correctPassword) {
        document.getElementById('mosaic').style.filter = 'none';
        document.querySelector('.content').style.display = 'none';
    } else {
        document.getElementById('mosaic').style.filter = 'blur(8px)';
        document.getElementById('message').textContent = '合言葉を入力';
    }
});
