// 
let string = "";

let buttons = document.querySelectorAll("button");

Array.from(buttons).forEach((button) => {

    button.addEventListener("click", (e) => {

        if (e.target.innerHTML == "=") {
            
            try {
                let expression = string
    .replace(/(\d+)√\((.*?)\)/g, "$1*Math.sqrt($2)")
    .replace(/(\d+)√(\d+(\.\d+)?)/g, "$1*Math.sqrt($2)")
    .replace(/√\((.*?)\)/g, "Math.sqrt($1)")
    .replace(/√(\d+(\.\d+)?)/g, "Math.sqrt($1)")
    .replace(/(\d+)π/g, "$1*Math.PI")
    .replace(/π/g, "Math.PI")
    .replace(/÷/g, "/")
    .replace(/\^/g, "**");

                 string = eval(expression).toString();

            } catch {

                string = "Error";

            }
           

        }

        else if (e.target.innerHTML == "C") {

            string = "";

        }

        else if (e.target.innerHTML == "⌫") {

            string = string.slice(0, -1);

        }

        else if (e.target.innerHTML == "√") {
         string+="√";
        }

        else if (e.target.innerHTML == "%") {

            if (string != "") {
                string = (parseFloat(string) / 100).toString();
            }

        }
        else if(e.target.innerHTML=="()"){
            let open=(string.match(/\(/g)||[]).length;
            let close=(string.match(/\)/g)||[]).length;
            if(open==close){
                string+="(";
            }
            else{
                string+=")";
            }
        }
        else if(e.target.innerHTML=="+/-"){
            if(string.startsWith("-")){
                string=string.slice(1);
            }
            else{
                string="-"+string;
            }

        }

        else {

            string += e.target.innerHTML;

        }

        document.querySelector("input").value = string;

    });

});