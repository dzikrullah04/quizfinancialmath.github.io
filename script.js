document.getElementById("redirectForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const answer = document.getElementById("answer").value.trim().toLowerCase();
    if (answer === "3") {
        window.location.href = "https://families.google.com/jp/X6tvwti-R265y2yfw9xaUpwMBR0BFg";
    }else if ( answer === "2" ){
        window.location.href = "https://families.google.com/jp/EDmUuhoQCFQ5QQVjCUc_ApgpVgMaQw";
    }else if ( answer === "5" ){
        window.location.href = "https://families.google.com/jp/jQYrsuGXLoHwM3W4Q_YKzGHaLd9cCA";
    }else {
        alert("Jawaban salah. Coba lagi!");
    }
});
