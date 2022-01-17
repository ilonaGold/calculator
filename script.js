const result = document.querySelector(".result");
const keys = Array.from(document.getElementsByClassName("key"));
const clear = document.querySelector(".clear");

keys.map(key => {
    key.addEventListener("click", (e) => {
        switch(e.target.innerText) {
            case "C":
                result.innerText = "";
                break;
            case "←":
                if(result.innerText) {
                    result.innerText = result.innerText.slice(0, -1);
                }
                break;
            case "=":
                try{
                    result.innerText = math.evaluate(result.innerText);
                } catch {
                    result.innerText = "Error!";
                }
                break;
            default:
                result.innerText += e.target.innerText;
        }
    });
});

