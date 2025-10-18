const container = document.getElementById("container");

function createDivs(num) 
{

    for (let x = 0; x < num; x++)
    {
        const parent = document.createElement("div");
        parent.classList.add("parent");

        for (let y = 0; y < num; y++)
        {
            const child = document.createElement("div");
            child.classList.add("child");

            parent.appendChild(child);
        }

        container.appendChild(parent);  

        parent.addEventListener('mouseover', e => {
            if (e.target !== parent) { // Make sure we're not coloring the parent itself
                const randomColor = `rgb(
                    ${Math.floor(Math.random() * 256)},
                    ${Math.floor(Math.random() * 256)},
                    ${Math.floor(Math.random() * 256)}
                )`;
                e.target.style.backgroundColor = randomColor;
            }
        });



    }
}

let resolution = prompt("Resolution:");

createDivs(resolution);