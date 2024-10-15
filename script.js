document.getElementById("redirectForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const answer = document.getElementById("answer").value.trim().toLowerCase();
    if (answer === "3") {
        window.location.href = "https://families.google.com/jp/GO_s1ZAO6lnX3Gw9pNO4wUtGH0qHng";
    }else if ( answer === "2" ){
        window.location.href = "https://families.google.com/jp/GO_s1ZAO6lnX3Gw9pNO4wUtGH0qHng";
    }else if ( answer === "5" ){
        window.location.href = "https://families.google.com/jp/GO_s1ZAO6lnX3Gw9pNO4wUtGH0qHng";
    }else {
        alert("Jawaban salah. Coba lagi!");
    }
});